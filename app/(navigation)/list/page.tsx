import Link from "next/link";
import ListWrapper from "./list";
import Item from "./item";

export default async function List() {
  const response = await fetch(process.env.SERVER_HOST + "/api/juice");
  const { items } = await response.json();
  const itemArray = items.map((item: string, index: number) => {
    return <Item item={item} key={index} />;
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ListWrapper itemArray={itemArray} items={items} />
      <Link href="/">Home</Link>
    </div>
  );
}
