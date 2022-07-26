import axios from "axios";

const API_URL = process.env.REACT_APP_RICK_API_URL || "https://rickandmortyapi.com/api"
const AUTH_URL = process.env.REACT_APP_API_URL + "/dashboard/";

export const getAllCharacters = async () => {

  try {


    // const response = await fetch(API_URL + "/character"); //Usando Fetch
    // const jsonData = await response.json();

    const response = await axios.get(API_URL + "/character");
    const jsonData = response.data

    const results = jsonData.results;

    if (!results)
      return [];

    return results.map((element) => {
      return {
        name: element.name,
        image: element.image
      }
    })

  } catch (error) {

    console.log(error);
    return [];
  }
}

export const getOneCharacters = async () => {

  try {
    const dataEmail = localStorage.getItem('email')

    const response = await axios.get(AUTH_URL + dataEmail);
    const jsonData = response.data

    const results = jsonData.results;

    if (!results)
      return [];

    return results.map((element) => {
      return {
        name: element.name,
        email: element.email,
        image: element.image,
        avatar: element.avatar
      }
    })

  } catch (error) {

    console.log(error);
    return [];
  }
}