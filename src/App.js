
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import "./App.css"
function App(params) {
  const [categories]=useState(["Gaming","Tech","Sports"]);
  const [category,setCategory]=useState();
  const [post,setPost]=useState();
  const [gamingPost,setGamingPost]=useState([]);
  const [techPost,setTechPost]=useState([]);
  const [sportsPost,setSportsPost]=useState([]);


  const handleSubmit=(e)=>{
  
    if (category==="Gaming") {
      
      setGamingPost([...gamingPost,post])
    }
    if (category==="Tech") {
      setTechPost([...techPost,post])
    }
    if (category==="Sports") {
      setSportsPost([...sportsPost,post])
    }
  
    e.preventDefault()
  }

  const form=()=>{
    return(
      <div>
      <label style={{fontWeight:"600"}}>Categories</label>
      <select onChange={(e)=>setCategory(e.target.value)}>
        <option>Select Categories</option>
        {categories.map((cat)=><option>{cat}</option>)}
      </select>
      <br></br>
      <br></br>

      <label style={{fontWeight:"600",position:"relative",top:"-67px"}}>Post</label> 
      <textarea type="text" onChange={(e)=>setPost(e.target.value)} placeholder="Write Your Post Here !!!"></textarea>
      <br/>
      <br/>
      <button className="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
      </div>
    )
  }

  
  const getPost=(cat)=>{
if (cat==="Gaming") {
  return(
    <>
    {gamingPost.map((gp)=><li>
      {gp} 
      <span>
        <button className="deleteButton" onClick={()=>handleDelete(cat,gp)}><FontAwesomeIcon icon={faTrashAlt} />
        </button>
        </span>
        </li>)}
    </>
  )
}
if (cat==="Tech") {
  return(
    <>
    {techPost.map((tp)=><li>
      {tp}
      <span>
        <button className="deleteButton" onClick={()=>handleDelete(cat,tp)}><FontAwesomeIcon icon={faTrashAlt} />
        </button>
        </span>
      </li>)}
    </>
  )
}
if (cat==="Sports") {
  return(
    <>
    {sportsPost.map((gp)=><li>
      {gp}
      <span>
        <button className="deleteButton" onClick={()=>handleDelete(cat,gp)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        </span>
      </li>)}
    </>
  )
}
  }
  const handleDelete=(cat,post)=>{
    if (cat==="Gaming") {
      setGamingPost(gamingPost.filter((deletedPost)=>deletedPost!==post));
    }
    if (cat==="Tech") {
      setTechPost(techPost.filter((deletedPost)=>deletedPost!==post));
    }
    if (cat==="Sports") {
      setSportsPost(sportsPost.filter((deletedPost)=>deletedPost!==post));
    }
  }
  const blogs=()=>{
    return(
      <div>
{categories.map((cat)=>
<div className="container">
  <h2>{cat}</h2>
  <br/>
  <span style={{fontWeight:"600"}}>
    {getPost(cat)}
  </span>
</div>)}
      </div>
    )
  }
  return(
    <div className="mainContainer">
      <br/>

      <div className="container">
      <h1>Blogging Website</h1>
      {form()}
      </div>
      {blogs()}
    </div>
  )
}
export default App;