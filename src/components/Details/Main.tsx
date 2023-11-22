import React from 'react'
import InfoDetails from './utils/InfoDetails'
import InfoContainer from './utils/InfoContainer'
import { User_info} from '../Main/utils/Interface'

const Main = ({info}: User_info) => {
  return (
    <main className='personal-information'>
     <InfoContainer title='personal information'>
      <div className='personal-info'>
        <InfoDetails label='full name' detail={info.full_name} />
        <InfoDetails label='phone number' detail={info.phone_number} />
        <InfoDetails label='email' detail={info.email} />
        <InfoDetails label='bvn' detail={info.bvn} />
        <InfoDetails label='gender' detail={info.gender} />
        <InfoDetails label='martial status' detail={info.martial_status} />
        <InfoDetails label='children' detail={info.children ? "yes" : "No"} />
        <InfoDetails label='type of residence' detail={info.residence_type} />
      </div>
     </InfoContainer>
     <InfoContainer title='Education and Employment'>
      <div className='personal-info'>
        <InfoDetails label='level of education' detail={info.education}/>
        <InfoDetails label= 'employment status' detail={info.employed?'employed':'unemployed'}/>
        <InfoDetails label='sector of employment' detail={info.job_sector} />
      <InfoDetails label='duration of employment' detail= {info.job_duration} />
        <InfoDetails label='office email' detail={`${info.user}@${info.organization}.com`} />
        <InfoDetails label='monthly income' detail={` ₦${info.monthly_income.toLocaleString()} -  ₦${info.monthly_income.toLocaleString()}`} />
        <InfoDetails label='loan repayment' detail={info.loan_repay} />
       
      </div>
     </InfoContainer>
     <InfoContainer title='socials'>
      <div className='personal-info'>
        <InfoDetails label='twitter' detail={info.twitter} />
        <InfoDetails label='facebook' detail={info.facebook} />
        <InfoDetails label='instagram' detail={info.instagram} />
      </div>
     </InfoContainer>
    {info.Guarantors.map((info, i)=>(
      <InfoContainer title={i === 0 ? "Guarantor" : " "} key={info.fullname}>
          <div className='personal-info' >
            <InfoDetails label='full name' detail={info.fullname} />
            <InfoDetails label='phone number' detail={info.phone_number} />
            <InfoDetails label='email address' detail={info.email} />
            <InfoDetails label='relationship' detail={info.relationship} />
          </div>
      </InfoContainer>
     ))}
    </main>
  )
}

export default Main