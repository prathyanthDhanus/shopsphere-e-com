import { Carousel, CarouselItem } from 'react-bootstrap';

const CarouselComponent = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '400px', // adjust the height to your liking
              objectFit: 'fill',
              borderRadius: '10px', 
            }}
          />
       
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;