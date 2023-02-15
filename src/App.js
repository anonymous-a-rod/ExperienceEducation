import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import data from "./data.js"

function App() {
  const [value, setValue] = useState(0);

  console.log(data)

  const {company,dates,duties,title} = data[value]

  return (
    <section className='section'>
      <div className="title">
        <h2>Experience & Education</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            data.map((item, index)=>{
              return ( 
                <button key={item.id} onClick={()=>{setValue(index)}}
                  className={`job-btn ${index===value? "active-btn": ""}`}
                >
                    {item.company}
                </button>
              )
            })
          }
          
        </div>
        
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          <ul>
            {duties.map((duty, index)=>  (
              <li key={index} className="job-desc">
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
    )


}

export default App
