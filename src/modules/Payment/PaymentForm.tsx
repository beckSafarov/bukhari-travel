import React, { useState } from 'react'
import VisaLogo from './VisaLogo'
import MasterCardLogo from './MasterCardLogo'
import UnionPayLogo from './UnionPayLogo'
import CountriesMenu from './CountriesMenu'
import { chunkIntoSpaces } from '@/utils/index'


const PaymentForm = () => {
  const [values, setValues] = useState({
    email: '',
    cardInfo: '',
    date: '',
    cvc: '',
    name: '',
    country: '',
    address: '',
  })
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const updateCardNumber = (cardNumber: string) => {
    if (values.cardInfo.length === 19 && cardNumber !== '') return
    const spacedCardNumber = chunkIntoSpaces(cardNumber)
    setValues({
      ...values,
      cardInfo: spacedCardNumber,
    })
  }

  const updateDate = (date:string)=>{
    if (date.length === 8 && date !== '') return
    const delimitedDate = chunkIntoSpaces(date, 2, ' / ')
    setValues({
      ...values, 
      date: delimitedDate
    })
  }

  const handleCvcChange = (cvc:string) => {
    if (cvc.length === 4 && cvc !== '') return
    setValues({...values, cvc})
  }

  const updateFields = (name:string, value:string) => {
    setValues({
      ...values,
      [name]: [value],
    })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    switch(name){
      case 'cardInfo':
        return updateCardNumber(value)
      case 'date':
        return updateDate(value)
      case 'cvc':
        return handleCvcChange(value)
      default:
        return updateFields(name, value)
    }
  }

  return (
    <form className='max-w-[500px] my-0 mx-auto' onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-3'>
        <div className='flex flex-col'>
          <label className='font-medium font-sm text-gray mb-2'>
            Email <sup style={{ color: 'red' }}>*</sup>
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='Email'
            className='border-2 outline-none border-solid border-gray-border p-2 rounded-md'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium font-sm text-gray mb-2'>
            Card Information <sup style={{ color: 'red' }}>*</sup>
          </label>
          <div className='relative'>
            <input
              onChange={handleChange}
              value={values.cardInfo}
              name='cardInfo'
              placeholder='1234 1234 1234 1234'
              className='w-full border-2 outline-none border-solid border-gray-border p-2 rounded-md'
            />
            <div className='absolute right-2 top-3 flex gap-1 items-center'>
              <VisaLogo size={30} />
              {values.cardInfo.length <= 1 && (
                <>
                  <MasterCardLogo size={30} />
                  <UnionPayLogo size={30} />
                </>
              )}
            </div>
          </div>
          <div className='flex w-[100%] pt-3'>
            <input
              onChange={handleChange}
              value={values.date}
              name='date'
              placeholder='MM/YY'
              className='flex-1 border-2 outline-none border-solid border-gray-border p-2 rounded-md rounded-r-none'
            />
            <input
              onChange={handleChange}
              value={values.cvc}
              name='cvc'
              placeholder='CVC'
              className='flex-1 border-2 outline-none border-solid border-gray-border p-2 rounded-md rounded-l-none'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='font-medium font-sm text-gray mb-2'>
            Name on Card <sup style={{ color: 'red' }}>*</sup>
          </label>
          <input
            onChange={handleChange}
            name='name'
            value={values.name}
            type='text'
            placeholder=''
            className='border-2 outline-none border-solid border-gray-border p-2 rounded-md'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium font-sm text-gray mb-2'>
            Country or region <sup style={{ color: 'red' }}>*</sup>
          </label>
          <CountriesMenu />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium font-sm text-gray mb-2'>
            Address <sup style={{ color: 'red' }}>*</sup>
          </label>
          <input
            onChange={handleChange}
            value={values.address}
            type='text'
            name='address'
            placeholder=''
            className='border-2 outline-none border-solid border-gray-border p-2 rounded-md'
          />
        </div>
      </div>
    </form>
  )
}

export default PaymentForm