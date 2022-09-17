import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState, ChangeEvent, useRef } from 'react'
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

type FormState = {
  email: string;
  name: string;
  message: string;
};

type ServiceMessage = {
  color: string,
  text: string;
};

const Contact = () =>
{
  const formId = "dJtToGHJ";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const recaptchaKey = '6LdICtchAAAAAJFVXYoBUQrwV4ZvjqG0uEYQSrI3';
  const recaptchaRef = useRef<any>();
  
  const initialFormState: FormState = {
    email: '',
    name: '',
    message: ''
  }

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setRecaptchaToken] = useState<string>();

  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const { name, value } = event.target;
    const formKey = name as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value as keyof FormState;
    setFormState(updatedFormState);
  }

  const submitForm = async (event: FormEvent) =>
  {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string)
  };

  const postSubmission = async () =>
  {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken
    };

    try
    {
      await axios.post(formSparkUrl, payload);
      setMessage({
        color: 'success.main',
        text: 'Mensaje enviado exitosamente.'
      })
    } catch (error)
    {
      setMessage({
        color: 'error.main',
        text: 'Error en la entrega del mensaje. Por favor notifique del problema a tomasm.leguizamon@gmail.com.'
      })
    }
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      m: 2
    }}>
      <Typography fontWeight={"bold"} variant={'h5'} fontFamily={"Helvetica Nue"} align="center">
        ¿Quieres contactarnos?
      </Typography>
      <hr />

      <Typography variant={'h6'} fontFamily={"Helvetica Nue"} align="center">
        Escribe tu mensaje debajo y te responderemos en la brevedad.
      </Typography>
      <hr />

      {
        message &&
        <Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2, mb: 4, fontSize: 18, fontFamily: "Helvetica Nue" }}>
          {message.text}
          <br />
          Gracias por su tiempo.
        </Box>
      }

      <Box sx={{ display: "flex" }}>
        <FormControl>
          <TextField
            required
            id="outlined-basic"
            name='name'
            label="Nombre"
            variant="outlined"
            value={formState.name}
            onChange={updateFormControl}
            sx={{ minWidth: "60vw" }}
          />
          <hr />

          <TextField
            required
            id="outlined-basic"
            name='email'
            label="Email"
            variant="outlined"
            value={formState.email}
            onChange={updateFormControl}
            sx={{ minWidth: "60vw" }}
          />
          <hr />

          <TextField
            required
            id="outlined-multiline-static"
            name='message'
            label="Mensaje"
            multiline
            rows={4}
            value={formState.message}
            onChange={updateFormControl}
          />
          <hr />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          >
          </ReCAPTCHA>
          <hr />

          <Button
            disabled={submitting}
            onClick={submitForm}
            variant="contained"
            sx={{ fontFamily: "Helvetica Nue", color: "white" }}
          >
            {submitting ? 'Enviando Mensage...' : "Enviar"}
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Contact