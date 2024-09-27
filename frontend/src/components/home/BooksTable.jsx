import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
        <tr>
        <th className='border border-gray-400 p-2'>No</th>
            <th className='border border-gray-400 p-2'>Title</th>
            <th className='border border-gray-400 p-2'>Author</th>
            <th className='border border-gray-400 p-2'>Publish Year</th>
            <th className='border border-gray-400 p-2'>Actions</th>
        </tr>
    </thead>
    <tbody>
        {books.map((book, index) => (
            <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                    {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                    {book.title}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.author}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                    {book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className='text-blue-500 text-2xl' />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className='text-green-500 text-2xl' />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className='text-red-500 text-2xl' />
                        </Link>
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
  )
}

export default BooksTable
