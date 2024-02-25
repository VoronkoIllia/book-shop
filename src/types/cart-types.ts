import { SpecificBook } from "./book-types"

export interface BookInCart extends SpecificBook{
    count: number
    cost: number
}