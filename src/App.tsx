import React from 'react';
import './App.css';
import Header from './components/header/header';
import MainFeaturedPost from './components/mainfeature';
import cnnfm from './static/cnnffm.jpg';
import cvimg1 from './static/cvimg1.jpg';
import cv2m from './static/cv2m.jpg';
import all from './static/all.png';
import black from './static/black.jpg';
import clay from './static/clay.jpg';
import red from './static/red.jpg';
import FeaturedPost from './components/subsections';
import Grid from '@mui/material/Grid';
import CommonTable from './components/TableGrid';
import Typography from '@mui/material/Typography';
import ImageGrid from './components/imagegrid';

function App() {

  const names = [{
    title: "Rutvij Wamanse - rutvijw"
  },
  {
    title: "Pranav Pawar - pranav1099"
  },
  {
    title: "Chirag Patil - chiragpatil"
  }]


  const images = [
    cvimg1,
  ];

  const approachImages = [
    cnnfm,
    cv2m
  ]

  const dataImages = [
    all,
    black,
    red,
    clay
  ]

  const dataImagesLabels = ["Alluvial Soil", "Black Soil", "Red Soil", "Clay Soil"]

  const featuredPosts = [
    {
      title: 'Machine Learning using Image Processing',
      description:
        "First Approach involves employing image processing and computer vision techniques on the captured soil sample images, followed by classifying them using machine learning models like XGBoost, Random Forest, Decision Trees, and SVM classification. Image processing methods will include image segmentation to extract the region of interest from the soil images and feature extraction using Gabor wavelet filters, along with the utilization of color histograms within both RGB and HSV color spaces.\n <a href='https://www.sciencedirect.com/science/article/pii/S2214317318301239#b0040'>Gabor filters<sup>1</sup></a> are a class of linear filters used for feature extraction in images, particularly in the fields of image processing and computer vision. They are designed to capture texture and edge information within an image. We will be using it to capture textural characteristics of different types of soils. These filters have proven to excel in effectively localizing features within both spatial and frequency domains, making them ideal for addressing texture segmentation tasks.\n <a href='https://www.sciencedirect.com/science/article/pii/S1474667015310338'>Color histograms<sup>2</sup></a> are a common and effective way to characterize the distribution of colors within an image. We will be extracting color features from soil images by analyzing RGB histograms to identify the presence and distribution of specific colors in an image and HSV histograms to capture information about color and intensity separately so we can distinguish between different shades of a color based on the hue identify vivid colors using the saturation channel\n   "
      , images: images
    },
    {
      title: 'Convolutional Neural Network',
      description:
        "Our second approach will be using deep learning models like <a href='https://dl.acm.org/doi/10.1145/3065386'>Convolutional Neural Networks<sup>3</sup></a> which differ from the traditional machine learning models in its ability to perform automatic feature extraction which reduces the need for manual image processing techniques. It is designed to automatically learn hierarchical features directly from the raw image data.\n They owe their name to the key operation they employ, convolution, which involves sliding small filters or kernels across the input data to extract local patterns and features. This hierarchical approach allows CNNs to recognize complex structures by composing simpler patterns, making them highly efficient for understanding visual information.\n We will be comparing the results of both the techniques by using appropriate metrics"
      , images: approachImages
    }
  ];

  const mainFeaturedPost = {
    title: 'Introduction',
    description:
      "Soil classification is a crucial undertaking in agriculture, geology, and environmental science and holds wide-ranging implications for land use planning, crop management, and ecosystem preservation, as it is essential for comprehending and managing our planet's diverse landscapes. Conventional approaches to soil classification have frequently proven to be time-consuming and labor-intensive, necessitating extensive field surveys and expert assessments. The ability to accurately distinguish between different soil types, specifically alluvial, red, black, and clay soils, has the potential to revolutionize agricultural practices, optimizing crop selection, irrigation, and fertilization methods. By developing a robust model that can identify and classify these soil types from images, we can empower farmers, land developers, and researchers with valuable insights that can lead to more sustainable land management and greater food security.",

  };

  const mainFeaturedPost2 = {
    title: 'Problem Statement',
    description: "The aim of our project is to use machine learning combined with image analysis and processing and then compare its performance with deep learning techniques through convolutional neural networks (CNN) for the classification of various kinds of soils."

  };

  const mainFeaturedPost4 = {
    title: '',
    description:
      "\n Additionally, to enhance the diversity and richness of our dataset, we'll employ augmentation techniques. Augmentation involves applying various transformations to the images, such as rotation, cropping, flipping, and adjusting brightness or contrast. These transformations not only increase the number of data points but also introduce valuable variations, which can be crucial for training robust machine learning models. Augmentation helps mitigate overfitting and provides the model with a broader range of visual contexts to learn from, ultimately improving its generalization capabilities.\n In conclusion, standardising image dimensions and using data augmentation are critical processes in preparing our dataset for analysis or training machine learning models. These measures promote consistency and enhance the dataset, allowing us to get more robust and accurate results in our efforts.\n In our analysis, we will compare and contrast two distinct techniques. The first method involves image processing, in which we extract relevant information from images. These retrieved features will be used to train our machine learning models. Our second approach, on the other hand, makes use of Convolutional Neural Networks (CNNs), a specialised deep learning architecture intended for image processing. We will analyse and compare the efficacy of these two strategies in order to determine their distinct strengths and shortcomings.\n We will use several evaluation criteria, including accuracy and the F1 score, to assess the performance of different approaches. Accuracy measures how effectively the models accurately categorise images, whereas the F1 score provides a balanced assessment of accuracy and recall, accounting for both erroneous positives and false negatives. These criteria will be critical in assessing whether strategy produces superior image categorization and analysis outcomes.\n In addition, we will run tests to see how image augmentation affects the performance of both the feature-based technique and CNN. We can examine the amount to which these alterations enhance or alter the effectiveness of the chosen approaches by comparing the results before and after augmentation.\n We hope that by conducting these rigorous comparative analyses and experiments, we will be able to provide a comprehensive understanding of the most effective approach for our specific image analysis task, taking into account both feature-based methods and deep learning with CNNs, as well as the impact of image augmentation on the final results."

  };

  const mainFeaturedPost3 = {
    title: 'Our Approach',
    description: ""

  }

  const ref = {
    title: 'References',
    description:
      " 1. Barman, Utpal, and Ridip Dev Choudhury. “Soil Texture Classification Using Multi Class Support Vector Machine.” Information Processing in Agriculture 7, no. 2 (June 2020): 318–32. https://doi.org/10.1016/j.inpa.2019.08.001.\n 2. Chung, Sun-Ok, Ki-Hyun Cho, Jae-Woong Kong, Kenneth A. Sudduth, and Ki-Youl Jung. “Soil Texture Classification Algorithm Using RGB Characteristics of Soil Images.” IFAC Proceedings Volumes 43, no. 26 (2010): 34–38. https://doi.org/10.3182/20101206-3-JP-3009.00005.\n 3. Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton. “ImageNet Classification with Deep Convolutional Neural Networks.” Communications of the ACM 60, no. 6 (May 24, 2017): 84–90. https://doi.org/10.1145/3065386."

  }

  const mainFeaturedPost5 = {
    title: 'Experiments and Result Analysis',
    description: "\nThe <a href='https://www.kaggle.com/datasets/jayaprakashpondy/soil-image-dataset'>dataset</a> that we will be using consists of 4 classes and total of 1563 images"
    , linkText: 'dataset',

  }

  const mainFeaturedPost6 = {
    title: '',
    description: "\nThe dataset we're working with comprises images of varying dimensions, which necessitates the establishment of a uniform height and width for each image. This standardization process enables us to ensure consistency and compatibility across all images, making them amenable to a comprehensive analysis."

  }

  const tableData = {
    data: [
      { Class: 'Alluvial Soil', TrainSet: 528, TestSet: 54 },
      { Class: 'Black Soil', TrainSet: 231, TestSet: 116 },
      { Class: 'Clay Soil', TrainSet: 199, TestSet: 65 },
      { Class: 'Red Soil', TrainSet: 264, TestSet: 106 }
    ],
    columns: ['Class', 'TrainSet', 'TestSet'],
    containerStyle: {
      backgroundColor: '#F2EAD3',
      border: '1px solid #3F2305',
      padding: '1rem rem',
      width: "65%",
      margin: "0rem 10rem",
      justifyContent: "center",

    },
    cellStyle: {
      backgroundColor: '#F2EAD3',
      borderBottom: '1px solid #ccc',
      verticalAlign: 'middle',
      textAlign: 'center' as const,
      fontSize: "16px",
      color: "#3F2305",

    }
  }

  const mainFeaturedPost4_paragraphs = mainFeaturedPost4.description.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const mainFeaturedPost6_paragraphs = mainFeaturedPost6.description.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <>
      <div className='container'>
        <div className="header"><Header title="Soil Type Classification using Computer Vision" sections={names} /></div>
        {/* <Container>  */}
        <MainFeaturedPost post={mainFeaturedPost} />
        <MainFeaturedPost post={mainFeaturedPost2} />
        <MainFeaturedPost post={mainFeaturedPost3} childComponent=
          {<Grid container spacing={4} >
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>} />
        <MainFeaturedPost post={mainFeaturedPost5} childComponent={
          <>
            <CommonTable columns={tableData.columns} data={tableData.data} containerStyle={tableData.containerStyle} cellStyle={tableData.cellStyle} />
            <Typography className="text-body" variant="subtitle1" color="inherit" paragraph style={{ padding: '0 1rem' }}>
              {mainFeaturedPost6_paragraphs}
              <ImageGrid images={dataImages} labels={dataImagesLabels} />
            </Typography>
            <Typography className="text-body" variant="subtitle1" color="inherit" paragraph>
              {mainFeaturedPost4_paragraphs}
            </Typography>
          </>
        } />
        <MainFeaturedPost post={ref} />
      </div>
    </>


  );
}

export default App;
