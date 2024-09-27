import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link to={destination} className='flex items-center text-blue-600 hover:text-blue-800'>
            <BsArrowLeft className='text-2xl' />
            <span>Back</span>
        </Link>      
    </div>
  )
}

export default BackButton
