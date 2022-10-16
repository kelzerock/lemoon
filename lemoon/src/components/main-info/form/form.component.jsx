import { useState } from "react";
import Modal from "../../modal/modal.component";
import "./form.styles.scss";

const Form = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="form-div">
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
      <h5>Не знаете, с чего начать?</h5>
      <h5>Нужна консультация?</h5>
      <p>Мы будем рады помочь и ответить на все Ваши вопросы.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="input-email"
            type="text"
            name="email"
            placeholder="email"
            onInput={(event)=>{
              const form = event.target;
              if(validateEmail(form.value)){
                form.classList.remove('bad-validate')
              } else {
                form.classList.add('bad-validate')
              }
            }}
          />
        </label>
        <input
          className="input-submit"
          type="submit"
          value="отправить"
          onClick={(event) => {
            const inputForm = document.querySelector('.input-email') 
            if(validateEmail(inputForm.value)){
              setShow(true);
            } else {
              inputForm.classList.add('bad-validate')
            }
          }}
        />
      </form>
    </div>
  );
};
const handleSubmit = (event) => {
  event.preventDefault();
};

const validateEmail = (email) => {
  return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
export default Form;
