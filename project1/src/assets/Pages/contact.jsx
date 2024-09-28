import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    alert("Your message has been submitted!");
  };

  return (
    <div className ="Contact">
    <div className="container">
      <Form onSubmit={handleSubmit}>
        {/* Name Input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2" aria-label="Name Label">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              required 
              aria-label="Name Input" 
            />
          </Col>
        </Form.Group>

        {/* Email Input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2" aria-label="Email Label">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              type="email" 
              placeholder="Enter your email" 
              required 
              aria-label="Email Input" 
            />
          </Col>
        </Form.Group>

        {/* Message Input */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextMessage">
          <Form.Label column sm="2" aria-label="Message Label">
            Message
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Enter your message" 
              required 
              aria-label="Message Input" 
            />
          </Col>
        </Form.Group>

        {/* Submit Button */}
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="primary">Submit</Button>
          </Col>
        </Form.Group>
      </Form>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3648719419784!2d81.07030757548114!3d26.89191297665968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa9da50cb7%3A0x8f5a1f4d75d0d691!2sShri%20Ramswaroop%20College%20Of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1727167742936!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      {/* Inline Styling */}
      <style jsx>{`
        .map-container {
          margin-top: 20px;
          overflow: hidden;
          border-radius: 10px;
        }
        .container {
          max-width: 800px;
          margin: auto;
        }
      `}</style>
    </div>
    </div>
  );
}

export default ContactPage;
