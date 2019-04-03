import React, { Component, Fragment } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { List } from "./";
import './styles.css';

export default class componentName extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
    render() {
      const { activeIndex } = this.state;
  
      return (
        <Accordion className="credits" fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Cast
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <List data={this.props.cast} />
          </Accordion.Content>
  
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name="dropdown" />
            Crew
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <List data={this.props.crew} />
          </Accordion.Content>
        </Accordion>
      )
    }
}

