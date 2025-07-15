export async function fetchFarms() {
  const response = await fetch("https://vintage-tracker.com/farms");
  return await response.json();
}
