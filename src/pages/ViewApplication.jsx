import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const ViewApplication = () => {
    const loaderData = useLoaderData()

    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)

        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:4000/job_application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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
        <div className='mx-16'>
            <p>Total Application {loaderData.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Github Link</th>
                            <th>Linkedin Link</th>
                            <th>Applicant Email</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaderData && loaderData.map((application, indx) => {
                            return <tr key={indx} className="hover">
                                <th>{indx + 1}</th>
                                <td>{application.github}</td>
                                <td>{application.linkedin}</td>
                                <td>{application.applicant_email}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, application._id)}
                                        defaultValue={application.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option value='Under Review'>Under Review</option>
                                        <option value='Under Interview'>Under Interview</option>
                                        <option value='Hired'>Hired</option>
                                        <option value='Rejected'>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewApplication