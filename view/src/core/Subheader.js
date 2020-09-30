import React from 'react'
let subh='';
const breadcrumb=(breadcrumb,breadcrumbItems)=>{   
//alert();
    subh=breadcrumb.split("/")        
    for(let i=1;i < subh.length ; i++){       
        breadcrumbItems.push(<li key={i} className = "breadcrumb-item active" > { subh[i] } </li>)
    }
       
}
const Subheader = (props) =>{
const breadcrumbItems = []
return(
<div>
 {breadcrumb(props.pathname,breadcrumbItems)}       
             
               
<ul className = "breadcrumb breadcrumb-style ">
            <li className = "breadcrumb-item" >
            <h4 className = "page-title m-b-0" > Home </h4> </li >  
            { breadcrumbItems }               
                   
            </ul>
</div>
    )
}
export default Subheader
