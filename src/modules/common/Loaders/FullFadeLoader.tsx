import React from 'react'
import { FadeLoader } from 'react-spinners'

const FullFadeLoader = ({loading}:{loading?:boolean}) => {
  if(!loading) return <></>
  return (
    <div className='fixed z-10 left-0 top-0 w-screen h-screen bg-black/30'>
      <div className='absolute left-[45%] top-[35%] translate-x-[50%] translate-y-[50%]'>
        <FadeLoader radius={50} color='teal' />
      </div>
    </div>
  )
}

export default FullFadeLoader