import axios from "axios";
import { ULR_CHARACTERS } from ".";
import { GetCharactersResponseType } from "../types";

const getCharacters = async () => {
    const response = await axios.get<GetCharactersResponseType>(ULR_CHARACTERS)

    return response
}

const getCharactersByPage = async (page : string) => {
    const url = `${ULR_CHARACTERS}/?page=${page}`
    const response = await axios.get<GetCharactersResponseType>(url)

    return response
}

const getCharactersWithFilter = async(name?:string, specie?:string, type?:string, gender?:string | null, status?:string | null) => {
    const specieUrl = specie !== undefined ? `specie=${specie}` : ''
    const nameUrl = name !== undefined ? `name=${name}` : ''
    const typeUrl = type !== undefined ? `type=${type}` : ''
    const genderUrl = gender !== null ? `gender=${gender}` : ''
    const statusUrl = status !== null ? `status=${status}` : ''

    const filtersUrl = [specieUrl, nameUrl, typeUrl, genderUrl, statusUrl]
        .filter((url) => url !== '')
        .join('&')

    const url = `${ULR_CHARACTERS}/?${filtersUrl}`
    const response = await axios.get<GetCharactersResponseType>(url)

    return response
}

export {getCharacters, getCharactersByPage, getCharactersWithFilter}