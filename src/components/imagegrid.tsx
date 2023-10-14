import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface ImageGridProps {
    images: Array<string>
}
const ImageGrid: any = (props: ImageGridProps) => {
    const { images } = props;
    console.log(images, "last")

    return (
        <Grid container spacing={2} style={{ padding: "10px" }}>
            {images?.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageGrid;