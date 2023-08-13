import { create } from "zustand";
import { StoreType, CharacterType } from "../types";

export const useStore = create<StoreType>((set) => ({
    currentPage: '1',
    characters: [],
    setCurrentPage : (page: string) => set(() => (
        {
            currentPage: page
        }
    )),
    setCharacters: (characters: CharacterType[]) => set(() => (
        {
            characters: characters
        }
    )),
}))