import React, { useState} from 'react';
import { HiMagnifyingGlass, HiPlus} from "react-icons/hi2";
import { Button, Checkbox, Label, Modal, TextInput, Tooltip } from 'flowbite-react';
import RegisterSubject from './components/RegisterSubject'


const DashboardPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const openRegister = () => {
    setIsCreating(true); 
  }

  return (
   <>
   <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
        <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Materias</label>
        <div className='relative  flex-1' style={{ flex: '0.6' }}>
          <input
            type='password'
            placeholder='Buscar por nombre de materia'
            className='text-center block w-full h-8 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <button

            className='absolute right-0 top-0 h-full px-2 flex items-center'
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          >

            <HiMagnifyingGlass style={{ color: '#4480FF', fontSize: '1.5rem', fontWeight: 'bold' }} />
          </button>
        </div>
        <Tooltip content='Agregar materia'>
        <Button onClick={openRegister} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <HiPlus style={{ color: '#4480FF', fontSize: '2rem', fontWeight: 'bold' }} />
        </Button>
      </Tooltip>


      <RegisterSubject isCreating={isCreating} setIsCreating={setIsCreating}/>
      </div>
   </>
  )
}

export default DashboardPage
