import React from 'react'
import MultiAnswer from './components/MultiAnswer'
import OpenAnswer from './components/OpenAnswer'

const Exam = () => {
  return (
    <>
      <div className='w-full justify-center flex p-5 bg-white'>
        <div className='m-auto sm:w-full md:w-full lg:w-full justify-center text-center px-6 py-4 rounded-md bg-gray-100'>
          <h5 className='font-bold mx-auto text-blue-900 text-3xl '>Nombre del examen</h5>
          <div style={{marginTop:'10px'}}>
            <MultiAnswer />
            <OpenAnswer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Exam
