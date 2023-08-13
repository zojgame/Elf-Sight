import axios from "axios";
import { ULR_CHARACTERS, GetCharactersResponse } from ".";

const getCharacters = async () => {
    const response = await axios.get<GetCharactersResponse>(ULR_CHARACTERS)

    return response
}

const getCharactersByPage = async (page : string) => {
    const url = `${ULR_CHARACTERS}/?page=${page}`
    const response = await axios.get<GetCharactersResponse>(url)

    return response
}

export {getCharacters, getCharactersByPage}