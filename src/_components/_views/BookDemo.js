import React from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container';  
import Button from '@atlaskit/button';

const BookDemo = () => {
  return (
       <Page testId="book-a-demo">
            <Container bgColor="#403294">
                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={9}>
                              <div className='web-title white-color'>
                                    <h3 className='h6'>Interested? Book a Free Demo!</h3>
                              </div>
                       </GridColumn>
                       <GridColumn medium={3}>
                              <div className='web-button text-end'>
                                     <Button testId='default-button' appearance="primary">Book a Free Demo</Button>
                              </div>
                       </GridColumn>  
                  </Grid> 
            </Container>    
       </Page>
  )
}

export default BookDemo