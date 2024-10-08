import React from 'react'
import { getCategory,delCategory,updateCategory } from '../allApis'
import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import Card from 'react-bootstrap/Card';

function Categorylist({response3}) {

useEffect(()=>{
getData()
},[response3])

const[category,setcategory]=useState([])

const getData=async()=>{
    const res=await getCategory()
    if(res.status==200){
        setcategory(res.data)
    }
    
}
console.log(category);


const deleteCategory=async(id)=>{
    const result=await delCategory(id)
    console.log(result);
    
    if(result.status==200)
    {
        getData()
        toast.success('Category deleted')
    }
}
const dragOverHandler=(e)=>{
    console.log('dragging');
    e.preventDefault()
    
}

const dropHandler=async(e,category)=>{
    console.log('dropped');
    console.log(e);
    const contact = JSON.parse(e.dataTransfer.getData("contact"))
    category.Contact.push(contact)
    console.log(contact);
    
    
    const result=await updateCategory(category.id,category)
    console.log(result);

    if(result.status==200){
toast.success(`Contact added to ${category.title}`)
getData()
    }
    else{
        toast.error("contact adding failed")
    }
    
    
   

 
}


  return (
    <>
    <div className='container-fluid border border-3 border-light p-2 mt-3'>
    {
        category.length>0 ?
        <div >
            {
            category.map(item=>(
               <div className='border border-2 bg-primary  shadow rounded-4 p-2 mb-2'>
                    <div onDrop={(e)=>{dropHandler(e,item)}} onDragOver={(e)=>{dragOverHandler(e)}} on className=' m-2 p-3 mb-3  justify-content-between d-flex'>
                    <h3 className='mt-3 text-light'>{item.title}</h3>
                    <button onClick={()=>{deleteCategory(item.id)}} className='btn'>
                        <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
                    </button>
               </div>

                    <div className=' p-2 shadow bg-light rounded-4 '>
                        {
                            item?.Contact?.length>0 &&
                            item?.Contact?.map(con=>(
                                <Card  className='rounded-4 py-4 mb-2  '  onDragStart={(e)=>{dragHandler(e)}} draggable>
                                <i className="fa-solid fa-address-book text-center fs-1 mt-3 text-primary" />
                                <Card.Body>
                                  <Card.Title className='text-primary text-center fs-4'>{con?.fname} {con?.lname}</Card.Title>
                                  <Card.Text className='my-5 text-center'>
                                    <h6 className='fs-5'>{con?.phNo}</h6>
                                    <h6 className='fs-6'>{con?.email}</h6>
                                  </Card.Text>
                                 
                                </Card.Body>
                              </Card>
                            ))
                        }
                        </div>
                </div>

            ))
        }
        </div>
        :
        <h2>No Categories</h2>
    }
</div>

    </>
  )

}
export default Categorylist