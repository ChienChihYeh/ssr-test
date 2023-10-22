import Link from "next/link"
import { redirect } from "next/navigation"
import Search from "./search"

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
]

export default async function Pagination({
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (
    !searchParams.page ||
    typeof searchParams.page !== "string" ||
    !parseInt(searchParams.page)
  ) {
    redirect("/pagination?page=1")
  }

  const keyword =
    typeof searchParams.search === "string"
      ? searchParams.search.toLowerCase()
      : ""

  const filteredFruitList = fruitList.filter((v) =>
    v.toLowerCase().includes(keyword)
  )
  const noFilteredResult = filteredFruitList.length === 0 && keyword

  const itemPerPage = 3
  const page = parseInt(searchParams?.page)
  const totalPages = Math.ceil(filteredFruitList.length / itemPerPage)
  if (page > totalPages && !noFilteredResult) {
    redirect("/pagination?page=1")
  }
  const pages = (page: number, totalPages: number) => {
    const pageRange = 2
    const pageArray: number[] = []
    const leftBound = page - pageRange <= 0 ? -page + pageRange + 1 : 0
    const rightBound =
      page + pageRange > totalPages ? totalPages - page - pageRange : 0

    for (let i = -pageRange + rightBound; i <= pageRange + leftBound; i++) {
      if (page + i > 0 && page + i <= totalPages) {
        pageArray.push(page + i)
      }
    }
    return pageArray
  }

  const fruits = (page: number, filteredFruitList: string[]) => {
    const startIndex = (page - 1) * itemPerPage
    const fruitsInPage = filteredFruitList.slice(
      startIndex,
      startIndex + itemPerPage
    )
    return fruitsInPage
  }

  function isKeyword(keyword: string): string {
    if (keyword) {
      return "&search=" + keyword
    }
    return ""
  }

  async function keywordSearch(formData: FormData) {
    "use server"
    const searchKeyword = formData.get("keyword")
    if (searchKeyword && typeof searchKeyword === "string") {
      redirect(
        "http://localhost:3000/pagination?page=1&search=" +
          searchKeyword.toLowerCase()
      )
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-black">
      <h1 className="font-bold">Pagination</h1>
      {/* <p>{JSON.stringify(searchParams)}</p> */}
      <div className="m-1 text-center">
        <form action={keywordSearch}>
          <input
            name="keyword"
            className="border border-black mr-1 w-1/2 outline-none"
          ></input>
          <button className="p-1 pl-2 pr-2 bg-black text-gray-200 rounded m-1">
            Search
          </button>
        </form>
        {/* <Search /> */}
        {keyword && (
          <p className="m-2">
            <span className="font-bold">Search:</span> {keyword}
            <Link
              href={"/pagination?page=1"}
              className="p-1 pl-2 pr-2 bg-black text-white rounded m-1 cursor-pointer"
            >
              X
            </Link>
          </p>
        )}
        {noFilteredResult && <p>No matching results.</p>}
        <ul className="list-disc w-fit mb-2 m-auto">
          {fruits(page, filteredFruitList).map((v, i) => {
            return <li key={i}>{v}</li>
          })}
        </ul>
        {pages(page, totalPages).map((v, i) => {
          if (v === page)
            return (
              <span
                key={i}
                className="p-1 pl-2 pr-2 bg-gray-500 text-white rounded m-1 cursor-pointer"
              >
                {v}
              </span>
            )

          return (
            <Link
              key={i}
              href={"/pagination?page=" + v + isKeyword(keyword)}
              className={"p-1 pl-2 pr-2 bg-black text-gray-200 rounded m-1"}
            >
              {v}
            </Link>
          )
        })}
      </div>

      <Link href="/">Home</Link>
    </div>
  )
}
