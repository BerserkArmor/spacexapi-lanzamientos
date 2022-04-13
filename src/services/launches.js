const API_URL = "https://api.spacexdata.com/v3";

// export async function getAllLaunches() {
//   try {
//     const response = await fetch(`${API_URL}/launches`);
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

export const getAllLaunches = async () => {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLaunchByFlightNumber = async (flightNumber) => {
  try {
    const response = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
