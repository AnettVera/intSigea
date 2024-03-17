import React from 'react';
import { Label, Modal, TextInput, } from 'flowbite-react';
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import AxiosClient from '../../../config/http-client/axios-client';

const RegisterExam = ({ isCreating, setIsCreating }) => {
  const closeModal = () => {
    
    setIsCreating(false);
  }

  const formik= useFormik({
    initialValues:{
      name: "",
    }
  })

  return (
    <div>
        <Modal show={isCreating} size="md" onClose={closeModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-blue-600 dark:text-white text-center">Registro de examen</h3>

            <form>
              <div>
                <div className="mb-0.5 block">
                  <Label htmlFor="name" value="Nombre del examen" />
                </div>
                <TextInput
                  id="name"
                  required
                  name='name'
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

export default RegisterExam
