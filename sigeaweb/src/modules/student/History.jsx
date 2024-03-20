import React from 'react';
import InfoExam from './components/InfoExam';

const History = () => {
  return (
    <>
      <div className='w-full justify-center flex p-5 bg-white'>
        <div className='m-auto w-96  sm:w-full md:w-10/12 lg:w-full justify-center text-center px-6 py-4 rounded-md bg-gray-100'>
          <h5 className='font-bold mx-auto text-blue-900 text-3xl '>Historial</h5>
          <div className="mt-10">
            <InfoExam />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
