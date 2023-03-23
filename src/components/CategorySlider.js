import React, { useEffect, useState } from 'react'

const CategorySlider = () => {
  const [cats, setCats] = useState(["electronics", "jewelery", "men's clothing", "women's clothing", 'baby items', "electronics", "jewelery", "men's clothing", "women's clothing", 'baby items'
  ])
  const base_url = process.env.REACT_APP_BASE_URL




  return (
    <div className='w-full flex h-48  '>
      <div className=' self-center text-3xl float-left w-8 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-3xl  text-center my-auto hover:cursor-pointer'>
        <p>{'<'}</p>
      </div>
      <div className='w-full flex gap-8 overflow-hidden overflow-x-scroll px-2 scrollbar-hide'>
        {cats && cats.map(el => {
          return (
            <div className='w-72 flex-shrink-0 flex-grow-0  my-auto bg-white p-1 relative'>
              <img src={`./banner1.jpg`} className='w-full h-full' />
              <div className='ribbon  py-1  bg-white w-[90%]'>
                <div className='flex flex-row justify-between px-2  text-center items-center my-auto'>
                  <p className=''>{`${el[0].toUpperCase()}${el.slice(1, el.length)}`}</p>

                  <p className=' text-end'>Shop</p>
                </div>
              </div>
              <div className='border-[2px] border-[#a09b9b] absolute bottom-[6px] -left-[16px] py-1 ml-2  bg-white w-[90%]'>
                <div className='flex flex-row justify-between px-2  text-center items-center my-auto'>
                  <p className=''>{`${el[0].toUpperCase()}${el.slice(1, el.length)}`}</p>

                  <p className=' text-end'>Shop</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>


      {/* <div className='w-full flex gap-8 overflow-hidden'>
        {cats && cats.map((el, index) => {
          return (
            <div className='w-48  h-[95%] relative bg-white p-1 my-auto '>
              <img src={`./banner1.jpg`} className='w-full h-full' />
              <div className='absolute bottom-2 h-8 w-full bg-red-500 -left-3 pl-4 pr-2 '>
                <div className='flex justify-between px-3'>
                  <p>{`${el[0].toUpperCase()}${el.slice(1,el.length)}`}</p>

                  <p>Shop</p>
                </div>
              </div>
            </div>
          )
        })}
      </div> */}
      <div className=' self-center text-3xl float-left w-8 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-3xl  text-center my-auto hover:cursor-pointer'>
        <p>{'>'}</p>
      </div>
    </div>
  )
}

export default CategorySlider