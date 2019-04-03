import React from 'react';
import { Card, Placeholder, Grid } from 'semantic-ui-react';
import './styles.css';

export default ({key}) => {
  return (
    <Card key={key} fluid className="ph-card">
        <Placeholder className="ph-image">
            <Placeholder.Image rectangular />
        </Placeholder>
        <Card.Content style={{width: '100% !important'}}>
            <Placeholder className="ph-details">
                <Placeholder.Header>
                    <Placeholder.Line length="short" />
                </Placeholder.Header>
                <Placeholder className="ph-details">
                    <Placeholder.Line length="full" />
                    <Placeholder.Line length="full" />
                    <Placeholder.Line length="medium" />
                </Placeholder>
            </Placeholder>
        </Card.Content>
        <Card.Content extra>    
        <Grid columns={2} divided style={{display: 'flex', alignItems: 'center'}}>
            <Grid.Row>
                <Grid.Column>
                    <Grid columns={2}>
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
                </Grid.Column>
                <Grid.Column>
                <Placeholder>
                    <Placeholder.Line length="short" />
                    </Placeholder>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid padded doubling columns={6}>
            <Grid.Row>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Line length="medium" />
                    </Placeholder>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid columns={1} fluid>
                    {_.times(2, idx => (
                        <Grid.Column>
                            <Placeholder>
                                <Placeholder.Header>
                                    <Placeholder.Image rectangular />
                                </Placeholder.Header>
                            </Placeholder>
                        </Grid.Column>
                    )
                    )}
                </Grid>
            </Grid.Row>
        </Grid>
        </Card.Content>
    </Card>
  )
}

