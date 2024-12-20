import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewApplication = () => {
    const loaderData = useLoaderData()
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
                        </tr>
                    </thead>
                    <tbody>
                        {loaderData && loaderData.map((application, indx) => {
                            return <tr key={indx} className="hover">
                                <th>{indx + 1}</th>
                                <td>{application.github}</td>
                                <td>{application.linkedin}</td>
                                <td>{application.applicant_email}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewApplication