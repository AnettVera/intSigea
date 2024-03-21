import React, { useMemo, useState, useEffect } from 'react';
import { HiPlus, HiMagnifyingGlass } from "react-icons/hi2";
import { LiaUserEditSolid } from "react-icons/lia";
import { Button, Tooltip } from 'flowbite-react';
import { Switch } from '@mui/material';
import AxiosClient from '../../config/http-client/axios-client';
import CustomDataTable from '../../components/shared/CustomDataTable';
import RegisterUserS from './components/RegisterUserS';
import UpdateStudents from './components/UpdateStudents';

const SettingsStudents = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const openUpdate = () => {
    setUpdate(true); 
  }


  const customStyles = {
    rows: {
      style: {
        backgroundColor:'#f2f2f2' 
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', 
        paddingRight: '8px',
        fontWeight:'700',
        backgroundColor:'#f2f2f2',
        textAlign:'center',
      },
    },
  };

  const columns = useMemo(() => [
    

    {
      cell: (row) => (
        <div className='font-medium text-sm'>
          {`${row.person.name} ${row.person.surname} ${row.person.lastname ?? ''}`}
        </div>
      ),
      selector: (row) => `${row.person.name} ${row.person.surname} ${row.person.lastname ?? ''}`,
    },
    {

      cell: (row) => (
        <div className='w-full flex direction-row justify-end text-end text-gray-500'>
           {row.username}
        </div>
       
        ),
      selector: (row) => row.username,
     
    },
    {
      cell: (row) => (
        
        <>
        <div className='flex direction-row w-full text-end justify-end'>
        <Switch />
          <Tooltip content='Editar'>
            <Button onClick={openUpdate} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginLeft:3}}>
              <LiaUserEditSolid style={{ color: '4480FF', fontSize: '1.3rem', fontWeight: 'bold' }} />
            </Button>
          </Tooltip>
        </div>
        </>
      ),
     
    },
    
  ])

  const getUsers = async () => {
    try {
      const response = await AxiosClient({ url: "/user/", method: 'GET' });
      console.log(response);
      if (!response.error) setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []); 
 
  const openRegister = () => {
    setIsCreating(true); 
  }

  return (
    <>
      <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
        <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem', }}>Estudiantes</label>
        <div className='relative  flex-1' style={{ flex: '0.6' }}>
          <input
            type='password'
            placeholder='Buscar por nombre del estudiante'
            className='text-center block w-full h-8 rounded-md border-0 py-0.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <button

            className='absolute right-0 top-0 h-full px-2 flex items-center'
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          >

            <HiMagnifyingGlass style={{ color: '4480FF', fontSize: '1.5rem', fontWeight: 'bold' }} />
          </button>
        </div>
        <Tooltip content='Agregar unidad'>
        <Button onClick={openRegister} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <HiPlus style={{ color: '4480FF', fontSize: '2rem', fontWeight: 'bold' }} />
        </Button>
      </Tooltip>
      </div>



      <div className='justify-center p-3'>

        <div >
 
        <CustomDataTable
            columns={columns}
            data={users}
            isLoading={loading}
          />
        </div>

        <RegisterUserS isCreating={isCreating} setIsCreating={setIsCreating}/>
        <UpdateStudents isUpdate={isUpdate} setUpdate={setUpdate}/>

      </div>
   
      

      

    </>
  )
}

export default SettingsStudents
