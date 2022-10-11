import './logo.styles.scss'
import logoImg from '../../assets/img/Group 23.svg'

const Logo = (props) => {
  return (

    <img src={logoImg} className={`logo ${props.info}`} alt="logo"/>
  )
}

export default Logo