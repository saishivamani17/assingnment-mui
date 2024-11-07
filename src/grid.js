import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

export default function BasicButtons() {
    return (
<div>
<Stack spacing={1} direction="row" display={"flex"} padding={5}  >
<div> <h1>DUBAI SHEIK</h1></div>
      <Button variant="contained">click here</Button>
    </Stack>

    <Stack spacing={2} direction="row" display={"flex"} padding={5} >
    <div> <h1>PUSHPARAJ</h1></div>
      <Button variant="contained">click here</Button>
    </Stack>

    <Stack spacing={2} direction="row" display={"flex"} padding={5} >
    <div> <h1>JALIREDDY</h1></div>
      <Button variant="contained">click here</Button>
    </Stack>

    </div>
    
  );
}