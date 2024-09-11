import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5' style={{ height: '100vh' }}>
        <Row>
          <Col md={12} sm={12} className='mt-5 mb-5'  style={{}}> 
           <div className=' align-items-center d-flex justify-content-center'>
              <div className='w-75'>
                {/* <h3 className='mt-md-5 text-primary ' style={{cursor:'default',textShadow:''}}>          <i className="fa-solid fa-phone text-white"  />
                  Contactly</h3> */}
<div className=' align-items-center d-flex justify-content-center'>
                    <img src='https://contactboss.com/other-assets/images/features/inner_banner_image1.png' className='img-fluid ' alt="" />
  
</div>    
                <p style={{ textAlign: 'justify',cursor:'default' }} className='mt-md-5 mt-sm-2'>
                  Manage your contacts effortlessly with our user-friendly Contact Management System. Easily create, view, update, and delete contacts, ensuring your address book is always up-to-date and organized.
    
                </p>    
                
                <div className='d-grid'> <Link to={'/home'} className='btn btn-primary mt-3'>View Contacts</Link></div>
              </div>
           </div>
             </Col>
         
        </Row>


      </div>
    </>
  )
}

export default Landing