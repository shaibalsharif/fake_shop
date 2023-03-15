import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div className='bg-[#0f3538] h-10 px-12 text-[#fff] my-auto align-middle pt-2'>
      <div className='nav flex'>
        <div className='flex gap-2 items-center'>
          <MenuIcon />
          <p>Browse By Category</p>
        </div>
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>Easy Monthly Installments</p>
        </div>
        <div>
          <p>Shop By Brands</p>
        </div>
        <div>
          <p>Become a Vendor</p>
        </div>
      </div>
      <div className='social flex gap-2 justify-end'>

        <FacebookOutlinedIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />

      </div>
    </div>
  )
}

export default Navbar