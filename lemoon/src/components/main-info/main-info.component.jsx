import Form from './form/form.component';
import Gift from './gift/gift.component';
import Instruction from './instruction/instruction.conponent';
import './main-info.styles.scss'
import Reason from './reason/reason.component';

const MainInfo = () => {
  return (
    <div className="main-info">
      <Reason />
      <Instruction />
      <Gift />
      <Form />
    </div>
  );
};

export default MainInfo;
