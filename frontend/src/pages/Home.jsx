import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      {/* Toggle Buttons for Table or Card View */}
      <div className='flex justify-center items-center gap-x-4 mb-8'>
        <button
          className={`px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 ${showType === 'table' ? 'bg-sky-500 text-white' : 'bg-sky-300 hover:bg-sky-500'}`}
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className={`px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 ${showType === 'card' ? 'bg-sky-500 text-white' : 'bg-sky-300 hover:bg-sky-500'}`}
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      {/* Header and Add Button */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-700'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-5xl shadow-md hover:text-sky-600 transition-transform transform hover:scale-110' />
        </Link>
      </div>

      {/* Loading Spinner or Books Display */}
      {loading ? (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      ) : (
        showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )
      )}
    </div>
  );
};

export default Home;
