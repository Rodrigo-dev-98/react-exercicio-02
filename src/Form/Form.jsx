import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <Input id="name" label="Name" placeholder="Digite seu nome"/>
      </p>
      <p>
        <Input id="email" type="email" label="Email" placeholder="Digite seu email" required/>
      </p>
      <Button />
    </form>
  );
};

export default Form;
