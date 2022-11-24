import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { NotifyOutcome, ServiceMessage } from "../../../../utils/helpers";

const DataSubmitter = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage | undefined>();

  const contribution = useSelector((state: any) => state.contributionData);
  const personal = useSelector((state: any) => state.personalData);
  const payment = useSelector((state: any) => state.payment);

  const data = JSON.stringify({
    entidad: contribution.entidad,
    monto: contribution.monto,
    meses: contribution.meses,
    nombre: personal.nombre,
    direccion: personal.direccion,
    telefono: personal.telefono,
  });

  async function MPPaymentProcess() {
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const stateJson = JSON.stringify({
      unit_price: contribution.monto,
    });

    const url = `${
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_EXTERNALHOST_URL
        : process.env.REACT_APP_EXTERNALHOST_URL
    }/payment`;

    const response = await axios.post(url, stateJson, customConfig);
    return window.open(response.data.body);
  }

  function CheckForFormCompletion() {
    if (
      !Object.keys(data).some(function (k: any) {
        return data[k];
      })
    ) {
      setMessage({
        color: "warning.main",
        text: "Debe completar todos los campos antes de enviar su solicitud.",
      });
      return false;
    } else {
      return true;
    }
  }

  async function PostSubmission() {
    console.log("PostSubmission - Donation");

    if (!process.env.REACT_APP_ENABLE_ALL_FEATURES) return;

    try {
      await axios.post(
        process.env.REACT_APP_DONATION_FORM_URL ??
          "https://submit-form.com/mVlOV5Xa",
        data
      );
      setMessage({
        color: "success.main",
        text: "Mensaje enviado exitosamente.",
      });
    } catch (error) {
      setMessage({
        color: "error.main",
        text: "Error en la entrega del mensaje. Por favor notifique del problema a tomasm.leguizamon@gmail.com.",
      });
    }
  }

  const submitHandler = async () => {
    if (!CheckForFormCompletion()) return;

    setSubmitting(true);

    if (payment.metodo === "debito") await MPPaymentProcess();
    else await PostSubmission();

    setSubmitting(false);
  };

  return (
    <>
      {NotifyOutcome(message)}
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          minWidth: 300,
        }}
      >
        <Button
          disabled={submitting}
          onClick={submitHandler}
          variant="contained"
          sx={{ fontFamily: "Helvetica Nue", color: "white" }}
        >
          {submitting ? "Enviando Mensage..." : "Enviar Solicitud"}
        </Button>
      </Box>
    </>
  );
};

export default DataSubmitter;
