import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContact } from '../allApis';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { UpdateContact } from '../allApis';
import { toast } from 'react-toastify';


function ContactCard({ data, response,response2 }) {

  const dragHandler=(e)=>{
console.log(e);
console.log(data);

e.dataTransfer.setData('contact',JSON.stringify(data))


  }

  const delContact = async () => {
    const result = await deleteContact(contactDetails?.id)
    console.log(result);
    response(result)
    if(result.status==200)
    {
      toast.success("Contact deleted succesfully")
    }
  }


  const [contactDetails, setContactDetails] = useState(data)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = async () => {
    const res = await UpdateContact(contactDetails.id, contactDetails)
    if (res.status == 200) {
      toast.success("Contact updated successfully")
      response2(res)
      handleClose()
    }
  }


  return (
    <>
      <Card className='rounded-4 py-4 mb-2 '  onDragStart={(e)=>{dragHandler(e)}} draggable>
        <i className="fa-solid fa-address-book text-center fs-1 mt-3 text-primary" />
        <Card.Body>
          <Card.Title className='text-primary text-center fs-4'>{contactDetails?.fname} {contactDetails?.lname}</Card.Title>
          <Card.Text className='my-5 text-center'>
            <h6 className='fs-5'>{contactDetails?.phNo}</h6>
            <h6 className='fs-6'>{contactDetails?.email}</h6>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <button className='btn'  onClick={delContact} ><i className="fa-solid fa-trash"style={{ color: "#ff0000", }} /></button>
            <Button variant="btn" onClick={handleShow}>
              <i className="fa-solid fa-user-pen" style={{ color: "#FFA500", }} />      </Button>                    </div>
        </Card.Body>
      </Card>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="FirstName"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="FirstName" value={contactDetails?.fname} onChange={(e) => { setContactDetails({ ...contactDetails, fname: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="LastName" className="mb-3"
          >
            <Form.Control type="text" placeholder="LastName" value={contactDetails?.lname} onChange={(e) => { setContactDetails({ ...contactDetails, lname: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="phone" className="mb-3"
          >
            <Form.Control type="text" placeholder="phone" value={contactDetails?.phNo} onChange={(e) => { setContactDetails({ ...contactDetails, phNo: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="E-mail" className="mb-3"
          >
            <Form.Control type="text" placeholder="E-mail" value={contactDetails?.email} onChange={(e) => { setContactDetails({ ...contactDetails, email: e.target.value }) }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-primary" onClick={handleEdit}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactCard