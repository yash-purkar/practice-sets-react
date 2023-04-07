import React from 'react';
import { Product, Product2, Users, ShowImg, Users1, Chats, Comments } from './Set5';

export const Questions = () => {
  return (
    <ol>
      <li><Users /></li>
      <hr />
      <li><Product /></li>
      <hr />
      <li><Product2 /></li>
      <hr />
      <li><ShowImg heading="User Profile" width={200} height={200} /></li>
      <hr />
      <li><Users1 heading="Users Feed" width={200} height={200} /></li>
      <hr />
      <li><Chats /></li>
      <hr />
      <li><Comments /></li>
      <hr />
    </ol>
  )
}
