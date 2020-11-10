import React,{Component} from 'react'
import {Card,CardDeck,CardGroup} from 'react-bootstrap'

export class Employee extends Component {
    constructor(props){
        super(props)
        this.state ={
            items:'',
            isLoaded:false,
            currentMoviesArray:[],
        }
    }
    async componentDidMount(){
   var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"username":"prem.kumar@geneza.in","password":"Premkumar777"});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };console.log("my header..1"+ JSON.stringify(requestOptions))
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://ancient-oasis-01562.herokuapp.com/users"; 
    await fetch(proxyurl+url, requestOptions)
    .then (resp => resp.json())
    .then(result => {
      var resdata =  result.tokens.idToken;
      this.setState({currentMoviesArray:resdata})
      //currentMoviesArray.push(resdata)
     // console.log(resdata +"data output");
    } 
    )
    .catch(error => console.log('error', error));
    console.log( this.state.currentMoviesArray +"result in state...............")
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Fmid "+this.state.currentMoviesArray);
    var raw = "";
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("/fmi/data/v1/databases/DUE/sessions", requestOptions)
      .then(response => response.json())
      .then(result => {
        var resultdata = result.response.token
        var savetoken =localStorage.setItem("token" ,resultdata)
        var tokenvalue = localStorage.getItem("token")
        console.log("wht is in it"+tokenvalue)
          // console.log (this.setState({ bearertoken:localStorage.getItem("token")}))
          // console.log("this .state"+this.state.bearertoken)
          
        console.log(resultdata+"generating bearer")
       
        
      })
        
      .catch(error => console.log('error', error))
      
      setInterval(() =>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization",  `Bearer ${localStorage.getItem("token")}`);
      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      
      };
      fetch("/fmi/data/v1/databases/DUE/layouts/Main_Campaigns/records?_limit=1", requestOptions)
      .then(res => res.json())
      .then(json =>{
      console.log("json...."+ JSON.stringify(json))
      //   this.setState({
      //    isLoaded:true,
      //    items:json,
      // })
      })
    
     }, 780000);
    
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization",  `Bearer ${localStorage.getItem("token")}`);
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("/fmi/data/v1/databases/DUE/layouts/Main_Campaigns/records?_limit=1", requestOptions)
    .then(response => response.json())
    .then(json =>{
    console.log("json...........fecth"+ JSON.stringify(json))
      this.setState({
       isLoaded:true,
       items:json,
    })
    })
    
    
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = "https://api.vomo.org/v1/campaigns";
// fetch(proxyurl + url,{
    
//         method: 'GET',
//         headers:{
//           Accept: 'application/json',
//                    'Content-Type': 'application/json',
           
//                Authorization: "Bearer a42d9cde589f4e6059214bcc1dda58606c0cecb0 " }
// })
// // .then(res => res.text())          // convert to plain text
// //   .then(text => console.log(text))
// .then(res => res.json())
// .then(json =>{
//     console.log("json"+ JSON.stringify(json))
//       this.setState({
//        isLoaded:true,
//        items:json,
// })
// })
}


render(){
    
   // console.log("data.."+JSON.stringify(items))
   
var {isLoaded,items }= this.state;
console.log("data.."+JSON.stringify(items))
if (!isLoaded){
    return <div>Loading...</div>
}
    else{
return(
  <div className="mt-5 d-flex justify-content-left">


         <CardDeck>
         <CardGroup>
         {/* <Card border="primary " style={{ width: '20rem' }}> */}
  
           
               
                {items.response.data.map(item => (<li key ={item.fieldData.id}>
                  <Card.Img variant="top" src={item.fieldData.logo_url} />
                <Card.Body>
             <Card.Title>Campaign ID:{item.fieldData.id}</Card.Title>
           <Card.Text>
               organization Name:{item.fieldData.organization}
           </Card.Text>
            <Card.Text>
          Campaign Name:{item.fieldData.campaign_name}
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