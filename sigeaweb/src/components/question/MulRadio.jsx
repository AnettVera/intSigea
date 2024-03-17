import React from 'react';
import { Card, Select, Button, Tooltip, Radio, Label, FloatingLabel } from 'flowbite-react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
const MulRadio = ({ onDone }) => {
    const handleDoneClick = () => {
        onDone();
    };
    return (
        <div>
            <Card
                className="w-full my-7"
            >
                <div className='sm:col-span-3 mb-4' >
                    <div className='mt-0.5'>
                        <input
                            type='text'
                            placeholder='Pregunta...'
                            className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />

                        <div className=' w-full justify-between'>
                            <div className="flex items-center gap-2 my-4">
                                <Radio id="united-state" name="countries" value="USA" style={{ color: '#4480FF', }} />
                                <Label htmlFor="united-state" className='font-normal'>Opcion 1</Label>
                            </div>
                            <div className="flex items-center gap-2 my-4">
                                <Radio id="germany" name="countries" value="Germany" style={{ color: '#4480FF', }} />
                                <Label htmlFor="germany" className='font-normal'>Opcion 2</Label>
                            </div>
                        </div>




                        <hr className="my-4 border-t bg-indigo-200" />
                        <div className='w-full flex justify-between'>
                            <FloatingLabel variant="standard" label="Puntuacion" />

                            <div className=" mx-1 text-end justify-end" style={{ width: '10%' }}>
                                <Button
                                    onClick={handleDoneClick}
                                    style={{ backgroundColor: '#fff', border: '1px solid#000', cursor: 'pointer', color: '#000' }}
                                >
                                    Hecho
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MulRadio
