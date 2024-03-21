import React from 'react'
import { Card,Avatar} from 'flowbite-react';

const SubjectLayout = () => {
  return (
    <>
    <div className='m-3'>
    <Card className='p-0 h-12 my-2'>
        <div className='flex row space-x-2  items-center'>
        <Avatar placeholderInitials="RR" rounded />
        <p>Base de datos</p>
        </div>
    </Card>
    </div>
    </>
  )
}

export default SubjectLayout
