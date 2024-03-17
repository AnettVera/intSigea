import React from 'react';
import { Card, Select, Button, Tooltip } from 'flowbite-react';
import { HiPlus, HiOutlineCheckCircle } from 'react-icons/hi2';
const MulText = ({ onAddOption, onMarkCorrect }) => {
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

                        <div className='flex w-full justify-between'>
                            <div style={{ width: '92%' }}>
                                <input
                                    type='text'
                                    placeholder='Opcion'
                                    className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                                <input
                                    type='text'
                                    placeholder='Opcion'
                                    className='bg-indigo-100 block w-full my-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                            <div style={{ width: '8%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Tooltip content='Agregar opcion'>
                                    <Button style={{ backgroundColor: '#4480FF', borderRadius: '50%', width: '2rem', height: '2rem', border: 'none', cursor: 'pointer' }}>
                                        <HiPlus style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }} />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>




                        <hr className="my-4 border-t bg-indigo-200" />
                        <div className='w-full flex justify-between'>
                            <Button
                                onClick={() => {
                                    onMarkCorrect(); 
                                }}
                                style={{ backgroundColor: '#fff', border: 'none', cursor: 'pointer', color: '#000' }}
                            >
                                <HiOutlineCheckCircle style={{ color: '#4480FF', fontSize: '1.5rem', marginRight: 5 }} />
                                Marcar respuestas correctas
                            </Button>
                            <div className=" mx-1" style={{ width: '20%' }}>
                                <Select id="countries" required style={{ textAlign: 'center' }}>
                                    <option>Texto</option>
                                    <option>Opcion multiple</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MulText
