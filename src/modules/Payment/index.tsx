import React  from 'react'
import Layout from '../common/Layout'
import SectionsContainer from '../common/SectionsContainer'
import {HiOutlineChevronLeft} from 'react-icons/hi2'
import { useRouter } from 'next/router'
import PaymentForm from './PaymentForm'
import ReceiptSection from './ReceiptSection'

const Payment = ({}) => {
  const router = useRouter()

  return (
    <Layout title='Payment' isBare>
      <SectionsContainer className='h-screen flex items-center'>
        <div className='absolute top-4 left-[50px] pt-4'>
          <button
            onClick={() => router.back()}
            className='bg-gray-light py-1 px-4 rounded-sm text-lg'
          >
            <HiOutlineChevronLeft />
          </button>
        </div>
        <div className='flex bg-gray-light py-10 pb-20 px-4 rounded-sm'>
          <div className='flex-1'>
            <PaymentForm />
          </div>
          <div className='flex-1 px-[20px]'>
            <ReceiptSection/>
          </div>
        </div>
      </SectionsContainer>
    </Layout>
  )
}

export default Payment
