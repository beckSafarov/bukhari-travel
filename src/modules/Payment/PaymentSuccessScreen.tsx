import React from 'react'
import Layout from '../common/Layout'
import SectionsContainer from '../common/SectionsContainer'
import Title from '../common/Typography/Title'
import FullButton from '../common/Buttons/FullButton'
import Link from 'next/link'

const PaymentSuccessScreen = () => {
  return (
    <Layout title='Payment Success' isBare>
      <SectionsContainer className='h-screen pt-20'>
        <div className='px-10 py-10 border-[3px] border-green border-solid rounded-sm'>
          <Title color='green'>Payment Success!</Title>
          <p className='pt-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum iste
            sapiente laudantium necessitatibus quas, velit vel vitae unde esse
            repudiandae accusantium facilis qui iure sed vero? Vel recusandae
            inventore nemo!
          </p>
          <Link href='/tours'>
            <FullButton className='bg-[gray] mt-5 rounded-md'>
              Go Back
            </FullButton>
          </Link>
        </div>
      </SectionsContainer>
    </Layout>
  )
}

export default PaymentSuccessScreen