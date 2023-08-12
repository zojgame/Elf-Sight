type InfoData = {
    count: number,
    next: string,
    prev: string,
    pages: number
}

type Character = {
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

type GetCharactersResponse = {
    info: InfoData,
    results: Character[]
}

export type {GetCharactersResponse, Character}