import { useRef, useState } from 'react'
import Link from 'next/link'
import { useOnClickOutside } from 'usehooks-ts'
import { FiChevronDown } from 'react-icons/fi'
import { DropdownLinkType } from '@/types'
import { CustomDropdown as DropDownProps } from '@/interfaces'

const DropDown = ({data, label}:DropDownProps) => {
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)
  const menuRef = useRef(null)
  
  const handleClick = () => {
    if(open) return
    setOpen(true)
  }

  const handleOutsideClick = () => {
    setOpen(false)
  }
  
  useOnClickOutside(menuRef, handleOutsideClick)

  return (
    <button ref={btnRef} className="relative py-1 px-2">
      <p
        onClick={handleClick}
        className="text-white flex items-center font-sans font-normal space-x-1"
      >
        <span>{label}</span> <FiChevronDown />
      </p>
      {open && (
        <div
          ref={menuRef}
          className={`absolute top-5 left-0 mt-3 ${
            open
              ? "flex animate-fadeIn"
              : "transition duration-150 animate-fadeOut"
          } flex-col py-5 px-2 flex justify-center space-y-2 text-left bg-white rounded-sm`}
        >
          {data.map((MenuLink: DropdownLinkType, i: number) => (
            <div key={i}>
              <Link
                className={`py-2 px-2 text-black hover:text-orange rounded-md`}
                href={`/Destinations/${MenuLink.label}`}
              >
                {MenuLink.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </button>
  );
}

export default DropDown