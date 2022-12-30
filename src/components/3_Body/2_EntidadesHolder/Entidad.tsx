import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {EntidadTypings} from '../../../typings/entidad'

interface Props extends React.PropsWithChildren {
    props: EntidadTypings
}

const Entidad: React.FC<Props> = ({props}) => {
    const {
        name,
        description,
        logo,
        has_facebook,
        has_instagram,
        has_whatsapp,
    } = props

    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
            <Card sx={{maxWidth: 345, minHeight: 500, py: 2, my: 1}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={logo}
                    alt={name}
                    sx={{objectFit: "contain"}}
                />
                <CardContent sx={{height: 265 ,py: 2, my: 1}}>
                    <Typography
                        height={80}
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Helvetica Nue"}
                        align="center"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        fontFamily={"Helvetica Nue"}
                        align="center"
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-around", flex: 1}}>
                    {has_facebook && <Button size="small">Facebook</Button>}
                    {has_instagram && <Button size="small">Instagram</Button>}
                    {has_whatsapp && <Button size="small">WhatsApp</Button>}
                </CardActions>
            </Card>
        </div>
    );
}

export default Entidad
