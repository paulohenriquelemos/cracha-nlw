import { useEffect, useState } from 'react';

import imgSelo from '../images/selo.svg'
import imgGitHub from '../images/github.svg'
// import imgYoutube from '../images/youtube.svg'
import imgFacebook from '../images/facebook.svg'
import imgInstagram from '../images/instagram.svg'
import imgTwitter from '../images/twitter.svg'

import '../styles/home.css'


// api.github.com // serve para ver as rotas que podemos entrar na api do githubUser
// api.github.com/users/paulohenriquelemos

export function Home() {

    const [linksSocialMedia, setLinksSocialMedia] = useState({
        githubLogin: 'paulohenriquelemos',
        github: '',
        biog: '',
        instagram: 'ph_lemoss',
        facebook: 'paulohenrique.lemos.5',
        twitter: 'paulolemoss' 
    })
    
    useEffect(() => {
        const url = `https://api.github.com/users/${linksSocialMedia.githubLogin}`


        fetch(url).then(response => {
            if(response.ok) return response.json();
            throw new Error('Request failed.');
        }).then(data => {
            console.log(data.name)

            setLinksSocialMedia({
                ...linksSocialMedia,
                github: data.name,
                biog: data.bio
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    const [altura, setAltura] = useState(window.innerHeight)
    const [largura, setLargura] = useState(window.innerWidth)
    


    useEffect(()=>{
        
        const resizeGradientBackground = () => {

            if(window.innerWidth > window.innerHeight/1.5) {
                setAltura(window.innerHeight)
                setLargura(window.innerWidth)
            }
        }
        window.addEventListener('resize', resizeGradientBackground)
        resizeGradientBackground()

        return () => window.removeEventListener('resize', resizeGradientBackground)
      },)


    return (
        <>
            <span className="degrade1" 
                style={{height: `${largura}px`, 
                    width: `${largura}px`, 
                    left: `${largura*0.75-(largura)}px`,
                    top: `${-largura+(altura/2)}px`}}></span>
            <span className="degrade2" 
                style={{height: `${largura}px`, 
                    width: `${largura}px`, 
                    right: `${largura*0.75-(largura)}px`,
                    top: `${-largura+(altura/2)}px`}}></span>
            {/* <span className="degrade2"></span> */}
            <main>
                <div className="container">
                    <span className="quebra"></span>
                    <span className="faixa"></span>
                    <div className="avatar">
                        <span>
                            <img className="selo" src={imgSelo} alt="Selo Rocketseat" />
                        </span>
                        <img className="foto" src={`https://github.com/${linksSocialMedia.githubLogin}.png`} alt="Foto Perfil"/>
                    </div>
                    <h1>{linksSocialMedia.github}</h1>
                    {/* <h1 id="userName">Paulo Henrique</h1> */}

                    <a 
                        target="_blank" 
                        rel="noopeer noreferrer" 
                        href={`https://github.com/${linksSocialMedia.githubLogin}`} 
                        title="GitHub"
                    >
                        <img src={imgGitHub} alt="Icone GitHub" /> {linksSocialMedia.githubLogin}
                    </a>
                    {/* <p>Desenvolvedor júnior especializando em ReactJS. <br /> */}
                    <p>{linksSocialMedia.biog} <br />
                        #html #css #javascript #reactjs
                    </p>

                    <ul id="socialLinks">
                        {/* <li>
                            <a 
                                target="_blank" 
                                rel="noopeer noreferrer" 
                                href="https://www.youtube.com/channel/UCuub7GvqU3CcD0hUTDANVSg" 
                                title="Youtube"
                            >
                                <img src={imgYoutube} alt="Icone Youtube" />
                            </a>
                        </li> */}
                        <li>
                            <a 
                                target="_blank" 
                                rel="noopeer noreferrer" 
                                href="https://www.instagram.com/ph_lemoss" 
                                title="Instagram"
                            >
                                <img src={imgInstagram} alt="Icone Instagram" />
                            </a>
                        </li>
                        <li>
                            <a 
                                target="_blank" 
                                rel="noopeer noreferrer" 
                                href="https://www.facebook.com/paulohenrique.lemos.5" 
                                title="Facebook"
                            >
                                <img src={imgFacebook} alt="Icone Facebook" />
                            </a>
                        </li>
                        <li>
                            <a 
                                target="_blank" 
                                rel="noopeer noreferrer" 
                                href="https://twitter.com/paulolemoss" 
                                title="Twitter"
                            >
                                <img src={imgTwitter} alt="Icone Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}