import React from 'react'

export default function kevin() {
  return (
    <div className='border-2 m-2 rounded-md p-1 shadow-xl w-9/12 h-5/6'>
        {/* form para ingresar los sigientes datos, nombre, apellido, ciudad, edad, sexo */}
        <form className='flex flex-col p-2'>
            <div className='flex flex-row justify-around w-full'>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label className='font-sans text-base' htmlFor="nombre">Nombre</label>
                <input className='border-slate-400 w-max border-b-2' type="text" name="nombre" id="nombre" />
              </div>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label className='font-sans text-base' htmlFor="apellido">Apellido</label>
                <input className='border-slate-400 w-max border-b-2' type="text" name="apellido" id="apellido" />
              </div>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label className='font-sans text-base' htmlFor="edad">Edad</label>
                <input className='border-slate-400 w-max border-b-2' type="number" name="edad" id="edad" />
              </div>
            </div>
            
            <div className='flex flex-row justify-around w-full'>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label htmlFor="ciudad">Ciudad</label>
                <input className='border-slate-400 w-max border-b-2' type="text" name="ciudad" id="ciudad" />
              </div>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label htmlFor="sexo">Sexo</label>
                <select className='border-slate-400 w-max border-b-2' name="sexo" id="sexo">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
              </div>
              <div className='shadow-md border-2 w-1/4 space-x-4 p-1 rounded'>
                <label htmlFor='email'>Email</label>
                <input className='border-slate-400 w-max border-b-2' type="email" name="email" id="email" />
              </div>
              
            </div>
            <button className='bg-blue-500 text-white rounded-md p-1'>Enviar</button>
            
        </form>
    </div>
  )
}


