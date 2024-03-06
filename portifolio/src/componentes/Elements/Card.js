import styles from './Card.module.css'
import ButtonB from './ButtonB';

function Card({ img, title, tech, repo, description, site,}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt='ERRO'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias </strong> {tech}</p>
                <p> {description}</p>
                <ButtonB text='Acesse o Repositorio' href={repo}/>
            </section>
        </div>
    );
}

export default Card;
