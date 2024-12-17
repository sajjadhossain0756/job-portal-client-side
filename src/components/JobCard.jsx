/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  console.log(job?.requirements)
  const { _id,title, company,applicationDeadline, company_logo,location,description,salaryRange } = job || {};
  return (
    <div className="card card-compact p-4 shadow-xl border-2 border-white">
      <div className="flex items-center gap-4">
        <figure>
          <img
            src={company_logo}
            className="w-16 h-16"
            alt="Shoes" />
        </figure>
        <div>
            <h4>{company}</h4>
            <p className="flex items-center gap-1"><FaLocationDot></FaLocationDot>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="pt-2">{description && description.substring(0, 80)}</p>
        <div className="flex gap-2 flex-wrap">
          {job?.requirements.map(skill => <p className="bg-gray-600 rounded p-2">{skill}</p>)}
        </div>
        <p>Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}</p>
        <p>Deadline: {applicationDeadline}</p>
        <div className="card-actions justify-start pt-4">
          <Link to={`jobs-detail/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default JobCard
