'use client'
import React from 'react'
interface input {
  type?: string,
  name?: string,
  value?:any,
  id?: string,
  label?: string,
  placeholder?: string,
  className?: string,
  readOnly?: boolean,
  required?: boolean,   
  min?: any,   
  max?: any,   
  Icon?: React.ElementType,
  iconClass?: string,
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void,
  
}
const Input: React.FC<input> = ({ type, name, id, value, label, placeholder, className, readOnly, required, min, max, Icon, iconClass, onChange }) => {
  const [selectedOption, setSelectedOption] = React.useState<any>()
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className='text-sm font-medium font-dm text-gray-500 pb-2'>{label}</label>
      }
      <input onChange={onChange}
      id={id}
        className={`w-full border border-gray-300 rounded font-normal text-gray-500 text-sm focus:border-primary p-4 outline-none focus:outline-none focus:ring-0 ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        min={min}
        max={max}
        ref={ref}
      />
      {Icon &&
        <span className={`absolute after:absolute after:right-0.5 after:w-px after:h-8 after:bg-gray-300 text-gray-500 w-12 inset-y-0 flex items-center justify-center ${iconClass}`}>
          <Icon className="size-4" />
        </span>
      }

    </div>
  )
}

export default Input
