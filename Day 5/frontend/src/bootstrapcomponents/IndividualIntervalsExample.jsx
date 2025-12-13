import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSza9iiRn_KgaMCC6EsGv4KwyuESdga9RI3Og&s" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDtofeCOlQ1L796f629YtJlJ1klY6dZsFyA&s" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjfUTO8E7MO6Y3L3BF7sGmKAX9mH0J81YJA&s" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;