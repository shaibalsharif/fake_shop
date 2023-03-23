import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewArrival = () => {
  const base_url = process.env.REACT_APP_BASE_URL
  const [data, setData] = useState([])
  useEffect(() => {
    console.log(`${base_url}/products?limit=10`);
    axios.get(`${base_url}/products?limit=10`)
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log(e))

  }, [])

  return (
    <div className='px-2 mt-8'>
      <div className='font-semibold text-xl px-8'>
        <p> <span className='text-[#7fcfb5]'>New</span> Arrivals </p>
      </div>

      <div className='flex gap-8 flex-row overflow-scroll scrollbar-hide h-[30vh] py-2 px-1'>
        {data.length && data.map(el => {
          return (
            <div className=' flex-grow-0 flex-shrink-0 w-48  bg-white border-[1px] border-[#cfcaca] px-2 py-1 items-center '>
              <p>{el.category}</p>
              <p className='truncate'>{el.title}</p>
              <div className='overflow-hidden w-[60%] mx-auto'>
                <img src={el.image} alt='img' />
              </div>
              <div className='flex items-center justify-between'>
                <p className='line-through text-slate-500' >{(el.price + 10.22).toFixed(2)}</p>
                <p>{el.price}</p>
              </div>
              <button className='bg-[#6ab69e] w-full text-sm py-1 hover:cursor-pointer'>
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default NewArrival