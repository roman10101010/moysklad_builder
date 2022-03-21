import { FC, useState } from 'react';
import icon from '../../assets/btn.svg';
import { BranchRow } from '../BranchRow';
import './styles.css';

export const Select: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="select__wrapper">
      <div onClick={() => setOpen(!open)} className="select__selected_branch">
        <BranchRow />
        <img src={icon} />
      </div>
    </div>
  );
};
