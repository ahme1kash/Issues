import Issue from '../model/issueSchema.js'
export const getIssues = async (req,res)=>{
    
      try{
          let issue = await Issue.find()
          res.json(issue)

      }
      catch(error){
           res.json({message:error.message})
      }
    }


export const addIssues = async(req,res)=>{
    const issue = req.body
    const newIssue = new Issue(issue)
    try{
      await newIssue.save()
      res.json("Successfully registered")
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}

export const getIssuesById = async(req,res)=>{
    const id = req.params.id

    try{
   const issue = await Issue.findById(id)
   res.json(issue)

    }
    catch(error){
        res.json({message:error.message}) 
    }

}

export const editIssuesById = async(req,res)=>{
    const issue = req.body
    const editIssue = new Issue(issue)
    
    try{
      await Issue.updateOne({_id:req.params.id},editIssue) 
      res.json(editIssue)
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}


export const deleteIssuesById = async(req,res)=>{
    const issue = req.body
    
    try{
      await Issue.deleteOne({_id:req.params.id}) 
      res.json("Issue deleted successfully")
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}
