import {Box} from "@mui/material";
import React from "react";

export type ServiceMessage = {
    color: string,
    text: string;
};

export function NotifyOutcome(message: ServiceMessage | undefined) {
    return <>
        {
            message &&
            <Box sx={{
                bgcolor: `${message.color}`,
                color: `#fff`,
                p: 2,
                mb: 4,
                fontSize: 18,
                fontFamily: "Helvetica Nue"
            }}>
                {message.text}
                <br/>
                Gracias por su tiempo.
            </Box>
        }
    </>;
}