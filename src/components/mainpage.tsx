
import { Key } from 'react';
import { Book } from '../Services/dataServices';
// import { useBooksStore } from '../store/booksStore';
import { useBooksStore } from '../store/booksStore';
import BooksCards from './booksCards';

interface BooksCardsProps {
    Books: Book[],
    Saved: boolean
    
}

const MainPage: React.FC<BooksCardsProps> = ({ Books, Saved }) => {

    const {BooksSaved} = useBooksStore();


    return(
        <div className="flex [grid-area:books] overflow-y-auto top-0 h-[83vh] pb-5 bg-gray-100 rounded-md justify-center">
            <div className='w-[95%] flex flex-row flex-wrap top-0 '>

            {Saved ?
                BooksSaved?.map((book: Book, index: Key | null | undefined) => {return <BooksCards key={index} BookInfo={book} Saved={true} />})
            :
                Books?.map((book, index) => {return <BooksCards key={index} BookInfo={book} Saved={false} />})
            }
            </div>
        </div>


    );
}

export default MainPage;