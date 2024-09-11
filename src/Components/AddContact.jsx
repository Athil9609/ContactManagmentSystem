import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../allApis';
import { toast } from 'react-toastify';

function AddContact ({adding}) {

    const[add,setAdd]=useState({
       fname:'',lname:'', phNo:'',email:''
    })

    

    const handleUpload=async()=>{
        console.log(add);

        const {phNo,email,fname,lname}=add
        if(!phNo||!email||!fname||!lname){
            toast.warning("enter valid inputs")
        }
         else{
             const res= await addContact(add)
             if(res.status==201){
                toast.success("upload successfull")
                setAdd({
                    fname:'',lname:'', phNo:'',email:''

                })
                console.log(res.data);
                handleClose()
                adding(res)
             }
             else{
                toast.error("Upload failed")
             }
         }

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

<button onClick={handleShow} className='btn btn-success mb-5'>Add Contact<i className="fa-regular fa-address-book text-primary ms-2" /></button>



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="FirstName"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="FirstName" onChange={(e)=>{setAdd({...add,fname:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="LastName"         className="mb-3"
      >
        <Form.Control type="text" placeholder="LastName"  onChange={(e)=>{setAdd({...add,lname:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="phone"         className="mb-3"
      >
        <Form.Control type="text" placeholder="phone" onChange={(e)=>{setAdd({...add,phNo:e.target.value})}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="E-mail"         className="mb-3"
      >
        <Form.Control type="text" placeholder="E-mail" onChange={(e)=>{setAdd({...add,email:e.target.value})}} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="outline-success" onClick={handleUpload}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddContact