import React from 'react'
interface input {
type?:string,
name?:string,
id?:string,
label?:string,
placeholder?:string,
className?:string,
readOnly?:boolean,
required?:boolean,
Icon?:React.ElementType,
iconClass?:string,
}
const Input: React.FC<input> = ({type, name, id, label, placeholder, className, readOnly, required, Icon, iconClass}) => {
  return (
    <div className="relative">
        {label && 
        <label htmlFor={id}>{label}</label>
}
      <input id={id}
        className={`w-full border border-gray-300 rounded font-normal text-gray-500 text-sm focus:border-primary p-4 outline-none ${className}`}
        type={type}
        name={name}
        placeholder={placeholder} 
        readOnly={readOnly}
        required={required}
      />
      {Icon  && 
      <span className={`absolute after:absolute after:right-0.5 after:w-px after:h-8 after:bg-gray-300 text-gray-500 w-12 inset-y-0 flex items-center justify-center ${iconClass}`}>
        <Icon className="size-4" />
      </span>
    }
       
    </div>
  )
}

export default Input
