import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container';   

const Footer = () => {
  return (
      <Page testId="book-a-demo">
          <Container spaceY={35} bgColor="#403294">
                <Grid layout="fluid" spacing="cosy">
                    <GridColumn medium={6}>
                            <div className='links white-color'>
                                 <p>
                                      <a href='/#'>Disclaimer</a>
                                      |
                                      <a href='/#'>Privacy Policy</a>
                                      |
                                      <a href='/#'>Terms and Conditions</a>
                                 </p>
                            </div>
                    </GridColumn> 
                    <GridColumn medium={6}>
                            <div className='text-end white-color'>
                                 <p>© Copyright 2022 Prescreening.io</p> 
                            </div>
                    </GridColumn> 
                </Grid> 
          </Container>    
      </Page>
  )
}

export default Footer