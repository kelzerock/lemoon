import "./instruction.styles.scss";
import img1 from "../../../assets/img/instruction_1.svg";
import img2 from "../../../assets/img/instruction_2.svg";
import img3 from "../../../assets/img/instruction_3.svg";
import img4 from "../../../assets/img/instruction_4.svg";
import img5 from "../../../assets/img/instruction_5.svg";
import imgPath from "../../../assets/img/path.svg"

const Instruction = () => {
  const instractionInfo = [
    {
      title: "Регистрация",
      information: `Зарегестрируйтесь на сайте и создайте учётгную запись, следуя всем правилам и требованиям.`,
      src: img1,
    },
    {
      title: "Модерация",
      information:
        "После процесса регистрации мы переходим к модерации и подтверждаем Вашу страницу как продавца",
      src: img2,
    },
    {
      title: "Заполнение",
      information:
        "После процесса модерации начинается этап заполнения страницы Вашим товаром. В случае, если у Вас уже есть свой личный сайт, процесс добавления товара упрощается. Если же Вы никак не представлены в интернете, это не станет для Вас большой проблемой. Мы поможем!",
      src: img3,
    },
    {
      title: "Повторная модерация ",
      information:
        "Как только товар будет размещён на Вашей странице, мы проведём повторную модерацию, и, если будет чего-то не хватать, мы Вам обязательно подскажем.",
      src: img4,
    },
    {
      title: "Вы – продавец",
      information: `После прохождения всех предыдущих этапов Ваш товар отображается на сайте, где пользователи платформы уже активно начинают совершать свои покупки.
      А вот уже и Ваш первый заказ!`,
      src: img5,
    },
  ];

  return (
    <div className="instruction-div">
      <h4>
        Как же начать продавать в интернете? Всё просто, присоединяйтесь к
        Lemoon!
      </h4>
      <div className="instruction-sheme">
        <img className="instruction-path" src={imgPath} alt="path" />
        {instractionInfo.map((element, index) => {
          return (
            <div className="instruction-item" key={index}>
              <div className="instruction-text">
                <h5>{`${++index}. ${element.title}`}</h5>
                <p>{element.information}</p>
              </div>
              <img className="instruction-img" src={element.src} alt={element.title} />
            </div>
          )
        })}.
      </div>
    </div>
  );
};

export default Instruction;
