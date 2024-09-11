import React from 'react'
import ContactCard from './ContactCard';
import { getContacts } from '../allApis';
import { Row, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Contacts({addedResponse}) {

  const[delResponse,setDelResponse]=useState('')
  const[editResponse,setEditResponse]=useState('')

  useEffect(() => {
    getData()
  }, [delResponse,addedResponse,editResponse])

  const [contact, setContact] = useState([])

  const getData = async () => {
    const res = await getContacts()

    console.log(res);


    if (res.status == 200) {
      setContact(res.data)

    }
    else {
      console.log(res);

    }

  }




  return (
    <>
      <Container >


        <h4 className='text-primary'>All Contacts</h4>

        <div className='mt-5'>


          {
            contact.length > 0 ?

              <Row className=' w-100'>
                {
                  contact.map(item => (
                    <Col lg={3} sm={12} md={6} className='mb-3'>
                      <ContactCard data={item} response={setDelResponse} response2={setEditResponse} />



                    </Col>
                  ))

                }
              </Row>
              :
              <h2>No Contacts Available</h2>
}





        </div>
      </Container>
    </>
  )
}

export default Contacts