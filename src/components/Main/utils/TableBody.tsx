import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/slices/UsersSlice';
import { DashboardData } from './DashboardData';

interface information {
    id: string,
    organization: string,
    user: string,
    email: string,
    phone_number: string,
    date_joined: string,
    status: string
   }

const TableBody = () => {
    const dispatch:any  = useDispatch();
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch])
    const fetchedData = useSelector((state: any)=>state.user)
    const data = fetchedData.users.user
    const Dashboard = data && DashboardData(data)
    console.log(Dashboard)
    
  return (
   <tbody>
       {Dashboard.map((user: information)=>(
        <tr style={{textAlign: 'center', padding: '.5rem', borderBottom: '1px solid gray'}} key={user.id}>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.organization}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.user}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.email}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.phone_number}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.date_joined}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.status}</td>
        </tr>
       ))}
   </tbody>
  )
}

export default TableBody