import { SpecificBook } from "../types/book-types";

export async function getBooksFromJSON():Promise<Array<SpecificBook>> {
    const booksJSON = await fetch("./books.json");
    const {books} = await booksJSON.json()
    return books
}
