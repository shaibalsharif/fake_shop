import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
  const data = [
    {
      title: 'Trending',
      sub: ['Installments', 'Electronics', 'Grocery', 'Health & Beauty', 'Home Appliances', 'Mobile Accessories']
    },
    {
      title: 'Information',
      sub: ['About Us', 'Contact Us', 'FAQs', 'Shipping & Return', 'Privacy Policy', 'Terms & Accessories']
    },
    {
      title: 'Customer Care',
      sub: ['My Account', 'Track Your Order', 'Recently Viewed', 'Wishlist', 'Compare', 'Become a Vendor']
    }
  ]




  return (
    <div className='footer-container text-[#fff]  text-sm'>
      <div className='top-div flex w-full py-8'>
        <div className='fotter-overview-container w-[40%] px-12'>
          <div className='logo-container'>
            <img className='logo' src='./logo.png' />
          </div>
          <div className='text-sm text-[#65da8c]'>
            <p>Got questions? Call us 24/7!</p>
          </div>
          <div className='text-sm'>
            <p>0012 4548 88</p>
            <p>0012 4548 88</p>
          </div>
          <div className='text-sm text-[#65da8c]'>
            <p>Contact Info</p>
          </div>
          <p>info@tech.bd</p>
          <div className='flex'>

            <FacebookOutlinedIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />

          </div>


        </div>
        <div>
          <div className='footer-detail-container w-full flex gap-20'>
            {data.map(el => {
              return (
                <div >
                  <h3 className=' text-[#65da8c] pb-2'>{el.title}</h3>
                  {el.sub.map(e => {
                    return (<p>{e}</p>)
                  })}
                </div>
              )
            })}
         
          </div>
          <div className='h-full w-full flex gap-4 mt-4  justify-end '>
            <img src='./visa.png' className='w-20 h-12 bg-white rounded-md'/>
            <img src='./master.png' className='w-20 h-12 bg-white rounded-md'/>
            <img src='./cod.png' className='w-20 h-12 bg-white rounded-md'/>
            <img src='./emi.png' className='w-20 h-12 bg-white rounded-md'/>
          </div>
        </div>
      </div>

      <div className='bottom-div pl-8 h-26 p-2'>
        © 2021 Winstore. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer