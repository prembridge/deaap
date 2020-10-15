import React,{Component} from 'react'
import {Card,CardDeck,CardGroup} from 'react-bootstrap'

export class Employee extends Component {
    constructor(props){
        super(props)
        this.state ={
            items:'',
            isLoaded:false
        }
    }
componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.vomo.org/v1/campaigns";
fetch(proxyurl + url,{
    
        method: 'GET',
        headers:{
          Accept: 'application/json',
                   'Content-Type': 'application/json',
           
               Authorization: "Bearer a42d9cde589f4e6059214bcc1dda58606c0cecb0 " }
})
// .then(res => res.text())          // convert to plain text
//   .then(text => console.log(text))
.then(res => res.json())
.then(json =>{
    console.log("json"+ JSON.stringify(json))
      this.setState({
       isLoaded:true,
       items:json,
})
})
}


render(){
    
   // console.log("data"+JSON.stringify(items))
   
var {isLoaded,items }= this.state;
if (!isLoaded){
    return <div>Loading...</div>
}
    else{
return(
  <div className="mt-5 d-flex justify-content-left">


         <CardDeck>
         <CardGroup>
         {/* <Card border="primary " style={{ width: '20rem' }}> */}
  
           
               
                {items.data.map(item => (<li key ={item.id}>
                  <Card.Img variant="top" src={item.logo_url} />
                <Card.Body>
             <Card.Title>Campaign ID:{item.id}</Card.Title>
           <Card.Text>
               organization Name:{item.organization}
           </Card.Text>
            <Card.Text>
          Campaign Name:{item.campaign_name}
            </Card.Text>
    
           </Card.Body>
                   </li>))};
                   {/* </Card> */}
                   </CardGroup>
            </CardDeck>

           </div>

    
//     <div className="mt-5 d-flex justify-content-left">
    
// <CardDeck>
// <a href={items.data[0].url}>
// <Card border="primary " style={{ width: '20rem' }}>
//   <Card.Img variant="top" src={items.data[0].logo_url} />
//   <Card.Body>
//     <Card.Title>Campaign ID:{items.data[0].id}</Card.Title>
//     <Card.Text>
//     organization Name:{items.data[0].organization}
//     </Card.Text>
//     <Card.Text>
//     Campaign Name:{items.data[0].campaign_name}
//     </Card.Text>
    
//   </Card.Body>
// </Card>
// </a>
// <a href={items.data[1].url}>
// <Card border="primary" style={{ width: '20rem' }}>
//   <Card.Img variant="top" src={items.data[1].logo_url} />
//   <Card.Body>
//     <Card.Title>Campaign ID:{items.data[1].id}</Card.Title>
//     <Card.Text>
//     organization Name:{items.data[1].organization}
//     </Card.Text>
//     <Card.Text>
//     Campaign Name:{items.data[1].campaign_name}
//     </Card.Text>
    
//   </Card.Body>
// </Card>
// </a>
// <a href={items.data[1].url}>
// <Card border="primary" style={{ width: '20rem' }}>
//   <Card.Img variant="top" src={items.data[2].logo_url} />
//   <Card.Body>
//     <Card.Title>Campaign ID:{items.data[2].id}</Card.Title>
//     <Card.Text>
//     organization Name:{items.data[2].organization}
//     </Card.Text>
//     <Card.Text>
//     Campaign Name:{items.data[2].campaign_name}
//     </Card.Text>
    
//   </Card.Body>
// </Card>
// </a>
// </CardDeck>

//  </div>
 )
     }
 }


}

export default Employee;