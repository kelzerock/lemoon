import "./form.styles.scss";

const Form = () => {
  return (
    <div className="form-div">
      <h5>Не знаете, с чего начать?</h5>
      <h5>Нужна консультация?</h5>
      <p>Мы будем рады помочь и ответить на все Ваши вопросы.</p>
      <form onSubmit={handleSubmit}>
        <label>
           <input type="text" name="email" placeholder="email" />
        </label>
        <input type="submit" value="отправить" />
      </form>
    </div>
  );
};

const handleSubmit = (event) => {
  console.log('i check it')
  event.preventDefault();
}
export default Form;
