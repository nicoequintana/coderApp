import React from 'react'
import s from './Modules/loader.module.css'

function Loader() {
  return (
    <div className={s.loaderContainer}>
        <h1 className={s.loader}> Estamos cargando el sitio, <br /> por favor espera.</h1>
    </div>
  )
}

export default Loader