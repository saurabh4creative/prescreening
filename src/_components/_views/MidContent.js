import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container';  
import Button from '@atlaskit/button';
import VerticalSpace from '../_common/VerticalSpace';

const MidContent = () => {
  return (
       <Page testId="book-a-demo">
            <Container bgColor="#f9f9f9">
                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={12}>
                              <div className='web-title text-center'>
                                    <h3 className='h6'>Build with our Prescreening Tool!</h3>
                                    <p>We provide Integrable APIs for input and output <br></br>exchange/delivery.</p>
                                    <VerticalSpace spaceT={30}/>
                                    <div className='web-button mt-3 text-center'>
                                         <Button testId='primary-button' appearance="primary">Book a Free Demo</Button> 
                                    </div>
                              </div>
                       </GridColumn> 
                  </Grid> 
            </Container>    
       </Page>
  )
}

export default MidContent