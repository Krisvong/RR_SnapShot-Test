import React from 'react';
import Card from 'react-bootstrap/Card';
import SnackDeveloper from './SnackDeveloper.jpg'

const GitHubCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src={SnackDeveloper} alt="Profile Pic" />
      <Card.Body>
        <Card.Title>Krisvong</Card.Title>
        <Card.Text>
          I am learning how to be a Software Developer,very slowly.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
