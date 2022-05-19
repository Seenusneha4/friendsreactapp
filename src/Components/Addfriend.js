import React, { useState } from 'react'
import Header from './Header'

const Addfriend = () => {
    var [name,setname]=useState("")
    var [friendName,setfriendName]=useState("")
    var [friendNickName,setfriendNickName]=useState("")
    var [DescribeYourFriend,setDescribeYourFriend]=useState("")
    const subdata=()=>{
        const data={"name":name,"friendName":friendName,"friendNickName":friendNickName,"DescribeYourFriend":DescribeYourFriend}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Name</label>
            <input onChange={(d)=>{setname(d.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form-label">Friendname</label>
                 <input onChange={(d)=>{setfriendName(d.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Friend nickname</label>
                <input onChange={(d)=>{setfriendNickName(d.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Describe your friend</label>
                <textarea onChange={(d)=>{setDescribeYourFriend(d.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button onClick={subdata} className="btn btn-success">SUBMIT</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addfriend