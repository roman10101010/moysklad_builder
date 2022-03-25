import { FC } from 'react';
import { BranchRow } from '../BranchRow';

const HistoryRow: FC = () => {
  return (
    <div className="history__row">
      <BranchRow />
      <div>18 Mar, 14:53</div>
    </div>
  );
};

export const HistoryBody: FC = () => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map(() => (
          <HistoryRow />
        ))}
    </>
  );
};
