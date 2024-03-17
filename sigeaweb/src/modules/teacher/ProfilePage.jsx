import React, { useState } from 'react';
import { HiMagnifyingGlass, HiPlus } from 'react-icons/hi2';
import { Button, Checkbox, Label, Modal, TextInput, Tooltip, Accordion, Card } from 'flowbite-react';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import RegisterExam from './components/RegisterExam';

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [switchState, setSwitchState] = useState(false); 
  const [cardImage, setCardImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxMl5IkIrSmrD0-VMmphBVDCByELcfPbk3iK2-_ZZFyhSBxty');
  const [isCreating, setIsCreating] = useState(false);
  const openRegister = () => {
    setIsCreating(true); 
  }
  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
    // Cambiar la imagen de la card si esta activa o no 
    setCardImage(switchState ? 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4JyBPKMBZh4_T_8Bv1r6VqEDMCZVUFRfe0cpRPA830alFQD9q':'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeFMMlxTaWx1WFl6Fb6PcLDaI7UxoZQPfT9Sj3Ti-VVkUppVPl');
  };


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

      <div className='w-full justify-center p-5'>

        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className='text-blue-950 bold'>Unidad 1</Accordion.Title>
            <Accordion.Content>

              <Card className="w-60 justify-center text-center p-0">
                <div className='mx-auto justify-center text-center'>
                  <Switch onChange={handleSwitchChange} checked={switchState} />
                </div>
                <Link to={'/exam'}>
                  <div className='mx-auto justify-center text-center'>
                    <img src={cardImage} alt="Estudiantes" className='w-52 h-52 p-0 m-0' />
                  </div>
                  <h6 className="text-lg font-bold tracking-tight text-blue-950 dark:text-white">
                    Efbb18
                  </h6>
                  <p className="font-normal text-gray-700 dark:text-gray-600">
                    Examen diagnostico
                  </p>

                </Link>
              </Card>

              <Tooltip content='Agregar examen'>
          <Button onClick={openRegister} style={{ backgroundColor: '#4480FF', border: 'none', cursor: 'pointer' }}>
            <HiPlus style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }} />
          </Button>
        </Tooltip>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

      </div >



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

      <RegisterExam isCreating={isCreating} setIsCreating={setIsCreating}/>

    </>
  )
}

export default ProfilePage
