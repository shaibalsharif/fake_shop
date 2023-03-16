import React, { useEffect, useState } from 'react'

const CategorySlider = () => {
  const [cats, setCats] = useState(["electronics", "jewelery", "men's clothing", "women's clothing", 'baby items', "electronics", "jewelery", "men's clothing", "women's clothing", 'baby items'
  ])
  const base_url = process.env.REACT_APP_BASE_URL




  return (
    <div className='w-full flex h-48  '>
      <div className='self-center text-3xl float-left w-8 text-center'>
        <p>{'<'}</p>
      </div>



      {<div className='w-full flex gap-8 overflow-hidden'>
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
      </div>}
      <div className='self-center text-3xl float-right w-8 text-center'>
        <p>{'>'}</p>
      </div>
    </div>
  )
}

export default CategorySlider