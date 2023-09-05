import React from 'react'

const NewsItem = (props)=> {
 
 
 
    //this line will extract title and desc from props
    let {title,description,imageurl,newsurl,publishedAtP,authorP,sourceP} = props;
    return (
     <>

     <div className = "my-3">
        <div className="card"  >
  <img src={imageurl} style={{height: "300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... <br></br><span className="badge rounded-pill text-bg-success">{sourceP}</span></h5>
    
    <p className="card-text">{description}...</p>
   
    <a href={newsurl}  className="btn btn-sm btn-danger">READ MORE.</a>
    <p className="card-text text-success" style={{fontweight: 1000}}><small className="text-body-success">Last updated by {authorP?authorP:"UNKNOWN SOURCE"} on {new Date(publishedAtP).toGMTString()} ago</small></p>
  </div>
</div>
      </div>
      </>
    )
  
}

export default NewsItem
