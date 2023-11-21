import { dateConvert } from "./DateConverter"

interface information {
 id: string,
 organization: string,
 user: string,
 email: string,
 phone_number: string,
 date_joined: string,
 status: string
}

export const DashboardData = (data: []) => (
 data.map((e: information)=> {
    return (
     {
      id: e.id,
      organization: e.organization,
      username: e.user,
      email: e.email,
      phone_number: e.phone_number,
      date_joined: dateConvert({date: e.date_joined}),
      status: e.status,
     }
    )
}))