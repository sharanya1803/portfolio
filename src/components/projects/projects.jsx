import React from 'react'
import './project.css'
import servicesdata from "../../assets/servicesdata.js";

const projects = () => {
    return (
        <div id='project' className='services'>
            <div className='services-title'>
                <h1>My Projects</h1>
            </div>
            <div className='container'>
                {servicesdata.map((service, index) => {
                    return <div key={index} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <h4>{service.s_desc}</h4>

                    </div>
                })}
            </div>

        </div>
    )
}

export default projects
