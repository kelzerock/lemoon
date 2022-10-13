import './gift.styles.scss'
import imgGift from "../../../assets/img/gift.svg"

const Gift = () => {
  return (
    <div className='gift-div'>
      <h4>Звучит круто, не так ли? <br/>
      Начинайте продавать прямо сейчас!</h4>
      <div className='gift-block'>
        <p>А для новых пользователей нашего сервиса, которые успеют зарегистрировать до старта проекта, мы предлагаем специальные условия: пакет <span className='gift-important'>NewLemoon </span>, в который входят первые <span className='gift-important'>три месяца бесплатной</span> подписки, набор флаеров и наши фирменные пакеты. Станьте одним из первых и получите выгоду уже сейчас!s</p>
        <img className='gift-img' src={imgGift} alt="Gift" />
      </div>
    </div>
  )
}

export default Gift