import React from 'react'

interface detail_interface {
  label: string,
  detail: string | number,
}

const InfoDetails = ({label, detail}: detail_interface) => {
  return (
    <div className='information'>
      <label>{label}</label>
      <input value={detail} readOnly />
    </div>
  )
}

export default InfoDetails