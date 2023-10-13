export async function fetchGreetings() {
  const response = await fetch("/api/test");
  const { greeting } = await response.json();

  return greeting;
}
