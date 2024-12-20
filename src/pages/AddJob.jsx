import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import useAuth from '../hooks/AuthContext'
import Swal from 'sweetalert2'

const AddJob = () => {
  const { user } = useAuth()
  const [startDate, setStartDate] = useState(new Date())

  const handleAddJob = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob)
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');
    console.log(newJob)

    fetch('http://localhost:4000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job successfully created",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <div className='flex justify-center items-center  min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto w-[850px] bg-gray-600 text-white rounded-md shadow-md '>
        <h2 className='text-4xl text-center font-bold text-white  capitalize '>
          Post a New Job
        </h2>

        <form onSubmit={handleAddJob} className='w-[700px] mx-auto'>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            {/* job title */}
            <div>
              <label className='text-white ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='title'
                placeholder='job title'
                name='title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* job location */}
            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                Job Location
              </label>
              <input
                id='emailAddress'
                type='text'
                placeholder='job location'
                name='location'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* deadline */}
            <div className='flex flex-col gap-2 '>
              <label className='text-white'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                name='applicationDeadline'
                className='border bg-white text-gray-700 p-2 w-full rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
            {/* category */}
            <div className='flex flex-col gap-2 '>
              <label className='text-white ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                className='border bg-white text-gray-700 p-2 rounded-md'
              >
                <option value='Web Development'>Web Development</option>
                <option value='Graphics Design'>Graphics Design</option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
            </div>
            {/* job type */}
            <select defaultValue='job type' name='jobType' className="select bg-white text-gray-800 select-bordered w-full max-w-xs">
              <option disabled >Job Type</option>
              <option value='Part Time'>Part Time</option>
              <option value='Full Time'>Full Time</option>
              <option value='Contract'>Contract</option>
            </select>
            {/* company name */}
            <select defaultValue='company Name' name='company' className="select bg-white text-gray-800 select-bordered w-full max-w-xs">
              <option disabled >Company</option>
              <option>Google</option>
              <option>Amazon</option>
              <option>Facebook</option>
            </select>
            {/* hr email */}
            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                HR Email
              </label>
              <input
                id='emailAddress'
                type='email'
                defaultValue={user?.email}
                name='hr_email'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* hr name */}
            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                HR Name
              </label>
              <input
                id='emailAddress'
                type='text'
                defaultValue={user?.displayName}
                name='hr_name'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* company logo */}
            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                Company Logo
              </label>
              <input
                id='emailAddress'
                type='url'
                placeholder='company logo'
                name='company_logo'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* status */}
            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                Status
              </label>
              <input
                id='emailAddress'
                type='text'
                placeholder='status'
                name='status'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          </div>
          {/* salary range */}
          <div className='flex pt-4 items-end gap-4'>
            <div>
              <label className='text-white ' htmlFor='min_price'>
                Salary Range
              </label>
              <input
                id='min'
                name='min'
                placeholder='min'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <input
                id='max'
                name='max'
                placeholder='max'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            {/* currency */}
            <select defaultValue='currency' name='currency' className="select bg-white text-gray-800 select-bordered w-full max-w-xs">
              <option disabled>Currency</option>
              <option value='USD'>USD</option>
              <option value='Euro'>Euro</option>
              <option value='BDT'>BDT</option>
            </select>
          </div>
          {/* requirements */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-white ' htmlFor='description'>
              Requirements
            </label>
            <textarea
              placeholder='put each requirement in new line'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='requirements'
              id='responsibilities'
            ></textarea>
          </div>
          {/* responsibilities */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-white ' htmlFor='description'>
              Responsibilities
            </label>
            <textarea
              placeholder='put each responsibilities in new line'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='responsibilities'
              id='responsibilities'
            ></textarea>
          </div>
          {/* description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-white ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddJob
