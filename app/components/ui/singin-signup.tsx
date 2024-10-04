'use client'
import React from 'react'
import { Crossicon} from '@/app/icons' 
import Signin from './signin'
import Signup from './signup'
 
interface signinup {
  onClick?: () => void,

}


export const Shigninsignup: React.FC<signinup> = ({onClick}) => {

  const [tabs, setTabs] = React.useState(0) 

  return (
    <>

      <div className={`fixed z-50 inset-0 flex justify-center items-center p-5 sm:p-10 `} >
        <div onClick={onClick} className={`fixed inset-0 bg-black/50 ease-in-out duration-200 `} />
        <section className={`relative z-10 w-full p-3 sm:p-5 max-w-lg bg-white rounded overflow-auto max-h-[calc(100vh-100px)]`}  >
          <button onClick={onClick} className='absolute top-2 right-2 ease-in-out duration-200 text-gray-500 hover:text-red-600'>
            <Crossicon className="size-3" />
          </button>
          <div className="relative p-3">
            <div className="flex items-end w-full">
              {['Sign In', 'Sign Up'].map((item, index) =>
                <button key={index} onClick={() => setTabs(index)} className={`flex-1 ease-in-out duration-200 after:absolute after:inset-x-0 after:bottom-0 text-xl font-bold font-dm pb-2 relative ${tabs === index ? 'after:h-1 after:bg-primary text-gray-900' : 'after:h-px after:bg-gray-300 text-gray-500'}`}>
                  {item}
                </button>
              )}


            </div>
            <div className="overflow-hidden">
              {tabs == 0 ? (
                // Sign In Tab
               
                 <Signin />
              ) : (
                // Sign up Tab
              <Signup />
              )}
            </div>
          </div>
        </section>
      </div>

    </>
  )
}


