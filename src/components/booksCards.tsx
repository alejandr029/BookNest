import { useState } from 'react';
import { Book } from '../Services/dataServices';
import { useBooksStore } from '../store/booksStore';

interface BooksCardsProps {
    BookInfo: Book;
    Saved: boolean;
}

const BooksCards: React.FC<BooksCardsProps> = ({ BookInfo, Saved }) => {
    const {setSelectedBook, setBooksSaved,removeBooksSaved, BooksSaved}  = useBooksStore();

    const [isSaved, setIsSaved] = useState(false);

    // useEffect(() => {
    //     BooksSaved.filter((book) => book.title === BookInfo.title).length > 0 ? console.log('true') : console.log('false');
    // })

    const handledClickInfo = () => {
        setSelectedBook(BookInfo);
        
    }
    
    const handledClickAdd = () => {
        if(!BooksSaved.some((book) => book.title === BookInfo.title)){
            setIsSaved(true);
            setBooksSaved([...BooksSaved, BookInfo]);
        }
    }

    const handledClickRemove = () => {
        setIsSaved(false);
        removeBooksSaved(BookInfo);
    }


    return(
        <article className="w-[200px] h-[410px] m-2 rounded-md bg-white">
            <picture onClick={handledClickInfo}>
                <img src={BookInfo.cover} alt={`images cover ${BookInfo.title}`} className='h-[300px] mx-auto  rounded-md'/>
            </picture>
            <h1 className="text-center font-bold">{BookInfo.title}</h1>
            <p className="text-center font-semibold"> {BookInfo.year} {BookInfo.genre} </p>

            <div className='flex justify-center'>
            {Saved ?
            <button className="rounded-lg bg-red-600 mx-auto text-white font-bold px-2" onClick={() => handledClickRemove() }>
            Remove from my library
            </button>
            :
            <button className="rounded-lg bg-blue-600 mx-auto text-white font-bold px-2" onClick={handledClickAdd}>
                Add to my library
            </button>
            }
            </div>
        </article>
    )
}


export default BooksCards;