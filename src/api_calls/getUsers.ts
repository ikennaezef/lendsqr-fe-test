import axios from "axios"

const URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "


export const getUsers = async() => {
  const response = await axios.get(URL)

  return response.data;
}