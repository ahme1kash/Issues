import React from 'react'
 import {Link} from 'react-router-dom'
import "../style.css"
 import {AppBar,Toolbar,makeStyles, Button} from '@material-ui/core'
import Logo from '../Images/Logo.jpg'
// #F5FFFA
const useStyle = makeStyles({
    header:{
        background:"#F5FFFA",
        height:"50px"
    },

    tabs:{
        color:"#483D8B",
        textDecoration:"none",
        fontSize:12,
        
    },
    

})


const Navbar = () => {
     const classes = useStyle()
    return (
        <div className={classes.root}>
        <AppBar position="static"  style={{ background: "#6AC47E" ,height:"0px"}}>
        <Toolbar>
            <div style = {{marginRight:"952px", display:"flex"}}>
            <img component={Link} to="/home"style ={{width:"190%",height:"55px",marginTop:"-60px",marginRight:"-12px"}}src={Logo} alt={"Logo"}/>
            <Button  style={{ marginTop:"-62px",marginLeft:"30px"}} component={Link} to="/">Home</Button>
           
            {/* <Button style={{ marginTop:"-62px",marginLeft:"30px"}} component={Link} to="/contact">Contacts</Button> */}
            
           
            </div>
            <div style={{display:"flex"}}>
            <Button style={{ marginTop:"-62px",marginLeft:"-200px"}}  component={Link} to="/allissues">All Issues</Button>
            <Button style={{ marginTop:"-62px"}}  component={Link} to="/addissues">Add Issues</Button>  
            </div>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar
