import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function MediaCard({character}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        
        image={character.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Nombre:{character.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         Estado:{character.status}
        </Typography>
        <Typography>
         Creado:{character.created}
        </Typography>
        
      </CardContent>
     
    </Card>
  );
}
