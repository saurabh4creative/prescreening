import React from 'react'

const LogoBox = (props) => {
     return (
            <div className='box-single'>
                  <div className='box-inner'>
                        <div className='text-center'>
                            {props.children}
                        </div>
                  </div>
            </div> 
     )
}

export default LogoBox