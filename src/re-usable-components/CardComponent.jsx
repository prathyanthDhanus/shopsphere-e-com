import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard({ imageUrl, title, text, buttonText,onClick }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        
        <Button variant="primary" onClick={onClick}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
