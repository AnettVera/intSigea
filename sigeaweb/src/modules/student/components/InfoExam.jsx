import React from 'react'
import { Card, Radio, Label} from 'flowbite-react';

const InfoExam = () => {
  return (
    <>
     <div className="my-5 w-full">
        <Card className='w-full flex justify-between'>
          <div className=' w-full font-medium flex justify-between ' style={{ textAlign: 'left' }}>
           <div><p>Nombre de la materia</p></div>
            <div><p>Unidad 1</p></div>
            
          </div>
          <div className='font-medium flex justify-between mt-4' style={{ textAlign: 'left' }}>
            <p>Fecha de entrega: 20/03/2024</p>
            <p>Calificación:10/12</p>
          </div>
        </Card>
      </div>
    </>
  )
}

export default InfoExam
