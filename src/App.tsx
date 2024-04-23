
import { useState } from 'react';
import './App.css';
import { getAllBooks } from './Services/dataServices';
import BookInfo from './components/bookInfo';
import MainPage from './components/mainpage';
import { ALL_FILTERS } from './const/Finder';

function App() {

  const allBooks = getAllBooks();

  const filters = allBooks.map((ress) => ress.genre)
  const uniqueFilters = [...new Set(filters)];
  const [Books, setBooks] = useState(allBooks);
  const [SaveSection, SetSaveSection] = useState(false);



  function handledFilter(e: any){
    const filterBooks =  allBooks.filter((book) => book.genre === e.target.value);
    if(e.target.value === ALL_FILTERS.ALL || e.target.value === undefined) return setBooks(allBooks);
    setBooks(filterBooks);
  }

  return (
    <div id='app' className='relative h-screen p-2 gap-2' >
      <header className="[grid-area:header] h-[14vh] bg-white rounded-md" >
        <h1 className="text-center text-4xl font-bold my-4">BookNest</h1>

        <button onClick={() => SetSaveSection(!SaveSection)} className='mx-5 rounded-lg bg-blue-600  text-white p-2'>
          {SaveSection ? "Show Library" : " Show saved books"}
        </button>

        {!SaveSection &&
        <select onChange={handledFilter} className='rounded-lg bg-blue-600 text-white p-2 mx-5 w-[30vh]'>
          <option value={ALL_FILTERS.ALL}>All Books</option>
          {uniqueFilters.map((filter, index) => <option key={index} value={filter}>{filter}</option> )}
        </select>
        }
      </header>
      
      <MainPage Books={Books} Saved={SaveSection} />
      
      <BookInfo />

    </div>
  )
}

export default App
