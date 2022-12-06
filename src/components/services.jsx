import { render } from "@testing-library/react";
import { useState } from "react";
import { useEffect } from "react"

const base_url = "http://localhost:5000/"
export const Services = (props) => {

  const [cortes,setCortes] = useState([]);
  const obtenerCortes = async()=>{
    const res = await fetch(base_url+"api/peluqueria/cortes")
    const json = res.json();
    return json;
  }


  const renderCortes = cortes.map((d,i)=>{
    return(
      <div key={`${d.name}-${i}`} className='col-md-4'>
      {' '}
      <img src={"http://localhost:5000/img/"+d.mainPhoto} />
      <div className='service-desc'>
        <h3>{d.name}</h3>
        <p>{d.description}</p>
      </div>
    </div>

    )
  })

  useEffect(()=>{
    (async()=>{
      const res = await obtenerCortes();
      setCortes(res.msg)
    })()
  })

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nuestros servicios</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {renderCortes}
        </div>
      </div>
    </div>
  )
}
