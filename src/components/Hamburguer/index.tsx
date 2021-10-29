import React from 'react';
import { push as Menu } from 'react-burger-menu'
import {GiHamburgerMenu} from 'react-icons/gi';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';
import styles from '../Header/styles.module.scss';


export class Hamburguer extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
   
    return (
      <Menu right   customBurgerIcon={ <GiHamburgerMenu  size="13"/> }>
        
          <nav>
                    <ActiveLink activeClassName={styles.active} href="/" prefetch>
                    <a>Home</a>
                    </ActiveLink>
          </nav>
          <nav>
                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                    <a>Posts</a>
                    </ActiveLink>
         </nav>
        <SignInButton/>
      </Menu>
    );
  }
}