import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { EntidadTypings } from '../typings/entidad'
import EntidadContact from './EntidadContact'
import EntidadDescription from './EntidadDescription'
import { Divider } from '@mui/material';

interface Props extends React.PropsWithChildren
{
  props: EntidadTypings
}

const Entidad: React.FC<Props> = ({ props }) =>
{
  const {
    name,
    description,
    logo,
    has_facebook,
    has_instagram,
    has_whatsapp,
    facebook,
    instagram,
    whatsapp
  } = props

  // return (
  //   <div>
  //     {name}
  //     <EntidadDescription />
  //     <EntidadContact />
  //   </div>
  // )

  return (
    <Card sx={{ maxWidth: 345, py: 2 }} >
      <CardMedia
        component="img"
        height="140"
        image={logo}
        alt={name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Facebook</Button>
        <Button size="small">Instagram</Button>
        <Button size="small">WhatsApp</Button>
      </CardActions>
      <Divider />
    </Card>
  );
}

export default Entidad