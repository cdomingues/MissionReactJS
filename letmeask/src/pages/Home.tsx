import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIcon from '../assets/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function Home(){

    const history = useHistory();
    const {user,signInWithGoogle} = useAuth()

    

    async function handleCreateRoom(){
        if(!user){
           await signInWithGoogle()
        }
        
        history.push('/rooms/new');
        
    }


    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>Tire as duvidas em tempo real</p>
            </aside>
            <main>
               
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcon} alt="Logo google" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separator">ou entre em uma sala</div>

                    <form>
                        <input type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>

                    </form>

                </div>
            </main>
        </div>
    )
}

