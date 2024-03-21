import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer (){
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://www.instagram.com/sr__ja0/'> <FaInstagram size={30}/> </a></li>
                <li> <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-gon%C3%A7alves-correia/'> <FaLinkedin size={30}/> </a></li>
                <li> <a href='https://github.com/srja0'><FaGithub size={30}/> </a></li>                                
            </ul>
            <p>joaogoncalves6270@gmail.com</p>
            <p>João Gonçalves © 2024</p>
        </div>
    )
}

export default Footer