import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'

const DisplayJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
            console.log(data[0].title)
        })
    },[])

  return (
    <div className='py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobs && jobs.map(job => <JobCard key={job._id} job={job}/>)}
        </div>
    </div>
  )
}

export default DisplayJobs