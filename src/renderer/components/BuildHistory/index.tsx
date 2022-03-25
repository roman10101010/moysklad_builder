import { Container } from '@mui/material';
import { FC } from 'react';
import { HistoryBody } from './HistoryBody';
import { HistoryHead } from './HistoryHead';
import './styles.css';

interface IBuildHistoryProps {}

export const BuildHistory: FC<IBuildHistoryProps> = () => {
  return (
    <>
      <HistoryHead />
      <HistoryBody />
    </>
  );
};
