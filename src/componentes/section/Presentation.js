import styles from './Presentation.module.css'
import ButtonA from '../Elements/ButtonA'
import ButtonB from '../Elements/ButtonB'

function Presentation (){
    return (
        <div className={styles.presentation} id='Presentation' >
            <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>

            <h1>Olá, eu sou o João Victor!</h1>

            <p>
                Sou apaixonado pela tecnologia e suas infinitas possibilidades. <br></br>
                Como estudante de programação fullstack, estou em constante aprimoramento <br></br> 
                para me tornar um programador excepcional. Já contribuí em diversos projetos <br></br>
                com soluções inovadoras que impactaram positivamente a vida das pessoas. <br></br>
                Estou animado para continuar explorando o universo da tecnologia e inspirar <br></br>
                outros entusiastas a perseguirem seus sonhos.
            </p>

            <ButtonA link='https://github.com/srja0' text='Conecte-se comigo!'/>

        </div>
    )
}

export default Presentation