import axios from "axios";
import { ULR_CHARACTERS, GetCharactersResponse } from ".";

const getCharacters = async () => {
    const response = await axios.get<GetCharactersResponse>(ULR_CHARACTERS)

    return response
}

export {getCharacters}