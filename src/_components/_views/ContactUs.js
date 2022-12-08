import React from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Container from '../_common/Container';   
import VerticalSpace from '../_common/VerticalSpace';
import TextField from '@atlaskit/textfield';
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button/standard-button';
import TextArea from '@atlaskit/textarea';

const ContactUs = () => {
 
    return (
            <Page testId="ContactUs">
                <Container>
                    <Grid layout="fluid" spacing="cosy">
                        <GridColumn medium={12}>
                                <div className='web-title text-center'>
                                     <h3 className='h6'>Contact Us</h3>
                                     <p>PreScreening.io is SaaS enterprise platform designed to highlight third party AML and other business risks via quick <br/> scan to deliver best-in-class Turn around time and case outcomes.</p>
                                </div>
                        </GridColumn>
                        <GridColumn medium={12}>
                                <VerticalSpace />
                        </GridColumn> 
                        <GridColumn medium={12}>
                                <div className='contact-form'>
                                      <div className='inner-form'>
                                        <Form>
                                             {({ formProps, submitting }) => (
                                                  <form {...formProps}>
                                                       <Grid testId='form-space' layout="fluid" spacing="cosy">
                                                            <GridColumn medium={6}>
                                                                 <Field label="Full Name" name="full-name">
                                                                      {({ fieldProps }) => (
                                                                           <TextField
                                                                                placeholder="Enter your Full Name"
                                                                                {...fieldProps}
                                                                           /> 
                                                                      )}
                                                                 </Field> 
                                                            </GridColumn>
                                                            <GridColumn medium={6}>
                                                                 <Field label="Email Address" name="email">
                                                                      {({ fieldProps }) => (
                                                                           <TextField 
                                                                                placeholder="Enter your Email Address"
                                                                                {...fieldProps}
                                                                           /> 
                                                                      )}
                                                                 </Field>
                                                            </GridColumn>
                                                            <GridColumn medium={12}>
                                                                 <Field label="Subject" name="subject">
                                                                      {({ fieldProps }) => (
                                                                           <TextField 
                                                                                placeholder="Select Subject"
                                                                                {...fieldProps}
                                                                           /> 
                                                                      )}
                                                                 </Field>
                                                            </GridColumn>
                                                            <GridColumn medium={12}>
                                                                <Field label="Message" name="Message">
                                                                      {({ fieldProps }) => (
                                                                            <TextArea
                                                                                placeholder="Type Your Message Here"
                                                                                {...fieldProps}
                                                                            />  
                                                                      )}
                                                                 </Field>
                                                            </GridColumn>
                                                            <GridColumn medium={12}>
                                                                 <VerticalSpace /> 
                                                                 <div className="text-center">
                                                                      <Button testId='primary-button' appearance="primary">Book a Free Demo</Button>
                                                                 </div> 
                                                            </GridColumn>
                                                       </Grid>  
                                                  </form>
                                             )}
                                        </Form> 
                                      </div>
                                </div>
                        </GridColumn> 
                    </Grid> 
                </Container>    
            </Page>
    )
}

export default ContactUs