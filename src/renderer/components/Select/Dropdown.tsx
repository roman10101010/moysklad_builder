import { ClickAwayListener } from '@mui/material';
import { FC } from 'react';

interface IDropdownProps {
  isOpened: boolean;
  closeHandler: () => void;
}

export const Dropdown: FC<IDropdownProps> = ({
  isOpened,
  closeHandler,
  children,
}) => {
  if (!isOpened) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <div className="select__dropdown">{children}</div>
    </ClickAwayListener>
  );
};
