import React from "react";
import {useForm} from 'react-hook-form'
export default function EditModal() {
    const {register}=useForm({
        defaultValues:{
            
        }
    })
  return (
    <div className=' fixed inset-0 h-full w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
      <div className='w-[75%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
        <form className='grid  grid-cols-2 gap-2 w-full'>
          <label htmlFor=''>
            نام:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>

          <label
            htmlFor='
              '>
            قیمت:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <label htmlFor=''>
            عکس:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <label htmlFor=''>
            موجودی:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <label htmlFor=''>
            میزان فروش:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <label htmlFor=''>
            میزان محبوبت:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <label htmlFor=''>
            تعداد رنگ:
            <input className='w-full p-2' type='text' name='' id='' />
          </label>
          <div className='flex justify-around w-full col-span-2 text-white '>
            <button type='submit' className='bg-blue-900 w-full p-2 rounded'>
              Edit
            </button>
            <button className='bg-purple-900 w-full p-2 rounded'>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}
