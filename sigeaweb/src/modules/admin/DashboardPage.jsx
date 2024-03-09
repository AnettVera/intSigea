import React, { useState } from 'react';
import { Button, Label } from 'flowbite-react';
import { HiPencil } from 'react-icons/hi2';

const DashboardPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState('');

  const [userInfo, setUserInfo] = useState({
    firstName: 'Anett Yomali',
    lastName: 'Vera',
    surname: 'Carbajal',
    curp: 'VECA040828MBCRNA6',
    email: 'anettyomali@gmail.com',
  });

  const handleInputChange = (field, value) => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <>
    <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
      <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Ajustes</label>
      
    </div>
    <div className='flex flex-row justify-between w-full'>
      <div className='w-1/2 justify-center p-3'>
        <div className='text-center justify-center '>
          <div className='mt-4 relative inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full' style={{ backgroundColor: '#052368', color: '#fff', border: '4px solid#4480FF' }}>
            <span className='font-bold text-3xl text-white dark:text-gray-300'>S</span>
          </div>
          <div className='mt-6 flex justify-center flex-row font-medium text-2xl'>
            <Label className='mx-1'>Administrador</Label>
            <button className='bg-white rounded-full w-5 h-5 hover:bg-gray-100' onClick={handleEditClick}>
              <HiPencil style={{ color: '#4480FF' }} className='mx-1 cursor-pointer' />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='space-y-12 '>
            <div className='border-b border-gray-900/10 pb-12 '>
              <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                {Object.keys(userInfo).map((key) => (
                  <div className='sm:col-span-3 mb-4' key={key}>
                    <div className='mt-1'>
                      <input
                        type='text'
                        disabled={!isEditing}
                        value={userInfo[key]}
                        name={key}
                        id={key}
                        autoComplete={key}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className='text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                ))}

                {isEditing && (
                  <div className='sm:col-span-3 mb-4'>
                    <div className='mt-2'>
                      <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Contraseña'
                        className='text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between gap-x-6'>
            {isEditing && (
              <>
                <button
                  type='button'
                  className='bg-red-700 px-4 py-1 text-white rounded-sm'
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
                <button
                  type='button'
                  className='bg-green-700 px-4 py-1 text-white rounded-sm'
                  onClick={() => setIsEditing(false)}
                >
                  Guardar cambios
                </button>
              </>
            )}
          </div>

        </form>
      </div>

      <div className='w-1/2 justify-center p-5'>
        
      <div className=' bg-slate-50 rounded-md font-3x1 flex flex-row '  style={{width:'80%', textAlign:'center', justifyContent:'center'}}>
          
          <div className=' text-center justify-center' style={{width:'80%'}}>
              <div className='flex justify-between'>
              <label className='text-center'>Tema:</label>
                <div className='w-8 h-8 mx-5' style={{backgroundColor:'#4480FF'}}></div>
                <div className='w-8 h-8 mx-5' style={{backgroundColor:'#052368'}}></div>
                <div className='w-8 h-8 mx-5' style={{backgroundColor:'#6B82B8'}}></div>
                <div className='w-8 h-8 mx-5' style={{backgroundColor:'#E4EAF8'}}></div>
              </div>
              <div className='text-xs'>
                  Nombre del tema
              </div>
          </div>
      </div>
      </div>

    </div>
    </>
    
  );
};

export default DashboardPage;
