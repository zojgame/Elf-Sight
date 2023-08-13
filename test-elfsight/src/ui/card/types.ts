import { CharacterType } from "../../types"

interface ICardProps {
    character : CharacterType,
    handleClick : () => void
}

export type {ICardProps}