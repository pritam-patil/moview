import React from 'react'
import { Button, Header, Image, Label, Segment } from "semantic-ui-react";
import './styles.css';

export default () => {
  return (
    <Segment placeholder raised size="large">
        <Header image>
            <Image className="error-image" size="medium" src="/images/warning.svg" alt="error-occured" />
            <Label> Oops, something went wrong. </Label>
        </Header>    
        <Button primary as='a' href="/"> Home </Button>
    </Segment>
  )
}

