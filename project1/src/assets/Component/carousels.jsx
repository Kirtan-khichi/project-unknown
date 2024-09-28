import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function UncontrolledExample() {

  return (
    <>
    <div className='carousels'>
      <div className='p-5'>
        <Carousel>
          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif"
              }}
            >
              <Carousel.Caption>
                <h3>"I had a wonderful time working with Kartik his flexibility,<br></br>knowledge of human behavior and UX design are <br></br>remarkable and an asset for any client"</h3>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif"
              }}
            >
              <Carousel.Caption>
                <h3>Second Slider Text Title</h3>
                <p>Second slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                height: "40vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "serif"
              }}
            >
              <Carousel.Caption>
                <h3>Third Slider Text Title</h3>
                <p>Third slide description.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
    </>
  );
}

export default UncontrolledExample;
