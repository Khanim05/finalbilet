import './search.css'
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div id='search'>
      <IoIosSearch className='icon' />
      <input type="text" placeholder='Search' />
    </div>
  )
}
export default Search
