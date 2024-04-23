import { create } from 'zustand';
import { Book } from '../Services/dataServices';


interface State {
    selectedBook: Book;
    setSelectedBook: (book: Book) => void;

    BooksSaved: Book[];
    removeBooksSaved: (book: Book) => void;
    setBooksSaved: (books: Book[]) => void;
}

export const useBooksStore  = create <State>((set) => ({
    selectedBook: {
        title: "",
        pages: 0,
        genre: "",
        cover: "",
        synopsis: "",
        year: 0,
        ISBN: "",
        author: {
            name: "",
            otherBooks: []
        }   
    },
    setSelectedBook: (book) => set({ selectedBook: book }),

    BooksSaved:[],
    removeBooksSaved: (BookSaved) =>{   
        set((state) => ({
            BooksSaved: state.BooksSaved.filter((book) => book.title !== BookSaved.title)
        }))
    },
    setBooksSaved: (books) => set((state) => ({
        BooksSaved: Array.from(new Set([...state.BooksSaved, ...books]))
    }))

}))