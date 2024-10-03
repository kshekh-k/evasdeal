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
  Icon?: React.ElementType,
  iconClass?: string,
  
}
const Input: React.FC<input> = ({ type, name, id, value, label, placeholder, className, readOnly, required, Icon, iconClass, }) => {
  const [selectedOption, setSelectedOption] = React.useState<any>()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // Update the selected option
  };
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className='text-sm font-medium font-dm text-gray-500 pb-2'>{label}</label>
      }
      <input onChange={handleChange}
      id={id}
        className={`w-full border border-gray-300 rounded font-normal text-gray-500 text-sm focus:border-primary p-4 outline-none focus:outline-none focus:ring-0 ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
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
