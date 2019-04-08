import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { List } from "./";
import './styles.css';

export default class Credits extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    isActive(tab, current) {
      return tab === current;
    }
  
    render() {
      const { activeIndex } = this.state;
      const activeCast = this.isActive(0, activeIndex);
      const activeCrew = this.isActive(1, activeIndex);
      const activeIcon = "angle down";
      return (
        <Accordion className="credits" fluid styled>
          <Accordion.Title active={activeCast} index={0} onClick={this.handleClick}>
          <Icon name={activeCast && activeIcon || "angle right"} />
            Cast
          </Accordion.Title>
          <Accordion.Content active={activeCast}>
            <List data={this.props.cast} />
          </Accordion.Content>
  
          <Accordion.Title active={activeCrew} index={1} onClick={this.handleClick}>
            <Icon name={activeCrew && activeIcon || "angle right"} />
            Crew
          </Accordion.Title>
          <Accordion.Content active={activeCrew}>
            <List data={this.props.crew} />
          </Accordion.Content>
        </Accordion>
      )
    }
}

