import React from 'react';
import { Label, Modal, TextInput, } from 'flowbite-react';
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import AxiosClient from '../../../config/http-client/axios-client';

const RegisterSubject = ({ isCreating, setIsCreating }) => {
  const closeModal = () => {
    
    setIsCreating(false);
  }

  const formik= useFormik({
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
  })

  return (
    <div>
        <Modal show={isCreating} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-blue-600 dark:text-white text-center">Registro de materias</h3>

            <form>
              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="name" value="Nombre de la materia" />
                </div>
                <TextInput
                  id="name"
                  required
                  name='name'
                />
              </div>

              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="degree" value="Grado" />
                </div>
                <TextInput
                  id="degree"
                  required
                  name='degree'
                />
              </div>

              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="group" value="Grupo" />
                </div>
                <TextInput
                type='number'
                  id="materno"
                  name='surname'
                  required
                />
              </div>

              <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300 mt-5">
              <button
                onClick={closeModal}
                type='button' 
                className='bg-blue-600 text-medium px-6 py-2 rounded-md text-white'>
                  Agregar
                </button>
              </div>

            </form>

          </div>
        </Modal.Body>
      </Modal>
      
    </div>
  )
}

export default RegisterSubject
