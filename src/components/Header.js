import React from 'react'


const Header = () => {
    return (
        <div className='header-container' >
            <div className='logo-container'>
                <img alt='logo' src='./logo.png' className='logo' />
            </div>
            <div className='search-container'>
                <select>
                    <option>daddad</option>
                    <option>dgdgdg</option>
                    <option>fgdgdgdf</option>
                    <option>sffddsfsfrs</option>
                </select>
                <input type={'text'} placeholder='search...' />
                <i></i>
            </div>
            <div className='assist-container'>
                <p>call us now</p>
                <div className='contact-container'>
                    <i></i>
                    <p>  01521-330598</p>
                    <a>Sign In</a>
                </div>
            </div>
            <div>
                User
            </div>
            <div>
                Favourite
            </div>
            <div>
                cart
            </div>

        </div>
    )
}

export default Header