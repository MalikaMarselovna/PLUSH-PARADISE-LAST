import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="container">
      <div className='NotFound text-[#f92e9e]'>404</div>
      <p className="NotFound_txt text-[#16ffbd]">
        Oops, go to 
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFound;