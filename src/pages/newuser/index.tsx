import {useState, FormEvent, useContext} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logoImg from '../../../public/logo.svg';
import {Input} from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import Link from 'next/link';
import {AuthContext} from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import {Header} from '../../components/Header';
import styles from './styles.module.scss';

export default function SignUp() {
  const {signUp} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if(name === '' || email === '' || password === '') {
      toast.warning("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    let data = {
      name,
      email,
      password
    };
    await signUp(data);
    setLoading(false);
  }  

  return (  
    <>
    <Header/>
    <Head>
      <title>Novo usuário - Sujeito Pizzaria</title>
    </Head>
    <div className={styles.containerCenter}>
            <main className={styles.login}>
                <h1>Cadastrar um novo usuário</h1>
              <form onSubmit={handleSignUp}>
                  <Input
                    placeholder='Digite seu nome'
                    type='text'
                    value = {name}
                    onChange={ (e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder='Digite seu email'
                    type='text'
                    value = {email}
                    onChange={ (e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder='Digite sua senha'
                    type='password'
                    value = {password}
                    onChange={ (e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    loading={loading}
                  >
                      Cadastrar
                  </Button>                  
              </form>
            </main>
    </div>
    </>
  );
}
