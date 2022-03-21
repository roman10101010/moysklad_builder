import { FC } from 'react';
import icon from '../../assets/task.svg';
import './styles.css';

interface Props {
  branchName?: string;
  taskName?: string;
}

export const BranchRow: FC<Props> = ({
  branchName = 'MC-49332',
  taskName = 'Блок-заголовок из Карточки Заказа покупателя',
}) => {
  return (
    <div className="row">
      <img src={icon} />
      <div className="row_branch">{branchName}</div>
      <div className="row_task">{taskName}</div>
    </div>
  );
};
