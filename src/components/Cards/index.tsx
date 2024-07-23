import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { colors } from '@/utils/colors';
;

export default function Cards({title, count}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title}  sx={{ backgroundColor: colors.primary, color: '#fff' , fontSize:'14px'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" >
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}
