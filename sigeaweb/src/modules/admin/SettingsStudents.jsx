import React, { useRef, useState } from 'react';
import { HiPlus, HiMagnifyingGlass } from "react-icons/hi2";
import { LiaUserEditSolid } from "react-icons/lia";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';




const SettingsStudents = () => {

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  return (
    <>
      <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
        <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Estudiantes</label>
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
        <button onClick={() => setOpenModal(true)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <HiPlus style={{ color: '4480FF', fontSize: '2rem', fontWeight: 'bold' }} />
        </button>
      </div>


      
      <div className='justify-center p-3'>





        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <tbody>
              <tr class="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                  Carlos Benjamin Diaz Pedroza"
                </th>

                <td class="px-6 py-4">
                  20223TN048
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Moises Santiago Gonzalez Retana
                </th>

                <td class="px-6 py-4">
                  20223TN055
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jaqueline Nieobe Hernandez Bernal
                </th>

                <td class="px-6 py-4">
                  20223TN057
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Vulmaro Alberto Martinez Verdugo
                </th>
                <td class="px-6 py-4">
                  20223TN069
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
              <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Anett Yomali Vera Carbajal
                </th>
                <td class="px-6 py-4">
                  20223TN034
                </td>
                <td class="px-6 py-4">

                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Leyla Alondra Villanueva Estrada
                </th>
                <td class="px-6 py-4">
                  20223TN034
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"> <LiaUserEditSolid /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='w-full justify-center text-center my-7'>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span class="sr-only">Previous</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
            <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span class="sr-only">Next</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>

      </div>


      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-blue-600 dark:text-white text-center">Registro de estudiantes</h3>

            <form>
            <div>
              <div className="mb-0.5 block">
                <Label htmlFor="nombre" value="Nombre" />
              </div>
              <TextInput
                id="nombre"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="mb-0.5 block">
                <Label htmlFor="paterno" value="Apellido paterno" />
              </div>
              <TextInput
                id="paterno"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-0.5 block">
                <Label htmlFor="materno" value="Apellido materno" />
              </div>
              <TextInput
                id="materno"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            
            <div>
              <div className="mb-0.5 block">
                <Label htmlFor="email" value="Correo electronico" />
              </div>
              <TextInput
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-0.5 block">
                <Label htmlFor="matricula" value="Matricula" />
              </div>
              <TextInput
                id="matricula"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            
          
            <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
              <button
              type='submit'
              className='bg-blue-600 text-medium px-6 py-2 rounded-md text-white'
              >
                Registrar
              </button>
            </div>

            </form>
           
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default SettingsStudents
