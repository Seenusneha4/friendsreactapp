import { getValue } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewfriend = () => {
    var [friendlist,setfriendlist]=useState([])
    var [loadstatus,setloadstatus]=useState(true)
    axios.get("https://dummyapifriends.herokuapp.com/view").then((response)=>{
        console.log(response.data)
        setfriendlist(response.data)
        setloadstatus(false)
    })
  return (
    <div>
     <Header/>

     <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<table class="table table-success">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend Name</th>
      <th scope="col">Friend Nickname</th>
      <th scope="col">Describe your friend</th>
    </tr>
  </thead>
  <tbody>
      {friendlist.map((value,key)=>{return<tr>
    
     
      <td>{value.name}</td>
      <td>{value.friendName}</td>
      <td>{value.friendNickName}</td>
      <td>{value.DescribeYourFriend}</td>
    </tr>
    
    })}
  </tbody>
</table> }
            </div>
            
        </div>
    </div>
</div>


    </div>
  )
}

export default Viewfriend