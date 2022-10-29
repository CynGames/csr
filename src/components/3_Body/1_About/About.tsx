import React from 'react'
import Typography from '@mui/material/Typography';

const About = () =>
{
  return (
    <>
      <Typography
        align='center'
        variant='h4'
        py={"5%"}
        fontFamily="Helvetica Nue"
        fontWeight={"bold"}
      >
        ¿Qué ofrecemos?
      </Typography>

      <Typography
        align='center'
        fontSize={18}
        pb={"5%"}
        fontFamily="Helvetica Nue"
        fontWeight={""}
        mx={2}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magni labore repellat maiores quia explicabo similique debitis, alias possimus eaque tenetur quae aliquam expedita dolorem nulla veritatis cupiditate amet consequatur.
      </Typography>
    </>
  )
}

export default About