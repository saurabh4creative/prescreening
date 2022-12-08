import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container'; 
import VerticalSpace from '../_common/VerticalSpace';
import LogoBox from '../_common/LogoBox';

const Benefits = () => {
  return (
       <Page testId="benefits-section">
            <Container>
                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={12}>
                              <div className='web-title text-center'>
                                    <h3 className='h6'>Benefits</h3>
                                    <p>It is Built-in with best practices, standards, and features to inherent to the screening process and reduce time, <br/>efforts and errors consistently</p>
                              </div>
                       </GridColumn> 
                  </Grid>

                  <VerticalSpace />

                  <Grid layout="fluid" spacing="cosy">
                       <GridColumn medium={4}>
                            <LogoBox>
                                  <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-5.2c4dcfbd.svg' alt='' />
                                  <h4>Quick Scan</h4>
                                  <p>Ensures Real time and Batch Processing quick scan</p>
                            </LogoBox>  
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-4.b8fb0ced.svg' alt='' />
                                   <h4>Due Diligence</h4>
                                   <p>Focused inputs, news, analysis and information which may be critical for teams and due diligence operations on client and partners</p>
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-3.d36c0d21.svg' alt='' />
                                   <h4>Monitoring</h4>
                                   <p>Monitoring capabilities for onboarded or watchlist customers</p> 
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                  <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-2.d82b7451.svg' alt='' />
                                  <h4>Checks</h4>
                                  <p>Multiple checks i.e. sanctions, PEP, Adverse Media Coverage, AML Penalties and provision to integrate more</p>
                            </LogoBox>  
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon-1.d1f7514b.svg' alt='' />
                                   <h4>Compliance & Risk Teams</h4>
                                   <p>Managing teams, resources, training, standards and ensuring alignment with best practices/information on an ongoing basis</p>
                            </LogoBox> 
                       </GridColumn> 
                       <GridColumn medium={4}>
                            <LogoBox>
                                   <img src='https://www.prescreening.io/static/media/Base%20feature%20icon.8fc8aa2e.svg' alt='' />
                                   <h4>Alerts</h4>
                                   <p>24*7 alert disambiguation-as-a-service</p> 
                            </LogoBox> 
                       </GridColumn> 
                  </Grid>
            </Container>    
       </Page>
  )
}

export default Benefits