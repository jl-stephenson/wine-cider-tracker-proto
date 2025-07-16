export async function fetchFarms() {
  const response = await fetch("/api/farms");
  return await response.json();
}

export async function fetchFarmById(id: string) {
const response = await fetch(`/api/farms?id=${id}`);
return await response.json();
}
