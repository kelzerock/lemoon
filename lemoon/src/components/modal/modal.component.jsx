import "./modal.styles.scss";

const Modal = (props) => {
  if(!props.show) {
    document.querySelector('body').classList.remove('lock')
    return null
  }
  
  document.querySelector('body').classList.add('lock')
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e=> e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">Спасибо! Ваша заявка будет обработана в ближайшее время!</h5>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;