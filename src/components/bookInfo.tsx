import { useEffect, useState } from "react";
import Bird from "../assets/BirdIcon";
import Heart from "../assets/heart";
import { useBooksStore } from "../store/booksStore";

export default function BookInfo() {
    const {selectedBook, BooksSaved, setBooksSaved, removeBooksSaved} = useBooksStore();
    const [BookSaved,setBookSaved] = useState(false);

    const handledClick = () =>{
        if(!BooksSaved.some((book) => book.title === selectedBook.title)){
            setBooksSaved([...BooksSaved, selectedBook]);
        }
    }

    const handledClickRemove = () => {
        removeBooksSaved(selectedBook);
    }

    useEffect(() =>{
        if(!BooksSaved.some((book) => book.title === selectedBook.title)){
            setBookSaved(false);
        }else{
            setBookSaved(true);
        }
    });

    return(
        <div className='bg-white [grid-area:info] p-4 rounded-md h-[83vh]'>
        {selectedBook.title != "" ?
            <>
                <h1 className='text-3xl font-bold'>{selectedBook.title}</h1>
                <img className=" mx-auto h-[400px] rounded-md" src={selectedBook.cover} alt="" />
                <div className='grid grid-cols-4 grid-flow-row mt-3 text-lg'>
                    <div className='col-span-4 mb-3 text-xl'>
                    <b>Sypnopsis: </b>{selectedBook.synopsis}
                    </div>
                    <div className='col-span-2'>
                    <b>Gender: </b> {selectedBook.genre}
                    </div>
                    <div className='col-span-1'>
                    <b>Pages:</b> {selectedBook.pages}
                    </div>
                    <div className='col-span-1'>
                    <b>year:</b> {selectedBook.year}
                    </div>
                    <div className='col-span-4'>
                        <b>Autor:</b> {selectedBook.author.name}
                    </div>
                    <b className="col-span-4">
                        Other Books for the Author:
                    </b>
                    <div className="grid grid-cols-3 grid-flow-row col-span-4 text-md">
                        {selectedBook.author.otherBooks.length === 0 ? <div className='col-span-1'>No other books</div> : null}
                        {selectedBook.author.otherBooks.map((book, index) => { return <div key={index} className='col-span-1'>{book}</div> })}
                    </div>
                    {BookSaved ? 
                        <button className="rounded-full bg-red-600 fill-white w-[5vh] p-2 m-3" onClick={handledClickRemove}>
                        <Heart />
                        </button>
                    :
                        <button className="rounded-full bg-blue-600 fill-white w-[5vh] p-2 m-3" onClick={handledClick}>
                            <Heart />
                        </button>
                    }
                </div>



            </>
        :
            <>
                <div className="h-[50vh]">
                    <h1 className='text-2xl font-bold mx-auto w-full text-center'>Book Information</h1>
                    <div className="rounded-full bg-black fill-white w-[35vh] h-[35vh] flex justify-center items-center mx-auto">
                        <Bird />
                    </div>
                    <p className="font-semibold text-center text-xl mt-4">
                        You need to select a book to see the information
                        
                    </p>

                </div>
            </>
        }
        </div>

    )
}