import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
    const details = [
      {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOpvsNgnk3E2asf3ImdacjdhzMcsSXisMbA&s",
        cardTitle:"CSE",
        cardText:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
       {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWuzOW1FM1QRKymvSyvbw-x6069qOs6oiVA&s",
      cardTitle: "Civil Department",
      cardText:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
     {
      src: "https://media.licdn.com/dms/image/v2/C4E03AQH3Xj2FH3j_9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1623083296744?e=2147483647&v=beta&t=qDll6Wb6FuqHjl1koXNdJ-E10QYSNwgUHS8A_W9I2bY",
      cardTitle: "Mechanical Department",
      cardText:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgXDtpKuz-aUm2CarK5gn_eBpjcobQZYgfQ&s",
      cardTitle: "Medical Department",
      cardText:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },

    ]
  return (
    <Row xs={1} md={2} className="g-4">
      {details.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" height={"350px"}src={card.src} />
            <Card.Body>
              <Card.Title>{card.cardTitle}</Card.Title>
              <Card.Text>
               {card.cardText}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;