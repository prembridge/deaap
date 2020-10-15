import React,{Component} from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
export class Users extends Component {

    constructor(props){
        super(props)
        this.state ={
            items:'',
            isLoaded:false
        }
    }

    
async componentDidMount(){
setInterval(() =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 730bd2ab4e0e3be4792411959131029b5b2a90880d7bf9377725");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("fmi/data/v1/databases/DUE/layouts/Main_Users/records?_limit=1", requestOptions)
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
myHeaders.append("Authorization", "Bearer 41df77a84a827636d945d3e93e780cac5872d43a7acc35228125");
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};
fetch("fmi/data/v1/databases/DUE/layouts/Main_Users/records?_limit=20000", requestOptions)
.then(response => response.json())
.then(json =>{
//console.log("json"+ JSON.stringify(json))
  this.setState({
   isLoaded:true,
   items:json,
})
})



}
    render(){
      var {isLoaded,items }= this.state;
console.log("iteam having respones"+ JSON.stringify(items))
      if (!isLoaded){
          return <div>Loading...</div>
      }
          else{
        return(

          <div className="mt-5 d-flex justify-content-left">
                  
          <Card style={styles.card}>
          {/* <Card border="primary " style={{ width: '20rem' }}> */}
   
              {items.response.data.map(item => (<li key ={item.fieldData.data_id}>
                  
                 
                 <Typography >User ID:{item.fieldData.id}</Typography>
                 <Typography>
            User Name:{item.fieldData.full_name}
            </Typography>
            <Typography>
           User Email:{item.fieldData.email}
           </Typography>
           <Typography>
             User status :{item.fieldData.user_status}
           </Typography>
           <Typography>
             Name of the Organization :{item.fieldData.org_eng}
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