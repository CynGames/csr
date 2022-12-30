import {Box, Divider, Typography} from '@mui/material'
import React, {useState} from 'react'
import FormFieldHolder from './1_FormFieldHolder/FormFieldHolder';
import PaymentButtons from './2_PaymentButtons/PaymentButtons';
import DataSubmitter from './3_DataSubmitter/DataSubmitter';
import {NotifyOutcome} from "../../../utils/helpers";

type ServiceMessage = {
    color: string,
    text: string;
};

const DonationSegment = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [message, setMessage] = useState<ServiceMessage>();

    return (
        <Box id={'donation'}
             sx={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center",
                 width: "100%",
                 m: 2
             }}>

            <Typography
                fontWeight={"bold"} variant={'h5'} fontFamily={"Helvetica Nue"} align="center"
            >
                ¿Quieres asociarte?
                <br/>
                Necesitamos tu Ayuda
            </Typography>
            <hr/>

            <Typography variant={'h6'} fontFamily={"Helvetica Nue"} align="center" sx={{mb: 1}}>
                Rellená los datos debajo, tales como la entidad, el monto mensual y los meses que deseas
                contribuir.
                <br/>
                No te preocupes por moverte de tu casa, nosotros nos acercaremos a cobrarte y darte el recibo.
            </Typography>
            <hr/>

            {NotifyOutcome(message)}

            <Box sx={{ minWidth: 200, width:"80vw",  maxWidth: 800}}>
                <FormFieldHolder/>
                <Divider sx={{mb: 1.5, minWidth: 300}}/>
                <PaymentButtons/>
                <Divider sx={{mb: 1.5, minWidth: 300}}/>
                <DataSubmitter/>
            </Box>
        </Box>

    )
}

export default DonationSegment
