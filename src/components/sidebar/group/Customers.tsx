import React from 'react'
import ListGroup from '../utils/ListGroup'
import users from '../assets/users 1.png'
import guarantor from '../assets/guarantor.png'
import loan from '../assets/loan.png'
import decision from '../assets/decision.png'
import request from '../assets/request.png'
import karma from '../assets/karma.png'
import whitelist from '../assets/whitelist.png'
import List from '../utils/List'

const Customers = () => {
  return (
    <ListGroup title="customers">
      <List icon={users} text='users' />
      <List icon={guarantor} text='guarantors' />
      <List icon={loan} text='loans' />
      <List icon={decision} text='decision making' />
      <List icon={request} text='loan request' />
      <List icon={whitelist} text='whitelist' />
      <List icon={karma} text='Karma' />
    </ListGroup>
  )
}

export default Customers