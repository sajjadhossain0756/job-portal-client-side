import { useContext, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const JobDetails = () => {
  const [startDate, setStartDate] = useState(new Date())
  const {user} = useContext(AuthContext)
  const loaderData = useLoaderData()
  const {_id, title, company,category,applicationDeadline, company_logo,location,description,salaryRange } = loaderData || {};
  console.log(loaderData)

  return (
    <div className='flex flex-col  md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1 m-16  px-4 py-7 border-2 text-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light  '>
            Deadline: {applicationDeadline}
          </span>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold'>
            {title}
          </h1>

          <p className='mt-2 text-lg '>
            {description}
          </p>
          <p className='mt-6 text-sm font-bold'>
            Buyer Details:
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm  '>
                Name: {user?.displayName}
              </p>
              <p className='mt-2 text-sm'>
                Email: {user?.email}
              </p>
            </div>
            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img
                src={company_logo}
                alt=''
              />
            </div>
          </div>
          <p className='mt-6 text-lg font-bold  '>
             <p>Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}</p>
          </p>
        </div>
        <Link to={`/job-applay/${_id}`}><button className='btn bg-purple-800 my-4'>Apply Now</button></Link>
      </div>
      {/* Place A Bid Form */}
      {/* <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Place A Bid
        </h2>

        <form>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
                Price
              </label>
              <input
                id='price'
                type='text'
                name='price'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='comment'>
                Comment
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              // {/* Date Picker Input Field */}
              {/* <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Place Bid
            </button>
          </div>
        </form>
      </section> */}
    </div>
  )
}

export default JobDetails
