'use client';

import { authenticate } from '@/app/lib/actions';
import styles from './loginForm.module.css';
import { useState } from 'react';

const LoginForm = () => {
  const handleLogin = async (formData) => {
    const [err, setErr] = useState();
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  };

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type='text' placeholder='Username' name='username' required />
      <input type='password' placeholder='Password' name='password' required />
      <button type='submit'>Login</button>
      {err && <p>{err}</p>}
    </form>
  );
};

export default LoginForm;
