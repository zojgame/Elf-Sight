type StoreType = {
    currentPage: string,
    characters: CharacterType[],
    setCharacters: (characters: CharacterType[]) => void,
    setCurrentPage: (page: string) => void
}

type InfoDataType = {
    count: number,
    next: string,
    prev: string,
    pages: number
}

type CharacterType = {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: {name: string, ulr: string},
    name: string,
    origin: {name: string, url: string},
    species: string,
    status: string,
    type: string,
    url: string
}

type GetCharactersResponseType = {
    info: InfoDataType,
    results: CharacterType[]
}

export type { StoreType, GetCharactersResponseType, CharacterType }