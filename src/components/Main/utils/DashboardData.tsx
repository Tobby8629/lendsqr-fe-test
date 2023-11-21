import { dateConvert } from "./DateConverter"
import { information } from "./Interface"

export const DashboardData = (data: information[]) => (
 data.map((e: information)=> {
    return (
     {
      id: e.id,
      organization: e.organization,
      user: e.user,
      email: e.email,
      phone_number: e.phone_number,
      date_joined: dateConvert({date: e.date_joined}),
      status: e.status,
      opentray: false
     }
    )
}))