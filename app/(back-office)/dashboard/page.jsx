import { dashboardData } from '@/data/dashboardData'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center gap-5'>
        {
          dashboardData.map((data,index) => (
            <div key={index} className="flex flex-col mt-10 bg-white border-black p-10">
              <div>
                {data.icon}
              </div>
              <div>
                {data.title}
              </div>
              <div>
                {data.value}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
