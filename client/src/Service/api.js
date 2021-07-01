import axios from 'axios'
const url ='http://localhost:5000' 
// export const getUsers = async(id)=>{
//     id = id || ''
//     return await axios.get(`${url}/${id}`)
// }

export const getIssues = async()=>{
    
    return await axios.get(url)
}

export const getsingleIssue = async(id)=>{
    
    return await axios.get(`${url}/${id}`)
}
export const addIssues = async(newEntry)=>{
    return await axios.post(`${url}/addissues`,newEntry)
}
export const editIssues = async(id,newEntry)=>{
    return await axios.put(`${url}/${id}`,newEntry)
}

export const deleteIssues = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}