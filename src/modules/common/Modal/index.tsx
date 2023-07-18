import { ModalProps } from '@/interfaces'
import Title from '../Typography/Title'
import { FaTimes } from 'react-icons/fa'

const Modal = ({onClose, isOpen, className, title, children}:ModalProps) => {
  return (
    <div
      style={{ display: isOpen ? 'block' : 'none' }}
      className={`fixed inset-0 bg-black/40 w-full h-full animate-fadeIn ${className}`}
    >
      <div className='my-0 mx-auto translate-y-[10%] min-w-[300px] max-w-[1000px] h-fit bg-white px-4 py-4 rounded-md'>
        <div className='flex justify-between items-center'>
          <Title fontSize='25px'>{title}</Title>
          <FaTimes
            onClick={onClose}
            className='cursor-pointer'
            fontSize='20px'
          />
        </div>
        <div className='relative pt-5 w-[100%] h-full'>{children}</div>
      </div>
    </div>
  )
}

export default Modal