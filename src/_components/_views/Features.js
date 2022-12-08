import React from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container'; 
import VerticalSpace from '../_common/VerticalSpace';
import LogoBox from '../_common/LogoBox';

const Features = () => {
  return (
       <Page testId="feature-section">
            <Container>
                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={12}>
                              <div className='web-title text-center'>
                                    <h3 className='h6'>Features</h3>
                                    <p>PreScreening.io is SaaS enterprise platform designed to highlight third party AML and other business risks via quick <br />scan to deliver best-in-class Turn around time and case outcomes.</p>
                              </div>
                       </GridColumn> 
                  </Grid>

                  <VerticalSpace />

                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={4}>
                            <LogoBox>
                                  <img src='https://www.prescreening.io/static/media/Base%20feature%20icon.8fc8aa2e.svg' alt='' />
                                  <h4>AI & ML Powered</h4>
                                  <p>ML driven real time global news checks</p>
                            </LogoBox>  
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-1.d1f7514b.svg' alt='' />
                                   <h4>Dynamic Workflow</h4>
                                   <p>Ensures dynamic workflow across the teams</p>
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-2.d82b7451.svg' alt='' />
                                   <h4>Flexibility</h4>
                                   <p>Flexible as per the requirements of the user. User can carry out different checks with different scoring criteria</p> 
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                  <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-3.d36c0d21.svg' alt='' />
                                  <h4>Highly Scalable</h4>
                                  <p>Highly scalable platform which can be easily expanded/ upgraded on demand</p>
                            </LogoBox>  
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-4.b8fb0ced.svg' alt='' />
                                   <h4>Easy Integration</h4>
                                   <p>Ensures easy API Integrations .</p>
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-5.2c4dcfbd.svg' alt='' />
                                   <h4>User Friendly</h4>
                                   <p>Platform with a user friendly interface</p> 
                            </LogoBox> 
                       </GridColumn> 
                  </Grid>
            </Container>    
       </Page>
  )
}

export default Features