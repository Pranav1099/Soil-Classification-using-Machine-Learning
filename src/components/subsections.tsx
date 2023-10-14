import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageGrid from './imagegrid';

interface FeaturedPostProps {
    post: {
        date: string;
        description: string;
        title: string;
    };
    images: Array<string>
}

export default function FeaturedPost(props: FeaturedPostProps) {
    const { post, images } = props;

    return (
        <Grid item xs={12} md={6} >
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex', backgroundColor: "#DFD7BF" }}>
                    <CardContent >
                        <Grid item xs={12} md={12} >
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <ImageGrid images={images} />
                        </Grid>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}