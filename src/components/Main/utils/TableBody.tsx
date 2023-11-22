import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Redux/slices/UsersSlice';
import { DashboardData } from './DashboardData';
import More from './More';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { user } from './Interface';

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
    // const [openmore, setopenmore] = useState<user[]>()
    const dispatch:any  = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch])
    
    const users = useSelector((state: any)=> state.user.newUserData)
    // setopenmore({...openmore, ...users})
    const data = users.slice(0,9)
    const [openRowId, setOpenRowId] = useState<string | null>(null);

    const controlMore = (id: string) => {
      // Toggle the open state for the clicked row
      setOpenRowId((prev) => (prev === id ? null : id));
    };
  
    
  return (
   <tbody>
       {data.map((user: information)=>(
        <tr key={user.id} className='dashboard-row'>
         <td>{user.organization}</td>
         <td>{user.user}</td>
         <td>{user.email}</td>
         <td>{user.phone_number}</td>
         <td>{user.date_joined}</td>
         <td>
          {user.status=== "pending" && <button className="pending">{user.status}</button>}
          {user.status === "active" && <button className="active">{user.status}</button>}
          {user.status === "blacklist"  && <button className="blacklist">{user.status}</button>}
          {user.status === "inactive" && <button className="inactive">{user.status}</button>}
         </td>
         <td onClick={()=>controlMore(user.id)}>
           <FontAwesomeIcon icon={faEllipsis}/>
         </td>
         {openRowId === user.id && <More id={user.id} openRowId={openRowId} setOpenRowId = {setOpenRowId} />}
        </tr>
       ))}
   </tbody>
  )
}

export default TableBody