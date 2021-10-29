import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
import { Hamburguer } from '../Hamburguer';
import { useEffect, useState } from 'react';


export function Header(){
     
    return (
        <header className={styles.headerContainer}>
                <Hamburguer/>  
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/" prefetch>
                    <a>Home</a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                    <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}