import React from "react";
import "./TopicAccordion.css";
import Accordion from "react-bootstrap/Accordion";
import Button from '../../Form/Button/Button'
export default function TopicAccordion({ eventKey, title, body }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        <div className='d-flex align-items-center'>
          <span className='introduction__accordion-count'>1</span>
          <i className='fab fa-youtube introduction__accordion-icon'></i>
          <Button href='#' className='introduction__accordion-link'>
            {body}
          </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
