import Head from 'next/head'
import { AppBar, Box, Button, IconButton, Input, Menu, TextField, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { getToken, getVideosForUserId, search } from '../utility/requests';
import Video from '../components/Video';
import AccountCard from '../components/AccountCard';
import FavoritesList from '../components/FavoritesList';
import SearchResults from '../components/SearchResults';
import { VideogameAsset } from '@mui/icons-material';


export default function Home({ tokenData }) {
  console.log("token:" + tokenData);

  const [searchValue, setSearchValue] = useState("");

  const searchInputOnChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="container">


      <main>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Typography>
            Welcome to the easiest way to watch Twitch on your HTPC!
          </Typography>
          <Typography>
            HTwitch makes it easy to search, favorite, and view your favorite streamers with an easy to use interface made for large screens.
          </Typography>
        </div>

        <TextField fullWidth onChange={searchInputOnChange} variant="filled" id="search" autoComplete='off' value={searchValue} placeholder="Search..." />


        {searchValue === "" ? <FavoritesList /> : <SearchResults searchValue={searchValue} />}

      </main >
    </div >
  )
}
