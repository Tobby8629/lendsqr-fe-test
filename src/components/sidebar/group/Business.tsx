import React from 'react'
import ListGroup from '../utils/ListGroup'
import List from '../utils/List'
import organization from '../assets/organization.png'
import loan from '../assets/loan.png'
import savings from '../assets/saving-product.png'
import fees from '../assets/fees.png'
import request from '../assets/request.png'
import services from '../assets/services.png'
import account from '../assets/user-times 1.png'
import settlement from '../assets/settlements.png'
import report from '../assets/reports.png'

const Business = () => {
  return (
    <ListGroup title="Business">
      <List icon={organization} text='organization' />
      <List icon={loan} text='loan products' />
      <List icon={savings} text='savings products' />
      <List icon={fees} text='fees and charges' />
      <List icon={request} text='transactons' />
      <List icon={services} text='services' />
      <List icon={account} text='services Account' />
      <List icon={settlement} text='settlement' />
      <List icon={report} text='reports' />
  </ListGroup>
  )
}

export default Business