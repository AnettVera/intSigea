import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import{customAlert} from '../../config/alerts/alert'
import { Label, TextInput, Button, Spinner} from 'flowbite-react';
import '../../assets/styles.css';
import 'flowbite/dist/flowbite.css';
import 'flowbite';
import welcome from '../../assets/img/student.png'
import { Link } from 'react-router-dom';



const CodeAccess = ({user}) => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const formik = useFormik({
      initialValues: {
        code: '',
      },
      validationSchema: yup.object().shape({
        code: yup.string().required('Campo obligatorio'),
      }),
      onSubmit: async (values, { setSubmitting }) => {
        try {
          console.log('Inicio');
        } catch (error) {
          customAlert(
            'Iniciar sesión',
            'Usuario y/o contraseña incorrectos',
            'info'
          );
        } finally {
          setSubmitting(false);
        }
      },
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      formik.handleSubmit(e);
      // Aquí puedes realizar acciones adicionales al enviar el formulario si es necesario.
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ marginTop: '5rem' }}>
        <div className="animacion">
          <div className="b1"></div>
          <div className="b1 b2"></div>
          <div className="b1 b3"></div>
        </div>
        <div className=" bg-white p-6 rounded-lg shadow-md mb-8" style={{width:'550px'}}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', justifyContent:'center'}}>
              <h1 className="text-blue-900 text-3xl font-semibold mb-6"> {'Hola Bienvenid@ ' + user.user.person?.name +
                '! ' }</h1>
            <img src={welcome} style={{height:'200px', width:'200px', margin:'auto'}}/>
            </div>
          <form onSubmit={handleSubmit} className="mb-8 flex-auto">
           
  
            <div className="mb-4">
              <Label htmlFor="username" value="Nombre de usuario" style={{ color: "#6B82B8" }}>Código de acceso</Label>
              <TextInput
                id="code"
                type="text"
                sizing="md"
                value={formik.values.code}
                onChange={(e) => { formik.handleChange(e); setCode(e.target.value); }}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.code && (
                <span className="text-red-600">{formik.errors.code}</span>
              )}
            </div>
            
            <div className="flex justify-center">
            <Link to={'/exam'}>
            <Button
                type="submit"
                style={{background:'#4480FF', width:'70%'}}
                disabled={formik.isSubmitting || !formik.isValid}
              >
                
                {formik.isSubmitting ? (
                  <Spinner />
                ) : (
                  'Acceder'
                )}
              </Button>
            </Link>
              
            </div>
          </form>
        </div>
      </div>
    );
}

export default CodeAccess
