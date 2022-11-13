import Head from 'next/head'
import { AppBar, Box, Button, IconButton, Input, Menu, TextField, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { getToken, getVideosForUserId, search } from '../utility/requests';
import Video from '../components/Video';
import AccountCard from '../components/AccountCard';
import FavoritesList from '../components/FavoritesList';
import SearchResults from '../components/SearchResults';
import { VideogameAsset } from '@mui/icons-material';
import { useForm } from 'react-hook-form';


export default function Contact({ tokenData }) {

  const [myInputValue, setMyInputValue] = useState('');
  const [mySelectValue, setMySelectValue] = useState('coconut');

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");


  function onChange(e) {
    setMyInputValue(e.target.value);
  }

  function myHandleSubmit(e) {
    e.preventDefault();
    alert("Submitted with " + myInputValue);
    setMyInputValue('');
  }

  function onMySelectVaueChange(e) {
    setMySelectValue(e.target.value);
  }

  return (
    <div className="container">


      <main>

        <form onSubmit={myHandleSubmit}>
          <input type="text" onChange={onChange} value={myInputValue}></input>
          <select value={mySelectValue} onChange={onMySelectVaueChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit" />
        </form>




        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <input {...register("firstName")} placeholder="First name" />
          <select {...register("category")}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          <textarea {...register("aboutYou")} placeholder="About you" />
          <p>{data}</p>
          <input type="submit" />
        </form>



      </main >
    </div >
  )
}
