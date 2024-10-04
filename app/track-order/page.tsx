
import React from 'react'
import Input from '../components/ui/input'
import { Arrowicon } from '../icons'
import Image from 'next/image'
import Layout from '../components/layout/layout'
const Trackorder = () => {
  return (
    <>
      <Layout>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-10 items-center w-full py-10 md:py-20">
          <form className="w-full block">
            <div className="w-full">
              <h2 className="text-xl font-dm text-gray-600 ">
                Have an order?
              </h2>
              <p className="text-base font-dm text-gray-600 ">
                Want to know where your order is now?
              </p>
              <p className="font-bold font-dm text-2xl pt-4">
                <span className="text-gray-700">TRACK</span>{" "}
                <span className="text-primary">YOUR ORDER</span>
              </p>
              <div className="relative w-full mt-4">
                <Input type='text' placeholder='Track code' className='pr-16' />
                <div className="absolute inset-y-0 right-1 flex justify-center items-center p-1">
                  <button id="switch" type="submit" className='bg-primary hover:bg-primary-2 ease-in-out duration-200 rounded text-white p-3'>
                    <Arrowicon className="size-4" />
                  </button>
                </div>

              </div>
              <p className="text-base font-dm text-gray-600 pt-5 ">
                Enter the track code of your order above and know the progress of your
                product delivery.
              </p>
            </div>
          </form>
          <div className="col-span-2 flex relative justify-end">
            <Image width={1000} height={1000}
              className="w-auto h-auto"
              src="/images/d-v-man.png"
              alt="img"
            />
          </div>
        </div>
      </Layout>

    </>
  )
}
export default Trackorder
