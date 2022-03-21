import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Select } from '../Select';

export const Builder = () => {
  return (
    <div>
      <Select />
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={'rebuild gwt?'} />
        <FormControlLabel control={<Checkbox />} label={'clean'} />
        <FormControlLabel control={<Checkbox />} label={'pull'} />
      </FormGroup>
    </div>
  );
};
