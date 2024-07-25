import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import back from '../Asserts/images/back.jpg';
import jordan from '../Asserts/images/jordan-wozniak-xP_AGmeEa6s-unsplash.jpg';
import Navbar from './Navbar';

const Data = [
  {
    "id": 1,
    "title": "Gift1",
    "img": back,
    "price": 120
  },
  {
    "id": 2,
    "title": "Gift1",
    "img": jordan,
    "price": 110
  },
  {
    "id": 3,
    "title": "Gift1",
    "img": "../Asserts/images/jordan-wozniak-xP_AGmeEa6s-unsplash.jpg",
    "price": 110
  },
  {
    "id": 4,
    "title": "Gift1",
    "img": "../Asserts/images/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg",
    "price": 110
  }
]

const Chad = () => {
  return (
    <div >
     
      <Container maxWidth="lg" style={{backgroundColor:"#ECCDB4"}}>
        <Typography variant="h3" align="center" style={{ marginTop: '50px',color:"red" }}>
          Order your gift now!
        </Typography>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} style={{ height: '100%' }}>
              <Card sx={{ width: 300, maxWidth: 345, height: '100%' }}>
                <CardActionArea style={{ height: '100%', padding: '10px' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    width="300"
                    image={result.img}
                    alt={result.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {result.title}: ₹{result.price}
                    </Typography>
                    <Button variant="primary">Ordernow!</Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Chad;
