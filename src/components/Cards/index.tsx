import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from 'react-bootstrap';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Total User"/>
      <CardContent>
        <Typography gutterBottom variant="h5" >
          10244
        </Typography>
      </CardContent>
    </Card>
  );
}
