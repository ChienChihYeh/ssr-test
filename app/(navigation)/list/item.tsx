export default async function Item({ item = "test" }: { item?: string }) {
  return <p>This is {item} juice.</p>;
}
