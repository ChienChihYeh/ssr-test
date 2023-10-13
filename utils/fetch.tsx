export async function fetchGreetings() {
  const response = await fetch("/api/test");
  const { greeting }: { greeting: string } = await response.json();

  return greeting;
}
