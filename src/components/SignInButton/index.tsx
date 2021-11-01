import {FaGithub, FaGoogle} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import styles from './styles.module.scss';

import {signIn,signOut, useSession} from 'next-auth/client';

export function SignInButton(){
    const [session] = useSession();
    
    return session ? (
<button type="button" className={styles.signInButton} onClick={() => signOut()}>
            <FaGoogle color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
<button type="button" className={styles.signInButton} onClick={() => signIn('google')}>
            <FaGoogle color="#eba417"/>
            Sign In With Google
        </button>
    )
}   