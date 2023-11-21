import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/slices/UsersSlice';
import { DashboardData } from './DashboardData';
import More from './More';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

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
    const [openmore, setopenmore] = useState(true)
    const [data, setdata] = useState<any>()
    const dispatch:any  = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch])
    
    const users = useSelector((state: any)=> state.user.newUserData)
    
    const controlMore = () => {
      // setopenmore((prev)=>(
    //   prev.map((more)=> {
    //     if(more.id === id) 
    //   })
    // ) )
    }
    
  return (
   <tbody>
       {users.map((user: information)=>(
        <tr style={{textAlign: 'center', padding: '.5rem', borderBottom: '1px solid gray'}} key={user.id}>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.organization}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.user}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.email}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.phone_number}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.date_joined}</td>
         <td style={{textAlign: 'left', fontSize:"14px"}}>{user.status}</td>
         <td onClick={controlMore}>
           <FontAwesomeIcon icon={faEllipsis}/>
         </td>
         {openmore && <More id={user.id} />}
        </tr>
       ))}
   </tbody>
  )
}

export default TableBody