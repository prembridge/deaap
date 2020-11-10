import React,{Component} from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
export class Home extends Component {

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
  fetch("fmi/data/v1/databases/DUE/layouts/Main_Projects/records?_limit=1", requestOptions)
  .then(res => res.json())
  .then(json =>{
  console.log("json"+ JSON.stringify(json))
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
fetch("fmi/data/v1/databases/DUE/layouts/Main_Projects/records?_limit=20000", requestOptions)
.then(response => response.json())
.then(json =>{
console.log("json"+ JSON.stringify(json))
  this.setState({
   isLoaded:true,
   items:json,
})
})



}
    render(){
      var {isLoaded,items }= this.state;
console.log("iteam having respones...."+ JSON.stringify(items))
      if (!isLoaded){
          return <div>Loading...</div>
      }
          else{
        return(

          <div className="mt-5 d-flex justify-content-left">
                  
          <Card style={styles.card}>
          {/* <Card border="primary " style={{ width: '20rem' }}> */}
   
              {items.response.data.map(item => (<li key ={item.fieldData.data_id}>
                   <CardMedia style={styles.media} 
                   image= {item.fieldData.Image_link_picture} />
                 
                 <Typography >Project ID:{item.fieldData.data_Id_}</Typography>
                 <Typography>
            ProjectName:{item.fieldData.Project_Name}
            </Typography>
            <Typography>
           Project Description:{item.fieldData.data_description}
           </Typography>
           <Typography>
             Organization :{item.fieldData.data_organization}
           </Typography>
     
           
                    </li>))};
                    {/* </Card> */}
                   
                    </Card>
 
            {/* <h4>{items.response.data[0].fieldData.data_id}</h4> 
            <h4>mission_statement:{items.response.data[0].fieldData.data_mission_statement}</h4> 
            <img src={items.response.data[0].fieldData.logo_urls_l} ></img> */}
            </div>
 
         )
               }
        }
 
 }
 const styles = 
 {
 card: {
   maxWidth: 700,
   margin: "auto",
   transition: "0.3s",
   boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
   "&:hover": {
     boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
   }
 },
 media: {
   paddingTop: "56.25%"
 },
 
   };