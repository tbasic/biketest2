import React, { useEffect, useState } from 'react'
import BikeMemberService from '../services/BikeMemberService'
import { Link } from 'react-router-dom'

const ListBikeMemberComponent = () => {
    const [bikemembers,setBikemembers]=useState([])
 
    useEffect(()=>{
        getAllBikeMembers()
    },[])

    const getAllBikeMembers=()=>{
        BikeMemberService.getAllBikeMembers().then((response)=>{
          setBikemembers(response.data)
          console.log(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
  
    const deleteBikeMember=(bikememberId)=>{
        //console.log(bikememberId);
        BikeMemberService.deleteBikeMember(bikememberId).then((response)=>{
          getAllBikeMembers()
        }).catch(error=>{
          console.log(error);
        })
      }
  
    return (
    <div className='container'>
        <h2 className="text-center">List BikeMembers</h2>
        <Link to='/add-bikemember' className='btn btn-primary mb-2'>Add BikeMember</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th>BikeMember Id</th>
                <th>BikeMember FirstName</th>
                <th>BikeMember LastName</th>
                <th>BikeMember EmailId</th>
                <th>Mod/Del</th>
            </thead>
            <tbody>
                {
                    bikemembers.map(
                        bikemember=>
                        <tr key={bikemember.id}>
                            <td>{bikemember.id}</td>
                            <td>{bikemember.firstName}</td>
                            <td>{bikemember.lastName}</td>
                            <td>{bikemember.emailId}</td>
                            <td>
                                <Link className='btn btn-light'
                                 to={`/edit-bikemember/${bikemember.id}`}>Mod</Link>
                                 <button className='btn btn-light' onClick={()=>deleteBikeMember(bikemember.id)}
                                style={{marginLeft:'5px'}}
                                >Del</button>

                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default ListBikeMemberComponent
