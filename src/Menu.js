import { useState } from "react";
import Button from '@mui/material/Button';

const Menu = ({ setDirect, setReverse, stop, reset, setInitialCount }) => {
  const [initial, setInitial] = useState(0);
  const buttonStyle = { margin: "1%"};

  return (
    <div>
      <Button variant="contained" style={buttonStyle} size="large" onClick={setDirect}>Режим прямого счёта</Button>
      <Button variant="contained" style={buttonStyle} size="large" onClick={setReverse}>Режим обратного счёта</Button>
      <Button variant="contained" style={buttonStyle} size="large" onClick={stop}>Стоп</Button>
      <Button variant="contained" style={buttonStyle} size="large" onClick={reset}>Сброс</Button>
    </div>
  );
};

export default Menu;
