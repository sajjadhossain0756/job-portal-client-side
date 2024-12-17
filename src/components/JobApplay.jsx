import React from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/AuthContext'
import { data } from 'autoprefixer'
import Swal from 'sweetalert2'

const JobApplay = () => {
    const {id} = useParams()
    console.log(id)
    const {user} = useAuth()

    const handleSubmitApplication = (e) =>{
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const applicationData = {
            job_id: id,
            applicant_email: user?.email,
            linkedin, 
            github, 
            resume}
        console.log(applicationData)
        fetch('http://localhost:4000/job_application',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            form.reset()
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmitApplication} className="card-body w-[650px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkedin URL</span>
                            </label>
                            <input type="url" name='linkedin' placeholder="Linkedin URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Applay</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobApplay