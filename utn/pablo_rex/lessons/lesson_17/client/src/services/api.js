import axios from "axios";

const API_URL = process.env.REACT_APP_RICK_API_URL || "https://rickandmortyapi.com/api"

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

    // const dataCharacters = [];

    // for (let i = 0; i < results.length; i++) {

    //     character = results[i];

    //     dataCharacters.push({
    //         name: character.name,
    //         image: character.image
    //     })
    // }

    // return dataCharacters;

  } catch (error) {

    console.log(error);
    return [];
  }
}