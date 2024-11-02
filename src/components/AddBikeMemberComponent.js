import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BikeMemberService from '../services/BikeMemberService'

const AddBikeMemberComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [emailId,setEmailId]=useState('')
    const navigate=useNavigate();
    const {id} = useParams();

    const saveOrUpdateBikeMember=(e)=>{
        e.preventDefault();
        const bikemember={firstName,lastName,emailId}
        //console.log(bikemember)
        if(id){
            BikeMemberService.updateBikeMember(id,bikemember).then((response)=>{
                console.log(response.data)
                // useHistory.push('/employees')
                navigate('/bikemembers');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            BikeMemberService.createBikeMember(bikemember).then((response)=>{
                console.log(response.data)
                // useHistory.push('/bikemembers')
                navigate('/bikemembers');
            }).catch(error =>{
                console.log(error);
            })
        }    
    }

    // const saveBikeMember=(e)=>{
    //     e.preventDefault();
    //     const bikemember={firstName,lastName,emailId}
    //     //console.log(bikemember)
    //     BikeMemberService.createBikeMember(bikemember).then((response)=>{
    //         console.log(response.data)
    //         navigate('/bikemembers');
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // }

    useEffect(()=>{
        BikeMemberService.getBikeMemberById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error=>{
            console.log(error);
        })
    },[id])

    const title=()=>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
  return (
    <div>
      {/* <h1>Add BikeMember Component Called</h1> */}
      <br />
      <br />
      <div className="container">
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                {/* <h2 className="text-center">Add BikeMember</h2> */}
                {title()}
                <div className="card-body">
                    <form>
                    <div className="form-group mb-2">
                            <label className='form-label'>First Name</label>
                            <input type="text"
                            placeholder='Enter first name'
                            name='firstName'
                            className='form-control'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Last Name</label>
                            <input type="text"
                            placeholder='Enter last name'
                            name='lastName'
                            className='form-control'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Email Id</label>
                            <input type="text"
                            placeholder='Enter email id'
                            name='emailId'
                            className='form-control'
                            value={emailId}
                            onChange={(e)=>setEmailId(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success"
                        onClick={(e)=>saveOrUpdateBikeMember(e)}>Submit</button>
                        <Link to='/bikemembers' className='btn btn-secondary'
                        style={{marginLeft:'5px'}}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default AddBikeMemberComponent
