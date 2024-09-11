import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Contacts from '../Components/Contacts';
import Category from '../Components/Category';
import AddContact from '../Components/AddContact';
import { useState } from 'react';
function Home() {
  
  const [addResponse,setAddResponse]=useState('')

  return (
    <>
      <div className='container-fluid bg-light  p-3' style={{ height: 'max-content' }}>


        <AddContact  adding={setAddResponse}/>

        <Row className='  rounded shadow ' >
          <Col md={9} sm={12} >
            <Contacts  addedResponse={addResponse}/>

          </Col>
          <Col md={3} sm={12}>

            <Category />

          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home