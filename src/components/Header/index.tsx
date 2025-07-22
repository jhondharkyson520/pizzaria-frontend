import styles from './styles.module.scss'
import Link from 'next/link'
import {FiLogOut} from 'react-icons/fi'
import {AuthContext} from '../../contexts/AuthContext'
import { useContext } from 'react'

export function Header(){

    const {signOut} = useContext(AuthContext);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

                <Link className='a' href="/dashboard">
                    <img src="logo.svg" width={190} height={60} />
                </Link>

                <nav className={styles.menuNav}>
                    <Link className={styles.a} href="/category">
                        Categoria
                    </Link>

                    <Link className={styles.a} href="/product">
                        Cardapio
                    </Link>

                    <Link className={styles.a} href="/newuser">
                        Novo usuário
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color='#FFF' size={24}/>
                    </button>
                </nav>

            </div>
        </header>
    )
}