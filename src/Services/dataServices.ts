import Data from '../Data/books.json';

export interface Book {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;


}
export interface Author {
    name: string;
    otherBooks: string[];
}


export const getAllBooks = () => {
    const AllBooks = [] as Book[];

    Data.library.forEach(element => {
        AllBooks.push(element.book);
    });
    return AllBooks;
}