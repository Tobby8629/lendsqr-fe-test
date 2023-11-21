import React, { useEffect, useState } from 'react';
import Header from '../../components/Details/Header';
import Main from '../../components/Details/Main';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../Redux/slices/UsersSlice';

interface menu_interface {
  open: boolean;
  setopen: (open: boolean) => void;
}

const Details = ({ setopen, open }: menu_interface) => {
  const dispatch: any = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers(id)); 
  }, [dispatch, id]);
  const user = useSelector((state: any) => state.user.info);
  return (
    <section>
      <Header open={open} setopen={setopen} user = {user} />
      {user ? <Main info={user} /> : <div>Loading...</div>}
    </section>
  );
};

export default Details;
