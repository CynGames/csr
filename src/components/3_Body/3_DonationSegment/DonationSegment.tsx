import {Box, Divider, Grid, Typography} from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios';
import FormFieldHolder from './1_FormFieldHolder/FormFieldHolder';
import PaymentButtons from './2_PaymentButtons/PaymentButtons';
import DataSubmitter from './3_DataSubmitter/DataSubmitter';
import {NotifyOutcome} from "../../../utils/helpers";

type FormState = {
    entidad: string,
    monto: string | number,
    meses: string | number,

    nombre: string,
    direccion: string,
    telefono: string | number,

    debito: boolean
};

type ServiceMessage = {
    color: string,
    text: string;
};

const DonationSegment = () => {

    // const [formState, setFormState] = useState<FormState>();
    // const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();

    // const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    // {
    //   const { name, value } = event.target;
    //   const formKey = name as keyof FormState;
    //   const updatedFormState = { ...formState };
    //   // Accede al id del campo que corresponde.
    //   // updatedFormState[formKey] = value as keyof FormState;
    //   setFormState(updatedFormState);

    //   console.log(formState)
    // }

    const prepareSubmissionForm = () => {

    }

    // const submitForm = async (event: FormEvent) => {
    //     event.preventDefault();
    //     setSubmitting(true);
    //     await postSubmission();
    //     setSubmitting(false);
    // };

    // const postSubmission = async () => {
    //     const payload = {};
    //
    //
    //     try {
    //         await axios.post(formSparkUrl, payload);
    //         setMessage({
    //             color: 'success.main',
    //             text: 'Mensaje enviado exitosamente.'
    //         })
    //     } catch (error) {
    //         setMessage({
    //             color: 'error.main',
    //             text: 'Error en la entrega del mensaje. Por favor notifique del problema a tomasm.leguizamon@gmail.com.'
    //         })
    //     }
    // }

    return (
        <Grid container>
            <Grid
                item
                xs={12}
            >
                <Box
                    id={'donation'}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        m: 2
                    }}>
                    <Typography fontWeight={"bold"} variant={'h5'} fontFamily={"Helvetica Nue"} align="center">
                        ¿Quieres asociarte?
                        <br/>
                        Necesitamos tu Ayuda
                    </Typography>
                    <hr/>

                    <Typography variant={'h6'} fontFamily={"Helvetica Nue"} align="center" sx={{mb: 1}}>
                        Rellená los datos debajo, tales como la entidad, el monto mensual y los meses que deseas
                        contribuir.
                        <br/>
                        <br/>
                        No te preocupes por moverte de tu casa, nosotros nos acercaremos a cobrarte y darte el recibo.
                    </Typography>
                    <hr/>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Box m={2}>

                    {NotifyOutcome(message)}

                    <FormFieldHolder/>
                    <Divider sx={{mb: 1.5, minWidth: 300}}/>
                    <PaymentButtons/>
                    <Divider sx={{mb: 1.5, minWidth: 300}}/>
                    <DataSubmitter/>
                </Box>
            </Grid>

        </Grid>

    )
}

export default DonationSegment