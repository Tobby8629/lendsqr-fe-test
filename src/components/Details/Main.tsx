import React from 'react'
import InfoDetails from './utils/InfoDetails'
import InfoContainer from './utils/InfoContainer'

const Main = () => {
  return (
    <main className='personal-information'>
     <InfoContainer title='personal information'>
      <div className='personal-info'>
        <InfoDetails label='full name' detail='Grace Effiom' />
        <InfoDetails label='phone number' detail='Grace Effiom' />
        <InfoDetails label='email' detail='Grace Effiom' />
        <InfoDetails label='bvn' detail='Grace Effiom' />
        <InfoDetails label='gender' detail='Grace Effiom' />
        <InfoDetails label='martial status' detail='Grace Effiom' />
        <InfoDetails label='children' detail='Grace Effiom' />
        <InfoDetails label='type of residence' detail='Grace Effiom' />
      </div>
     </InfoContainer>
     <InfoContainer title='Education and Employment'>
      <div className='personal-info'>
        <InfoDetails label='level of education' detail='B.sc'/>
        <InfoDetails label= 'employment status' detail='employed' />
        <InfoDetails label='sector of employment' detail='fintech' />
        <InfoDetails label='duration of employment' detail='fintech' />
        <InfoDetails label='office email' detail='fintech' />
        <InfoDetails label='monthly income' detail='fintech' />
        <InfoDetails label='loan repayment' detail='fintech' />
      </div>
     </InfoContainer>
     <InfoContainer title='socials'>
      <div className='personal-info'>
        <InfoDetails label='twitter' detail='fintech' />
        <InfoDetails label='facebook' detail='fintech' />
        <InfoDetails label='instagram' detail='fintech' />
      </div>
     </InfoContainer>
     <InfoContainer title='guarantor'>
        <div className='personal-info'>
          <InfoDetails label='full name' detail='whatever' />
          <InfoDetails label='phone number' detail='whatever' />
          <InfoDetails label='email address' detail='whatever' />
          <InfoDetails label='relationship' detail='sister' />
        </div>
     </InfoContainer>
     <InfoContainer title=''>
        <div className='personal-info'>
          <InfoDetails label='full name' detail='whatever' />
          <InfoDetails label='phone number' detail='whatever' />
          <InfoDetails label='email address' detail='whatever' />
          <InfoDetails label='relationship' detail='sister' />
        </div>
     </InfoContainer>
    </main>
  )
}

export default Main