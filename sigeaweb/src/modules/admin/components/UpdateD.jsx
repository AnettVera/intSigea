import React from 'react';
import { Label, Modal, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import AxiosClient from '../../../config/http-client/axios-client';

const UpdateD = ({ isUpdate, setUpdate }) => { 
  const closeModal = () => {
    setUpdate(false);
  }

  const formik = useFormik({
    initialValues:{
      username: "",
      password: "",
      confirmPassword: "",
      roles: '',
      name: "",
      surname: "",
      lastname: "",
      curp: "",
      birthdate: "",
    }
  });

  return (
    <div>
      <Modal show={isUpdate} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-1">
            <h3 className="text-xl font-medium text-blue-600 dark:text-white text-center">Editar docente</h3>

            <form>


            <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="username" value="Nombre de usuario" />
                </div>
                <TextInput
                  id="name"
                  required
                  name='username'
                />
              </div>


              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="name" value="Nombre" />
                </div>
                <TextInput
                  id="name"
                  required
                  name='name'
                />
              </div>

              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="lastname" value="Apellido paterno" />
                </div>
                <TextInput
                  id="lastname"
                  required
                  name='lastname'
                />
              </div>

              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="surname" value="Apellido materno" />
                </div>
                <TextInput
                  id="materno"
                  name='surname'
                  required
                />
              </div>

              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="email" value="Correo electronico" />
                </div>
                <TextInput
                  id="email"
                  name='email'
                  required
                />
              </div>

              
              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="password" value="Correo electronico" />
                </div>
                <TextInput
                  id="password"
                  type='password'
                  name='password'
                  required
                />
              </div>


              <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
                <button
                  onClick={closeModal}
                  type='button'
                  className='bg-blue-600 text-medium px-6 py-2 rounded-md text-white'
                >
                  Actualizar
                </button>
              </div>

            </form>

          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}


export default UpdateD
