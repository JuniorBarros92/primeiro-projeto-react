import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UsePhotoPost from './UserPhotoPost';
import UserStarts from './UserStarts';

const User = () => {
  return <section className='container'>
    <UserHeader />
    <Routes>
   
   <Route path='/' element={<Feed />} />
   <Route path='postar' element={<UsePhotoPost />} />
   <Route path='estatisticas' element={<UserStarts />} />
    </Routes>

  </section>
};  

export default User;