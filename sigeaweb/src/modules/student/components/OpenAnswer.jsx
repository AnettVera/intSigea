import React from 'react'
import { Card, Radio, Label} from 'flowbite-react';

const OpenAnswer = () => {
  return (
    <>
      <div style={{ marginTop: '15px', marginBottom: '10px' }}>
        <Card>
          <div className='font-medium' style={{ textAlign: 'left' }}>Cual es la raiz cuadrada de 36?</div>
          <div className=' w-full justify-between'>
          <input
                            type='text'
                            placeholder='Escribe tu respuesta...'
                            className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
          </div>
        </Card>
      </div>
    </>
  )
}

export default OpenAnswer
