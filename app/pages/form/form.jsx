'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const form = () => {
  return (
    <main>
      <div>
        <Image src='/Logo.png' alt='Logo Transito' width={370} height={100} />
      </div>
      <h1 className='h1 mb-3 text-center'>Datos Personales</h1>
      <div className='container'>
        <form className='form-signin col-md-4'>
          <div className='text-center mb-4'>
            <h5 className='h5 mb-3 font-weight-normal'>Ingresa tus Datos</h5>
          </div>
          <label for='inputId'>Tipo de Documento</label>
          <select
            class='form-select-plaintext'
            aria-label='Default select example'
          >
            <option selected>Seleccione Tipo Identificación</option>
            <option value='1'>Cedula de ciudadania</option>
            <option value='2'>Cedula de Extrajeria</option>
            <option value='3'>Pasaporte</option>
          </select>
          <label for='inputId'>Numero de Documento</label>
          <div className='form-label-group'>
            <input
              type='Number'
              id='inputid'
              className='form-control-plaintext'
              placeholder='Numero De Documento'
              required
              autofocus
            />
          </div>
          <label for='inputCel'>Numero Celular</label>
          <div className='form-label-group'>
            <input
              type='Number'
              id='inputCel'
              className='form-control-plaintext'
              placeholder='Celular'
              required
            />
          </div>

          <div className='checkbox mb-3'>
            <label>
              <input
                type='checkbox'
                value='Terminos_Condiciones'
                onClick={() => setShowModal(true)}
                className='btn-modal'
              />
              Acepto Terminos, condiciones y Tratamiento de datos personales
            </label>
          </div>

          <button
            className='btn btn-lg btn-primary btn-block'
            type='submit'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
          >
            <Link href='/menuPrincipal'>  Continuar</Link>
          </button>
        </form>
      </div>
    </main>
  );
};

export default form;
