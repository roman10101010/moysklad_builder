import React, { FC, useCallback, useState } from 'react';
import icon from '../../assets/btn.svg';
import { BranchRow } from '../BranchRow';
import { Dropdown } from './Dropdown';
import './styles.css';

export const Select: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const closeHandler = useCallback(() => setOpen(false), []);

  const toggleHandler = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className="select__wrapper">
      <div onClick={toggleHandler} className="select__selected_branch">
        <BranchRow />
        <img src={icon} />
      </div>
      <Dropdown isOpened={isOpen} closeHandler={closeHandler}>
        {Array(15)
          .fill(null)
          .map((_, index) => (
            <BranchRow key={index} />
          ))}
      </Dropdown>
    </div>
  );
};
