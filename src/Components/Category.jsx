import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../allApis';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Category() {


  const [category,setCategory]=useState({
    title:"",Contact:[]
  })

console.log(category);


  const handleCategory=async()=>{

    const{title}=category

    if(!title){
      toast.warning("Enter valid input!")
    }
    else{
      const res= await addCategory(category)
      console.log(res);
      if(res.status==201){
        handleClose()
        setCategory({
          title:"",Contact:[]
        })
      }
    }
  }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

<div className='d-flex justify-content-between mt-5 mt-md-0'>
    <h4 className='text-primary'>Categories</h4>
    <i onClick={handleShow} className="fa-solid fa-plus text-primary" style={{marginTop:'11px',cursor:'pointer'}} />
</div>




<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       {/* <FloatingLabel
        controlId="floatingInput"
        label="Category Id"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>{setCategory({...category,id:e.target.value})}} placeholder="Category name" />
      </FloatingLabel> */}
       <FloatingLabel
        controlId="floatingInput"
        label="Category name"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>{setCategory({...category,title:e.target.value})}} placeholder="Category name" />
      </FloatingLabel>
   
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <Categorylist response3={category}/>
    </>
  )
}

export default Category