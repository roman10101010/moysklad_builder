import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Container,
} from '@mui/material';
import { Select } from '../Select';

export const Builder = () => {
  return (
    <div>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Select />
        <Button variant="contained">TEST</Button>
      </Container>
      <Container>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={'rebuild gwt?'} />
          <FormControlLabel control={<Checkbox />} label={'clean'} />
          <FormControlLabel control={<Checkbox />} label={'pull'} />
        </FormGroup>
      </Container>
    </div>
  );
};
