import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import CommonCard from './components/commoncard';
import ImageGrid from './components/imagegrid';
import Header from './components/header/header';
import MainFeaturedPost from './components/mainfeature';
import soil from './static/soil.jpg'; // Import the image
import FeaturedPost from './components/subsections';
import Grid from '@mui/material/Grid';

function App() {
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Diam quis enim lobortis scelerisque. Dignissim suspendisse in est ante in nibh. Et ultrices neque ornare aenean euismod elementum nisi quis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Duis at consectetur lorem donec massa sapien faucibus et. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Elit at imperdiet dui accumsan sit amet. Scelerisque fermentum dui faucibus in ornare. Sed viverra tellus in hac habitasse. Lorem donec massa sapien faucibus. Pretium fusce id velit ut. Sollicitudin ac orci phasellus egestas tellus rutrum tellus",
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Diam quis enim lobortis scelerisque. Dignissim suspendisse in est ante in nibh. Et ultrices neque ornare aenean euismod elementum nisi quis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Duis at consectetur lorem donec massa sapien faucibus et. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Elit at imperdiet dui accumsan sit amet. Scelerisque fermentum dui faucibus in ornare. Sed viverra tellus in hac habitasse. Lorem donec massa sapien faucibus. Pretium fusce id velit ut. Sollicitudin ac orci phasellus egestas tellus rutrum tellus",
    },
  ];

  const images = [
    soil,
    soil,
    soil,
    soil,
    soil,
    soil,
    soil,
    soil

    // Add more image URLs here
  ];
  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Diam quis enim lobortis scelerisque. Dignissim suspendisse in est ante in nibh. Et ultrices neque ornare aenean euismod elementum nisi quis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Duis at consectetur lorem donec massa sapien faucibus et. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Elit at imperdiet dui accumsan sit amet. Scelerisque fermentum dui faucibus in ornare. Sed viverra tellus in hac habitasse. Lorem donec massa sapien faucibus. Pretium fusce id velit ut. Sollicitudin ac orci phasellus egestas tellus rutrum tellus",
    linkText: 'Link',
  };
  return (
    <>
      <div className='container'>
        <div className="header"><Header title="Soil Texture Classification" /></div>
        {/* <Container>  */}
        <MainFeaturedPost post={mainFeaturedPost} images={images} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} images={images} />
          ))}
        </Grid>
        <MainFeaturedPost post={mainFeaturedPost} images={images} />

      </div>
    </>


  );
}

export default App;
