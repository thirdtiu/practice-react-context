import React from 'react';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import {SketchPicker} from 'react-color';

const HeaderBgColor = (props) => {
  
  const handleHeaderBgPicker = (c, e) => {
    props.onBgColorchange(c.hex);
  }
  return(
    <Form.Group controlId="formUsername">
        <Form.Label className="mr-2">
          Header Background Color
        </Form.Label>
        <OverlayTrigger
          rootClose
          trigger='click'
          placement='bottom'
          overlay={
            <Popover style={{padding: 0}}>
              <SketchPicker
                onChangeComplete={handleHeaderBgPicker}
                color={props.bgColor}
              />
            </Popover>
          }
          >
          <Button variant="light">
            <span
              className="mr-1"
              style={{
                display: 'inline-block',
                height: '10px',
                width: '10px',
                backgroundColor: props.bgColor,
                border: '1px solid #333'
              }}
            ></span>
            {props.bgColor}
          </Button>
        </OverlayTrigger>
      </Form.Group>
  );
}

export default HeaderBgColor;