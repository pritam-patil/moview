import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Divider, Icon, Image, Placeholder, Grid } from 'semantic-ui-react';

export default ({key}) => {
  return (
    <Card key={key}>   
                <Placeholder>
                  <Placeholder.Image square style={{width: '300px', height: 'auto'}} />
                </Placeholder>
              <Card.Content>
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="full" />
                      <Placeholder.Line length="full" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Paragraph>
                  </Placeholder>
              </Card.Content>
              <Card.Content extra>    
                <Grid columns={3} divided style={{display: 'flex', alignItems: 'center'}}>
                    <Grid.Row>
                        <Grid.Column>
                        <Placeholder>
                            <Placeholder.Line length="short" />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                        <Placeholder>
                            <Placeholder.Line length="short" />
                            </Placeholder>
                        </Grid.Column>
                        <Grid.Column>
                        <Placeholder>
                            <Placeholder.Line length="short" /> 
                            </Placeholder>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>  
              </Card.Content>
            </Card>
  )
}

