import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Login', () => {

  test('Dado email, caso seja apagado, mostrar mensagem de erro email obrigatório', async () => {
    render(<App />);

    const email = screen.getByTestId('email');

    await userEvent.type(email, "qualquerValor");
    await userEvent.clear(email);

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).not.toBeNull();
  })

  test('Dado email, caso exista algum valor, esconder mensagem de erro email obrigatório', async () => {
    render(<App />);

    const email = screen.getByTestId('email');

    await userEvent.type(email, "qualquerValor");

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })

  test('Dado email, quando o campo estiver inalterado, esconder mensagem de erro email obrigatório', async () => {
    render(<App />);

    const email = screen.getByTestId('email');

    const requiredError = screen.queryByTestId('email-required');
    expect(requiredError).toBeNull();
  })

  test('Dado email, quando inválido, mostrar mensagem de erro email inválido', async () => {
    render(<App />)

    const email = screen.getByTestId('email');
  
    await userEvent.type(email, "anyValue");

    const requiredError = screen.queryByTestId('email-invalid');
    expect(requiredError).not.toBeNull();
  })
})