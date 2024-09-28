import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <div className='ImagesCard'>
    <h1 className="cardText">SELECTED <br></br>PROJECTS</h1>
    <CardGroup className="custom-card-group">
      <Card className="custom-card">
        <Card.Img variant="top" src="src/assets/Images/imgstatue.jpeg" />
        <Card.Body>
          <Card.Title>CREATIVE STUDIO WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="src/assets/Images/img2.jpeg" />
        <Card.Body>
          <Card.Title>CREATIVE STUDIO WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="src/assets/Images/img3.jpeg" />
        <Card.Body>
          <Card.Title>CREATIVE STUDIO WEBSITE</Card.Title>
        </Card.Body>
      </Card>
      <Card className="custom-card">
        <Card.Img variant="top" src="src/assets/Images/img4.jpeg" />
        <Card.Body>
          <Card.Title>CREATIVE STUDIO WEBSITE</Card.Title>
        </Card.Body>

      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;
