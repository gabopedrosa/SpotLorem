import logo from './logo.svg';
import './App.css';
import img1 from './content/spotifyBg.png';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
    <div>
<img src={img1} class="bg_img" />
    <div class="body">    
        <div>
            <button class="alignBtn"> <img src="./content/home.png" width="35" />&nbsp; Página inicial</button> 
            <a href="./faq.html"><button class="alignBtn">FAQ</button></a>
            <a href="./form.html" ><button class="alignBtn">Formulário</button></a>
        </div>
    </div>
    <div class="body2">
       
        <input type="email" placeholder="E-mail" /> 
        <input type="password" placeholder="Insira sua senha" />
        &nbsp;<button class="button-primary">realizar login</button>
        <a href="./cadastro.html"><button class="button">criar conta</button> </a>
        <div></div>
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark">
        </div>
    </div>
  </div>
  );
}

export default App;
