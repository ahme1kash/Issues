import { TableBody, TableCell, TableHead, TableRow, Table, withStyles, makeStyles, Button, ButtonGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getIssues, deleteIssues } from '../Service/api'
import { Link } from 'react-router-dom'

// import issue from '../../model/issueSchema'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
   
      color: theme.palette.common.white,
     
    //   marginTop: "14%",
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: theme.palette.action.selected,
      },
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
        
      },
    },
  }))(TableRow);

const useStyle = makeStyles({
    table: {
        // marginTop: "1.5%",
        // marginLeft: "4.4%",
        // marginRight: "3.5%",
        // fontSize: 12,
        // width: "90%"
    },

    tcontent: {
        fontSize: 14,
        // align: "center"
        // marginLeft: "4.4%",
    },
    thead: {
        // '& > *': {
        //     backgroundColor: "#000000",
        //     color: "#ffffff",
            fontSize: 14,
        align: "center",
        // marginTop: "14%",
        //     // marginLeft:"50px"
        // }

    },

    row: {

        // // '& >*': {
        // //     fontSize: 14,
        // //     color: "#ffffff",

        // // }
        // fontSize: 14,
        //     color: "#ffffff",


    },




})

const AllIssues = () => {

    const [issues, setIssues] = useState([])
    const classes = useStyle()

    const getAllIssues = async () => {
        const response = await getIssues()
        // console.log(response.data)
        setIssues(response.data)

    }

    useEffect(() => {
        getAllIssues()
    }, [])

    const deleteIssueData = async (id) => {
        await deleteIssues(id)
        getAllIssues()
    }
    return (<div style={{margin: '1.5em'}}>
        <Table  className={classes.table} style={{}} aria-label="customized table">

            <TableHead className={classes.thead} >
                <TableRow className={classes.row} >
                    {/* <TableCell>ID</TableCell> */}
                    <StyledTableCell align="center">PROJECT NAME</StyledTableCell>
                    <StyledTableCell align="center">TITLE</StyledTableCell>
                    <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
                    <StyledTableCell align="center"> PRIORITY</StyledTableCell>
                    <StyledTableCell align="center">Created At</StyledTableCell>
                    <StyledTableCell align="center">Updated At</StyledTableCell>
                    <StyledTableCell align="center">ACTION</StyledTableCell>



                </TableRow>
            </TableHead >

            <TableBody  >
                {
                    issues.map(issue => (
                        <StyledTableRow key={issue._id}>
                            {/* <TableCell className = {classes.tcontent}>{user._id}</TableCell> */}
                            <StyledTableCell className={classes.tcontent}>{issue.projectname}</StyledTableCell>
                            <StyledTableCell className={classes.tcontent}>{issue.title}</StyledTableCell>
                            <StyledTableCell className={classes.tcontent}>{issue.description}</StyledTableCell>
                            <StyledTableCell align="center" className={classes.tcontent}>{issue.priority}</StyledTableCell>
                            <StyledTableCell className={classes.tcontent}>{issue.added}</StyledTableCell>
                            <StyledTableCell className={classes.tcontent}>{issue.lastupdated}</StyledTableCell>
                            <StyledTableCell align="center">
                                <ButtonGroup>
                                <Button style={{ color: "#1C8D73" }} component={Link} to={`/editissues/${issue._id}`}> <i class="far fa-edit"></i></Button>
                                <Button onClick={() => {
                                    const confirmBox = window.confirm(
                                        "Do you really want to delete this issue?"
                                      )
                                      if (confirmBox === true) {
                                        deleteIssueData(issue._id)
                                    
                                      }
                                }} 
                                    style={{ color: "#B4161B" }}><i class="far fa-trash-alt"></i></Button>
                                </ButtonGroup>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))
                }
            </TableBody>

        </Table>

    </div>
    )
}


export default AllIssues
