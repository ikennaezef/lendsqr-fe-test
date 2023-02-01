import axios from "axios"

const BASE_URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/"

export const getUserDetails = async(userId: string) => {
  const response = await axios.get(BASE_URL + userId)

  return response.data;
}