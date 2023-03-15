import React, { useState } from 'react'

const Slider = () => {

  const pics = ['banner1', 'banner2', 'banner3', 'banner4',]
  const [picId, setPicId] = useState(1)

  return (
    <div className=' w-full h-72 relative overflow-hidden bg-opacity-20'>
      <img className='absolute top-0 w-full h-[40vh] object-cover' src={`./${pics[picId]}.jpg`} />
      <div className='absolute h-4  w-36 left-0  right-0 bottom-2 ml-auto mr-auto flex items-center justify-center gap-2 px-2'>

        {pics.map((el,index) => {
          return (<a style={{background:index===picId? '#000000':'#ffffff'}} className={`rounded-xl w-1/3 h-[.3rem]`} onClick={() => { setPicId(index) }}>

          </a>)
        })}

      </div>
    </div>
  )
}

export default Slider