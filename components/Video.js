import { CalendarMonth, PlayCircle, Timer, Visibility } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import moment from 'moment'


const Video = ({ video: { id, thumbnail_url, url, title, view_count, published_at, duration } }) => {


    const thumbnailUrl = thumbnail_url.replace('%{width}x%{height}', '900x500')

    console.log(duration);
    console.log();

    return thumbnailUrl ? (

        <Grid item xs={2}>
            <Image src={thumbnailUrl} width={450} height={250} />
            <Card>
                <CardContent>
                    <Grid container >
                        <Grid item direction="column" pb={1}>

                            <Typography>{title}</Typography>



                            <div style={{ color: 'rgb(95 94 94)' }}>
                                <Grid container mb={1}>
                                    <Visibility />{view_count.toLocaleString("en-US")}
                                </Grid>

                                <Grid container mb={1}>
                                    <CalendarMonth />{moment(published_at).fromNow()}
                                </Grid>

                                <Grid container mb={1}>
                                    <Timer />{[...duration.matchAll(/(\d*h)?(\d*m)?/g)][0][0]}
                                </Grid>
                            </div>
                        </Grid>
                        <Link href={'/video/' + id} >
                            <Button variant="contained" startIcon={<PlayCircle />} size="large" fullWidth> Watch</Button>
                        </Link>


                    </Grid>

                </CardContent>
            </Card>


        </Grid >) : <div />

}

export default Video;