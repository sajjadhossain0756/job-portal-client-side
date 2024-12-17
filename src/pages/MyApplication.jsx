import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/AuthContext'
import { data } from 'autoprefixer'

const MyApplication = () => {
    const { user } = useAuth()
    const [applayJobs, setApplayJobs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/job_application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApplayJobs(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl font-bold py-8'>My Applay Jobs</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Company Logo</th>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    {applayJobs && applayJobs.map((job,indx) =>
                        <tr className="hover">
                        <th>{indx+1}</th>
                        <td><img src={job.company_logo} alt="logo" className='w-10' /></td>
                        <td>{job.company}</td>
                        <td>{job.title}</td>
                        <td>Purple</td>
                    </tr>
                    )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyApplication