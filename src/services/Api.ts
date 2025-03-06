export const fetchSeasonsData = async () => {
  try {
    const response = await fetch("http://localhost:7438/seasons");
    if (!response.ok)
      throw new Error("Failed to fetch seasons data from endpoint");
    return await response.json();
  } catch (error) {
    console.error("Error fetching seasons ", error);
  }
};

export const fetchLeaguesData = async () => {
  try {
    const response = await fetch("http://localhost:7438/league");
    if (!response.ok)
      throw new Error("Failed to fetch leagues data from endpoint");
    return await response.json();
  } catch (error) {
    console.error("Error fetching leagues ", error);
  }
};
