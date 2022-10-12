import "./reason.styles.scss";
import img1 from "../../../assets/img/reason1.svg";
import img2 from "../../../assets/img/reason2.svg";
import img3 from "../../../assets/img/reason3.svg";
import img4 from "../../../assets/img/reason4.svg";
import persons from "../../../assets/img/persons.svg"

const Reason = () => {
  const imagesForReason = [
    { src: img1, className: "top right" },
    { src: img2, className: "bottom right" },
    { src: img3, className: "top right" },
    { src: img4, className: "bottom left" },
  ];

  const reasonInfo = [
    "Нестабильный поток покупателей",
    "Постоянное повышение арендной платы",
    "Изменения, связанные с COVID-19",
    "Большое число конкурентов.",
  ];

  const textInfo = [
    `Сегодня продавцы сталкиваются со множеством проблем, ввиду чего вынуждены оставить свой бизнес.`,
    `По статистике, каждый второй житель нашей страны совершает покупки в интернете, а за последний год более 4 миллионов белорусов купили какой-либо товар онлайн.`
  ]

  return (
    <div className="reason-div">
      <p className="reason-header">
        {textInfo[0]}
      </p>
      <div className="reason-info">
        {reasonInfo.map((element, index) => {
          return (
            <div className="reason-wrapper" key={index}>
              <div className="reason-item">
                <p>{element}</p>
              </div>
              <img
                className={`reason-img ${imagesForReason[index].className}`}
                src={imagesForReason[index].src}
                alt="Reason"
              />
            </div>
          );
        })}
      </div>
      <p className="reason-header">
        {textInfo[1]}
      </p>
      <div className="reason-person">
        <img className="person-img" src={persons} alt="persons" />
        <h2>&gt; 4 млн</h2>
      </div>
    </div>
  );
};

export default Reason;
