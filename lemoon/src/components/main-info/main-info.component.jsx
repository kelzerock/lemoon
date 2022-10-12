import Instruction from './instruction/instruction.conponent';
import './main-info.styles.scss'
import Reason from './reason/reason.component';

const MainInfo = () => {
  return (
    <div className="main-info">
      <Reason />
      <Instruction />
    </div>
  );
};

export default MainInfo;
