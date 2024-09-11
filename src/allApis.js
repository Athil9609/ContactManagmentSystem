import axios from "axios";

const base_url="https://cms-server-ojz7.onrender.com"

export const addContact=async(data)=>{
    return await axios.post(`${base_url}/Contact`,data)
}

export const getContacts=async()=>{
    return await axios.get(`${base_url}/contact`)
}

export const deleteContact=async(id)=>{
    return await axios.delete(`${base_url}/contact/${id}`)
}

export const UpdateContact=async(id,data)=>{
    return await axios.put(`${base_url}/contact/${id}`,data)
}

export const addCategory=async(data)=>{
    return await  axios.post(`${base_url}/category`,data)
}

export const getCategory=async()=>{
    return await axios.get(`${base_url}/category`)
}

export const delCategory=async(id)=>{
 return await axios.delete(`${base_url}/category/${id}`)
}

export const updateCategory=async(id,data)=>{
    return await axios.put(`${base_url}/Category/${id}`,data)
}