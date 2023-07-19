import React, { useState } from 'react'
import { FadeLoader } from 'react-spinners'
import FullFadeLoader from '../common/Loaders/FullFadeLoader'
import { useRouter } from 'next/router'

const ReceiptSection = () => {
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const btnBg = agreed ? 'bg-orange' : 'bg-orange-md'
  const router = useRouter()
  const handlePay = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setAgreed(false)
      router.push('/payment-success?code=ewfwefewfwefwefwf&id=i23io23u8foiefio2u3289')
    }, 5000);
  }

  return (
    <>
      <FullFadeLoader loading={loading}/>
      <div className='flex justify-between text-gray-dark border-b-[1px] pt-2 pb-4 border-gray'>
        <p>Tour to Bukhara</p>
        <p>$ 1200</p>
      </div>
      <div className='flex justify-between py-2 text-2xl'>
        <p className='font-semibold'>Total</p>
        <p className='font-semibold'>$ 1200</p>
      </div>

      <div className='py-2 flex gap-[10px] items-center'>
        <input onChange={()=>setAgreed(!agreed)} className='py-2' type='checkbox' name='Agree' id='' />
        <p className='text-gray text-sm'>
          Agree to{' '}
          <a
            className='text-[#0099cc] underline'
            target='_blank'
            href='https://google.com'
          >
            terms & conditions
          </a>
        </p>
      </div>
      <div className='pt-[20px]'>
        <button
          onClick={handlePay}
          disabled={!agreed}
          className={`${btnBg} py-2 px-4 w-full text-white rounded-md transition duration-400`}
        >
          Pay Now
        </button>
      </div>
      <div className='py-4'>
        <p className='text-gray text-xs'>
          It is important to note that Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis voluptates beatae explicabo. Veritatis,
          nesciunt assumenda ab placeat obcaecati sint amet.
        </p>
      </div>
    </>
  )
}

export default ReceiptSection