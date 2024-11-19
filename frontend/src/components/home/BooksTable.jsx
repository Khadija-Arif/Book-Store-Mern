import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-collapse text-left bg-white shadow-md rounded-lg overflow-hidden'>
      <thead className='bg-sky-500 text-white'>
        <tr>
          <th className='py-3 px-6 border-b border-gray-200'>No</th>
          <th className='py-3 px-6 border-b border-gray-200'>Title</th>
          <th className='py-3 px-6 border-b border-gray-200 max-md:hidden'>
            Author
          </th>
          <th className='py-3 px-6 border-b border-gray-200 max-md:hidden'>
            Publish Year
          </th>
          <th className='py-3 px-6 border-b border-gray-200'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='hover:bg-gray-100 transition duration-300'>
            <td className='py-3 px-6 border-b border-gray-200 text-center'>
              {index + 1}
            </td>
            <td className='py-3 px-6 border-b border-gray-200'>{book.title}</td>
            <td className='py-3 px-6 border-b border-gray-200 max-md:hidden'>{book.author}</td>
            <td className='py-3 px-6 border-b border-gray-200 max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='py-3 px-6 border-b border-gray-200'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-600 hover:text-green-800 transition duration-200' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-700 transition duration-200' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-700 transition duration-200' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// PropTypes validation
BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publishYear: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BooksTable;
