import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';


const Header = () => {
    return (
        <div className='header-container' >
            <div className='left-group'>
                <div className='logo-container'>
                    <img alt='logo' src='./logo.png' className='logo bg-transparent' />
                </div>
                <div className='search-container'>
                    <select className='cat-div'>
                        <option>All categories</option>
                        <option>dgdgdg</option>
                        <option>fgdgdgdf</option>
                        <option>sffddsfsfrs</option>
                    </select>

                    <input className='search-input' type={'text'} placeholder='Search for products' />
                    <span className='search-icon'>
                        <SearchIcon fontSize='large' />
                    </span>

                </div>
            </div>
            <div className='right-group'>
                <div className='assist-container'>
                    <p>call us now</p>
                    <div className='contact-container'>
                        <HeadphonesIcon />
                        <p>  01521-330598</p>

                    </div>
                    <a>Sign In</a>
                </div>
                <div className='user-div'>
                    < PermIdentityOutlinedIcon />
                </div>
                <div className='fav-div'>
                    <  FavoriteBorderOutlinedIcon />
                </div>
                <div className='cart-div'>
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>

        </div>
    )
}

export default Header