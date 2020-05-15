import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AboutUser = (props) => {
  return (
      <div style={aboutStyle}>
    <ListGroup>
      <ListGroupItem>Name: {props.name}</ListGroupItem>
      <ListGroupItem>Adress: {props.adress}</ListGroupItem>
      <ListGroupItem>Gender: {props.gender}</ListGroupItem>
      <ListGroupItem>E-mail: {props.mail}</ListGroupItem>
      <ListGroupItem>Weight: {props.weight}<div><FontAwesomeIcon icon={faEdit} /></div></ListGroupItem>
      <ListGroupItem>Length: {props.length}<div><FontAwesomeIcon icon={faEdit} /></div></ListGroupItem>
    </ListGroup>
    </div>
  );

}
const aboutStyle = {
    width: "500px"
}

export default AboutUser;