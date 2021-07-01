import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import { addIssues } from '../Service/api'
const AddIssues = () => {
    const [projectname, setProjectName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")


   const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (projectname && title && description && priority) {
        
            await addIssues({ projectname,title, description, priority})
            history.push('./allissues')

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
            <h2 style={{ paddingTop: '1rem' }}>Generate a new Issue</h2>
            <div className="sign-up-form" style={{ marginTop: "30px", height: "300px" }}>

                <form method="POST" onSubmit={handleSubmit} autoComplete="off">
                    <input type="name" className="input-box" placeholder="Enter your project name"
                        name="name" autoComplete="off"
                        value={projectname}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <input type="title" className="input-box" placeholder="Title"
                        name="title" autoComplete="off"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input type="description" className="input-box" placeholder="Your Description"
                        name="description" autoComplete="off"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input type="priority" className="input-box" placeholder="Priority"
                        name="priority" autoComplete="off"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                    <button type="submit" className="">Add Issue</button>
                    <div style={{ color: "black" }}>
                        {/* Not having Account? Click here to <Link style={{color:"blue"}}to='/candidatesignup'>Signup</Link> */}
                    </div>
                </form>
            </div>

        </>

    )
}

export default AddIssues
