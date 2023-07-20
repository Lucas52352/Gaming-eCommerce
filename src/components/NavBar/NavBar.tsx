import radtek from './assets/Radtek1.png'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange} from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Sections from './Sections';


const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <div>
          <img className='logo' src={radtek} alt="" />
        </div>

        <div className='sectionSearchBar'>
          <input placeholder='Search...' className='search' type="search" />
          <SearchIcon className='searchIcon'/>
        </div>

        <div className='sectionCart'>
          <ShoppingCartIcon className='cart'/>
          <FavoriteIcon className='fav'/>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>ML</Avatar>
          </Stack>
        </div>
      </div>
          <Sections/>
    </div>
  )
}

export default NavBar