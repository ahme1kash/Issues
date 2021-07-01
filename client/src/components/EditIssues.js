import React, { useState,useEffect } from 'react'
import {useHistory, useParams} from "react-router-dom"
import {getsingleIssue} from '../Service/api'
import { editIssues } from '../Service/api'
const EditIssues = () => {
    
    const [projectname, setProjectName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    
    
    //Filling the data in the form of editusers
    
    const {id} = useParams()
    const history = useHistory()
    useEffect(()=>{
        loadUserData()
       },[])
    const loadUserData = async()=>{
        const response = await getsingleIssue(id)
        setProjectName(response.data.projectname)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setPriority(response.data.priority)
    }

    //Submitting the data
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (projectname && title && description && priority) {
            // const newEntry = { name, email, phone, username }
            await editIssues(id, { projectname, title, description, priority })
            
            history.push('/allissues')
     
            setProjectName("")
            setTitle("")
            setDescription("")
            setPriority("")

        }
        else {
            alert("Please enter data in all input fields")
        }
    }

    return (
        <>
            <h2 style={{ paddingTop: '1rem' }}>Edit the Issue</h2>
            <div className="sign-up-form" style={{ marginTop: "30px", height: "300px" }}>

                <form method="POST" onSubmit={handleSubmit} autoComplete="off">
                    <input type="projectname" className="input-box" placeholder="Your Project Name"
                        name="projectname" autoComplete="off"
                        value={projectname}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <input type="title" className="input-box" placeholder="Your Title"
                        name="title" autoComplete="off"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="description" className="input-box" placeholder="Your Description"
                        name="username" autoComplete="off"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input type="priority" className="input-box" placeholder="Your Priority"
                        name="priority" autoComplete="off"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <div style={{ color: "black" }}>
                        {/* Not having Account? Click here to <Link style={{color:"blue"}}to='/candidatesignup'>Signup</Link> */}
                    </div>
                </form>
            </div>

        </>

    )
}

export default EditIssues
