import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PropTypes, useState, useEffect } from 'react'
function Countdown({timerLength}) {
  const [count, setCount ] = useState();
  const [isRunning, setIsRunning] = useState();
  const clickHandler = () => {
    if(isRunning) {
      return;
    }
    setCount(timerLength);
    setIsRunning(true);
    setInterval(function() {
      console.log(count)
      setCount(a => {
        if(a <= 0) {
          console.log("should stop")
          setIsRunning(false);
          return;
        }
        return a - 1;
      });
    }, 1000)
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.parliament.uk/contentassets/a25a06e5ca1942f6997124b941b00629/dsc_3114_jt-1.jpg?format=webp&width=1000&quality=85" />
      <Card.Body>
        <Card.Title>Countdown</Card.Title>
        <Card.Text>
          {count  ? count : "Click start"}
        </Card.Text>
        <Button onClick={clickHandler} variant="primary">Start</Button>
      </Card.Body>
    </Card>
  );
}
// Countdown.propTypes = {
//   timerLength: PropTypes.number
// }
Countdown.defaultProps = {
  timerLength: 10
}

export default Countdown;