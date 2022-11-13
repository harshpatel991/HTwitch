import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Avatar, CardActionArea, Grid } from '@mui/material';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';


const AccountCard = ({ account }) => {

    return (

        <Grid item xs={6}>
            <Card>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <Box sx={{ display: 'flex' }}>
                                <Avatar src={account.thumbnail_url} sx={{ width: 56, height: 56, marginRight: '15px' }} />
                                <div>
                                    <Typography variant="h6" component="div">
                                        {account.display_name}
                                    </Typography>
                                    <Typography>
                                        Live: {account.is_live}
                                    </Typography>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Link href={'/channel/' + account.id}>
                                <Button size="large" variant="contained" endIcon={<ArrowForward />} >Go to Channel</Button>
                            </Link>
                        </Grid>

                    </Grid>
                </CardContent>


            </Card >
        </Grid>

    )



}

export default AccountCard;