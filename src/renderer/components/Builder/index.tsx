import {
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Container,
} from '@mui/material';
import { BuildHistory } from '../BuildHistory';
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
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <BuildHistory />
      </Container>
    </div>
  );
};
