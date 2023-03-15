import React from 'react'

const Slider = () => {
  return (
    <div className='bg-red-500 w-full h-72 relative overflow-hidden'>
      <img className='absolute top-0 ' src='./banner4.jpg'  />

      <div className='absolute h-4  w-36 left-0  right-0 bottom-2 ml-auto mr-auto flex items-center justify-center gap-2 px-2'>
        <a className='bg-white rounded-xl w-1/3 h-[.3rem] active:bg-black' href='/'>

        </a>
        <a className='bg-white rounded-xl w-1/3 h-[.3rem]  active:bg-black' href='/'>

        </a>
        <a className='bg-white rounded-xl w-1/3 h-[.3rem]  active:bg-black' href='/'>

        </a>

      </div>
    </div>
  )
}

export default Slider