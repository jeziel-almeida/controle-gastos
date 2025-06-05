import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [form, setForm] = useState({
    email: {
      value: "",
      hasChanged: false
    }
  })

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <main className='centralize'>
      <form>
        
        <input 
          type="email" 
          placeholder='E-mail' 
          data-testid='email'
          value={form.email.value}
          onChange={event => setForm({...form, email: {
            hasChanged: true, 
            value: event.target.value
          }})}
        />
        { 
          !form.email.value 
          && form.email.hasChanged 
          && <div className='mensagem-erro' data-testid="email-required">E-mail é obrigatório</div> 
        }
        
        { 
          !isEmailValid(form.email.value)
          && form.email.hasChanged
          && <div className='mensagem-erro' data-testid="email-invalid">E-mail inválido</div> 
        }
        
        
        <input type="password" name="" id="" placeholder='Senha' />

        <button type="button" className='clear'>Recuperar senha</button>
        <button type="button" className='solid'>Entrar</button>
        <button type="button" className='outline'>Registrar</button>
      </form>

    </main>
  );
}

export default App;
