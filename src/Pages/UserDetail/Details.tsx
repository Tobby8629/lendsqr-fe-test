import React from 'react'
import Header from '../../components/Details/Header'
import Main from '../../components/Details/Main'

interface menu_interface {
  open: boolean,
  setopen: (open: boolean) => void,
}

const Details = ({setopen, open}: menu_interface) => {
  return (
    <section>
      <Header open={open} setopen={setopen}/>
      <Main />
    </section>
  )
}

export default Details