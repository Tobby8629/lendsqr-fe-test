import React from 'react'
import ListGroup from '../utils/ListGroup'
import List from '../utils/List'
import preferences from '../assets/preferences.png'
import pricing from '../assets/pricing.png'
import audit from '../assets/audit.png'

const Settings = () => {
  return (
  <ListGroup title="Settings">
      <List icon={preferences} text='Preferences' />
      <List icon={pricing} text='fees and pricing' />
      <List icon={audit} text='Audit logs' />
  </ListGroup>
  )
}

export default Settings