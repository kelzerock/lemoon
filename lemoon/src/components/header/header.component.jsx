import Logo from "../logo/logo.components";
import "./header.styles.scss";
import lemonImg from '../../assets/img/lemon.png'

const Header = () => {
  return (
    <header className="header">
      <Logo info="small" />
      <div className="header-info">
        <h2>Лови сочную волну</h2>
        <h4>Lemoon – новая платформа для предпринимателей, где мы собрали все рынки страны в одном месте. Теперь продавать стало ещё проще! </h4>
        </div>
        <img className="image-lemon" src={lemonImg} alt="lemon" />
    </header>
  );
};

export default Header;
