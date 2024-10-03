import { useState } from 'react';
import Input from './input';
import { Minusicon, Plusicon } from '@/app/icons';

const Counter: React.FC = () => {
    // State to hold the counter value, initialized at 0
    const [count, setCount] = useState<number>(1);

    // Function to increment the count
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

 

    return (
        <div className="flex relative w-32">            
            <Input type="text" className='px-12 text-center !text-lg !py-1.5' value={count}  />
            <div className="absolute left-0 inset-y-0 w-10 flex p-1 items-stretch ">
                <button onClick={decrement} className="hover:bg-gray-100 text-gray-600 flex justify-center items-center w-full rounded ease-in-out duration-200" >
                    <Minusicon className="size-3" />
                </button>
            </div>
            <div className="absolute right-0 inset-y-0 w-10 flex p-1 items-stretch ">
                <button onClick={increment} className="hover:bg-gray-100 text-gray-600 flex justify-center items-center w-full rounded ease-in-out duration-200" >
                    <Plusicon className="size-3" />
                </button>
            </div>
        </div>

    );
};

export default Counter;
