import React from 'react'
import Slider from "react-slick"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",backgroundColor:"black", borderRadius:"5px" , paddingTop:"2px"}}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "black", borderRadius:"5px" , paddingTop:"2px"}}
        onClick={onClick}
      />
    );
  }
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
};

const useStyles = makeStyles((theme) => ({
    
    cardGrid: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
   },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },

  }));
  const cards = [1, 2, 3];
  

export default function Section2(props) {
    const classes = useStyles();
    const post = props;
    return (
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth="lg">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Our Client</h2>
                    </div> 
                </div>
                <div className="slide">
                <Slider {...settings} >
                    <Container className={classes.cardGrid} maxWidth="lg" >
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={4}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="lg" >
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={12} md={4}>
                                <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Slider>
                </div>
            </Container>
            
        </React.Fragment>
    )
}
