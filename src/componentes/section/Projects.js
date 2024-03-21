import ButtonB from '../Elements/ButtonB';
import styles from './Projects.module.css'; // Verifique se o caminho está correto
import Card from '../Elements/Card';
import lpdnc from '../../image/projects/lpdnc.svg'
import capabootcamp from '../../image/projects/capabootcamp.svg'
import capaportifolio from '../../image/projects/capaportifolio.svg'


function Projects() {
    return (
        <div className={styles.projects} id='Projects'> {/* Aplicação da classe CSS */}
            <h1> Projetos </h1>

            <Card
              img={capabootcamp}
              title="Bootcamp DNC"
              tech="HTML, CSS, JS e BANCO DE DADOS"
              description="Uma jornada única rumo à maestria do desenvolvimento"
              repo="https://github.com/srja0/LP-Bootcamp-DNC/blob/main/index.html"
              site="https://srja0.github.io/LP-Bootcamp-DNC/"
            />
                   
            <Card
              img={lpdnc}
              title="Landing Page - DNC"
              tech="HTML, CSS e JS"
              description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
              repo="https://github.com/srja0/O-Seu-Grande-Inicio"
              site="https://srja0.github.io/O-Seu-Grande-Inicio/"
            />

            <Card 
              img={capaportifolio}
              title="Portifolio em React"
              tech="REACT"
              description="Esse é meu portifolio feito em React para apresentar meus projetos"
              repo="https://github.com/srja0/Portfolio-Glorioso"
              site=""
            />

            <ButtonB text='Acesse meu repositorio' link='https://github.com/srja0?tab=repositories&q=&type=&language=&sort='/>
        </div>
    );
}

export default Projects;

