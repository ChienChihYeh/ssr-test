import Link from "next/link";
import Search from "./search";

const fruitList = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Peach",
  "Plum",
  "Cherry",
  "Blueberry",
  "Pear",
  "Raspberry",
  "Blackberry",
  "Avocado",
  "Pomegranate",
  "Lemon",
  "Coconut",
];

export default async function Pagination({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let page = 1;

  let isPageError = false;

  if (
    searchParams.page &&
    typeof searchParams.page === "string" &&
    parseInt(searchParams.page)
  ) {
    page = parseInt(searchParams.page);
  } else {
    isPageError = true;
  }

  const keyword =
    typeof searchParams.search === "string"
      ? searchParams.search.toLowerCase()
      : "";

  const filteredFruitList = fruitList.filter((v) =>
    v.toLowerCase().includes(keyword)
  );
  const noFilteredResult = filteredFruitList.length === 0 && keyword;

  const itemPerPage = 3;
  const totalPages = Math.max(
    Math.ceil(filteredFruitList.length / itemPerPage),
    1
  );
  if (page > totalPages && !noFilteredResult) {
    isPageError = true;
  }
  const pages = (page: number, totalPages: number) => {
    const pageRange = 2;
    const pageArray: number[] = [];
    const minBound = page - pageRange <= 0 ? -page + pageRange + 1 : 0;
    const maxBound =
      page + pageRange > totalPages ? totalPages - page - pageRange : 0;

    for (let i = -pageRange + maxBound; i <= pageRange + minBound; i++) {
      if (page + i > 0 && page + i <= totalPages) {
        pageArray.push(page + i);
      }
    }
    return pageArray;
  };

  const fruits = (page: number, filteredFruitList: string[]) => {
    const startIndex = (page - 1) * itemPerPage;
    const fruitsInPage = filteredFruitList.slice(
      startIndex,
      startIndex + itemPerPage
    );
    return fruitsInPage;
  };

  function isKeyword(keyword: string): string {
    if (keyword) {
      return "&search=" + keyword;
    }
    return "";
  }

  if (isPageError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-3xl font-light mb-4">Oops! No Page Found!</p>
        <Link
          href="pagination?page=1"
          className="text-secondary bg-primary py-1 px-2 rounded mb-2"
        >
          Go back
        </Link>
        <Link href="/">Home</Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold">Pagination</h1>
      {/* <p>{JSON.stringify(searchParams)}</p> */}
      <p>{totalPages}</p>
      <div className="m-1 text-center">
        <Search />
        {keyword && (
          <p className="m-2">
            <span className="font-bold">Search:</span> {keyword}
            <Link
              href={"/pagination?page=1"}
              className="p-1 pl-2 pr-2 bg-primary text-secondary rounded m-1 cursor-pointer"
            >
              X
            </Link>
          </p>
        )}
        {noFilteredResult && (
          <>
            <p className="mb-2">No matching results.</p>{" "}
          </>
        )}
        <ul className="list-disc w-fit mb-2 m-auto">
          {fruits(page, filteredFruitList).map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
        {pages(page, totalPages).map((v, i) => {
          if (v === page)
            return (
              <span
                key={i}
                className="p-1 pl-2 pr-2 bg-highlight text-secondary rounded m-1 cursor-pointer"
              >
                {v}
              </span>
            );

          return (
            <Link
              key={i}
              href={"/pagination?page=" + v + isKeyword(keyword)}
              className={"p-1 pl-2 pr-2 bg-primary text-secondary rounded m-1"}
            >
              {v}
            </Link>
          );
        })}
      </div>
      <Link href="/">Home</Link>
    </div>
  );
}
