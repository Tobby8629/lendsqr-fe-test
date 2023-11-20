import React, { ReactNode } from 'react'

interface info_interface {
  title: string;
  children: ReactNode;
}

const InfoContainer = ({title, children}: info_interface) => {
  return (
    <section className='personal'>
        <h3>{title}</h3>
        {children}
      </section>
  )
}

export default InfoContainer