import Head from "next/head";
import { Header } from '../../components/Header';
import styles from './style.module.scss';
import {useState, FormEvent} from 'react';
import {setupAPIClient} from '../../services/api';
import {toast} from 'react-toastify';
import {canSSRAuth} from '../../utils/canSSRAuth';

export default function Category() {
    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if(name === '') {
            return(
                toast.warning('Preencha o campo vazio para cadastrar!')
            );
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/category/create', {name: name});
        toast.success('Categoria cadastrada com sucesso!');
        setName('');
    }

    return (
        <>
        <Header/>
        <Head>
            <title>Nova categoria - Sujeito Pizzaria</title>
        </Head>
        <div>            
            <main className={styles.container}>
                <h1>Cadastrar categoria</h1>
                <form className={styles.form} onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Digite o nome da categoria"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}                    
                    />
                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </div>
        </>
    );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props:{}
    }
});