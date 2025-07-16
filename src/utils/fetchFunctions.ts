export async function fetchFarms() {
  const response = await fetch("https://vintage-tracker.com/farms");
  return await response.json();
}

export async function fetchFarmById(id: string) {
const response = await fetch(`https://vintage-tracker.com/farms?id=${id}`);
return await response.json();
}
