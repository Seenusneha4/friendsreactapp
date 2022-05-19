import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Header from './Header'

const Viewfriend = () => {
    var friendlist=[{"_id":"628613a5fb68dd10d6f53366","name":"RAHUL","friendName":"RAMESH","friendNickName":"RAMU","DescribeYourFriend":"Test description","__v":0},{"_id":"62863eb472b33daf7a22b7d5","name":"hhjs","friendName":"sjhq","friendNickName":"wdhd","__v":0}]
  return (
    <div>
     <Header/>

     <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-success">
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
</table>
            </div>
            
        </div>
    </div>
</div>


    </div>
  )
}

export default Viewfriend