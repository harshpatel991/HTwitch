import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { search } from "../utility/requests";
import AccountCard from "./AccountCard";
import { Avatar, CardActionArea, Grid } from '@mui/material';

const SearchResults = ({ searchValue }) => {

    const [foundUsers, setFoundUsers] = useState([]);

    const tokenData = useSelector(state => state.twitchCredentials.value);
    console.log(tokenData);

    useEffect(async () => {
        if (tokenData != null) {

            const searchResults = await search(searchValue, tokenData, process.env.NEXT_PUBLIC_CLIENT_ID);
            setFoundUsers(searchResults.data);
        }
    }, [searchValue, tokenData]);

    return (

        <div>
            {searchValue && <h3 className="title">
                Searching for {' '}{searchValue}...
            </h3>}

            Results
            <Grid container spacing={2} >
                {foundUsers.map(account => { return <AccountCard key={account.id} account={account} /> })}
            </Grid>
        </div>
    )

}

export default SearchResults;