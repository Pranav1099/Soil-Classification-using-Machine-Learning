import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import ImageGrid from './imagegrid';

interface MainFeaturedPostProps {
    post: {
        description: string;
        linkText: string;
        title: string;
    };
    images: Array<string>
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
    const { post, images } = props;
    console.log(images, "in main")
    return (
        <Paper className='card' style={{ borderRadius: "15px" }}
            sx={{
                position: 'relative',
                backgroundColor: '#DFD7BF',
                color: '#3F2305',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            {/* Increase the priority of the hero background image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    // backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid >
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h2" variant="h4" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography variant="h6" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                    </Box>
                </Grid>
                <Box>
                    <ImageGrid images={images} />
                    {/* <Link variant="subtitle1" href="#">
                        {post.linkText}
                    </Link> */}
                </Box>
            </Grid>

        </Paper>
    );
}