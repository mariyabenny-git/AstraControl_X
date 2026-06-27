const API_URL = "http://localhost:5000";

export async function getDashboardData() {
  const res = await fetch(`${API_URL}/api/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}