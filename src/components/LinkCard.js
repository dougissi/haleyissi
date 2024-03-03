import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ href, image, imageHeight, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}