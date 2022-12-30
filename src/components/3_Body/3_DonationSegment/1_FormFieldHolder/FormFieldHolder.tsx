import * as React from 'react';
import Contribution from './1_Contribution/Contribution';
import Personal from './2_Personal/Personal';

const FormFieldHolder = () =>
{
  return (
    <>
      <Contribution />
      <Personal />
    </ >
  );
}

export default FormFieldHolder
