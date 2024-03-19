import React from 'react'
import { Card, Radio, Label} from 'flowbite-react';

const MultiAnswer = () => {
  return (
    <>
      <div style={{ marginTop: '15px', marginBottom: '10px' }}>
        <Card>
          <div className='font-medium' style={{ textAlign: 'left' }}>Cual es la raiz cuadrada de 36?</div>
          <div className=' w-full justify-between'>
            <div className="flex items-center gap-2 my-4">
              <Radio  name="preguntamultiple" value="op1" style={{ color: '#4480FF', }} />
              <Label htmlFor="op1" className='font-normal'>Opcion 1</Label>
            </div>
            <div className="flex items-center gap-2 my-4">
              <Radio name="preguntamultiple" value="op2" style={{ color: '#4480FF', }} />
              <Label htmlFor="op2" className='font-normal'>Opcion 2</Label>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default MultiAnswer
