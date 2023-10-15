import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

interface ImageGridProps {
    images: Array<string>
    labels?: Array<string>
}

const ImageGrid: any = (props: ImageGridProps) => {
    const { images, labels } = props;
    console.log(images, "last")

    return (
        <Grid container spacing={2} style={{ padding: "10px" }}>
            {images?.map((image, index) => (
                images.length > 2 ? <><Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', objectFit: "cover" }}>
                    <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }} />
                </Grid>
                </> : <Grid item xs={12} sm={12} md={12} lg={12} key={index} style={{ display: 'flex', justifyContent: 'center', objectFit: "cover" }}>
                    <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }} />
                </Grid>

            ))}
            {labels && labels?.map((label, index) => (
                labels.length > 2 ? <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', objectFit: "cover", justifyContent: "center" }}>
                    <Typography variant="body2"><strong>{label}</strong></Typography>
                </Grid>
                    : <Grid item xs={12} sm={6} md={4} lg={3} key={index} style={{ display: 'flex', objectFit: "cover", justifyContent: "center" }}>
                        <Typography variant="body2"><strong>{label}</strong></Typography>
                    </Grid>

            ))}

        </Grid>
    );
};

export default ImageGrid;