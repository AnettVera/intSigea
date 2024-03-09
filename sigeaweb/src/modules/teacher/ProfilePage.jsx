import React, {useState} from 'react'
import { HiMagnifyingGlass, HiPlus} from "react-icons/hi2";
import { Button, Checkbox, Label, Modal, TextInput, Tooltip } from 'flowbite-react';


const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
    <div className='w-full h-10 bg-blue-100 flex justify-between items-center p-4'>
         <label style={{ fontWeight: 'bold', color: '#052368', fontSize: '1.1rem' }}>Base de datos</label>
         <Tooltip content='Agregar unidad'>
         <Button onClick={() => setOpenModal(true)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
           <HiPlus style={{ color: '4480FF', fontSize: '2rem', fontWeight: 'bold' }} />
         </Button>
         </Tooltip>
         
       </div>

       <div>
        
       </div>


       
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-blue-600 dark:text-white text-center">Registro unidad</h3>

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

export default ProfilePage
