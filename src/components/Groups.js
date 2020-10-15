import React,{Component} from 'react'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export class Groups extends Component {

    constructor(props){
        super(props)
        this.state ={
            items:'',
            isLoaded:false,
            currentMoviesArray:[]
        }
    }


    
async componentDidMount(){
  //const 
//   var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({"username":"jacob.sushil@geneza.in","password":"Jacob13sushil"});

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://ancient-oasis-01562.herokuapp.com/users"; 
// await fetch(proxyurl+url, requestOptions)
// .then (resp => resp.json())
// .then(result => {
//   var resdata =  result.tokens.idToken;
//   this.setState({currentMoviesArray:resdata})
//   //currentMoviesArray.push(resdata)
//  // console.log(resdata +"data output");
// } 
// )
// //.catch(error => console.log('error', error));
// console.log( this.state.currentMoviesArray +"result in state...............")

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// myHeaders.append("Authorization", "Fmid eyJraWQiOiIya1VScEpvaERlWjJiTGZsXC9CXC9ETjZVVkVMVXZlNUFpRHcwVlFoZ3Q4MFk9IiwiYWxnIjoiUlMyNTYifQ.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNDMxYTA5NjAtZGE0Yy00NWJmLTk3YjYtNzRkNDY1ZGFhYmVhIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX05xa3VaY1hRWSIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImN1c3RvbTpwcml2YWN5IjoiMSIsImNvZ25pdG86dXNlcm5hbWUiOiI0MzFhMDk2MC1kYTRjLTQ1YmYtOTdiNi03NGQ0NjVkYWFiZWEiLCJnaXZlbl9uYW1lIjoiamFjb2IiLCJsb2NhbGUiOiJlbi1VUyIsImF1ZCI6IjRsOXJ2bDRtdjVlczFlZXAxcWU5N2NhdXRuIiwiY3VzdG9tOm1hbmFnZWRieSI6IjU5M2IyN2U1LWQ4NGYtNDk0NS1iOWMzLWZlYzUzMGVjZWZhZCIsImV2ZW50X2lkIjoiZTA3YTMwNjEtMDE3Zi00YjI5LTkzMGYtYTk2Y2U2N2EwZjkzIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDI2NzA0ODQsImV4cCI6MTYwMjY3NDA4NCwiaWF0IjoxNjAyNjcwNDg1LCJmYW1pbHlfbmFtZSI6InN1c2hpbCIsImVtYWlsIjoiamFjb2Iuc3VzaGlsQGdlbmV6YS5pbiJ9.b64TBXl-EanhcBCamMR9MjI0jF9Wlt9fTFQYSgJ-f6OIr3_0dPw2M6mvV89CaP5nDg0lsmAzS2PXXgfZqJIsKYJpsVaGtKPonycO9ybrxB9Fb6KwlzWnirlcuX4SlpRdTfobBgJnFDmp-i8dN_-Pqb1hvn4m1b9oMKXnH_So3LbdX9NbfL78cvyMX04bBU6Detip5fF9J8enDKHfDqBD1kMq-KOOxwa2xh3_nC_Ke0opUsRIXlIoJXfI395sQR18ACK_dCMcuIF-_j7amRGbHE8ej8FhRCpBsMFSkQktrOkouYSJ4ea81XFbuonEECwVuLuP9TfXJlqzGzNsYjJzVQ");
// var raw = "";
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
// fetch("fmi/data/v1/databases/DUE/sessions", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result+"token generation .."))
//   .catch(error => console.log('error', error));


  setInterval(() =>{
    var myHeaders = new Headers();
   
    myHeaders.append("Authorization", "Bearer 3d7a7f07efa45accd3373c6de34ac4de4320968df84e6f67ae44");
    
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("fmi/data/v1/databases/DUE/layouts/Main_Groups/records?_limit=1", requestOptions)
    .then(res => res.json())
    .then(json =>{
   // console.log("json"+ JSON.stringify(json))
    //   this.setState({
    //    isLoaded:true,
    //    items:json,
    // })
    })
  
   }, 780000);






  
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 3d7a7f07efa45accd3373c6de34ac4de4320968df84e6f67ae44");
myHeaders.append('Access-Control-Allow-Origin', '*');
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};
fetch("fmi/data/v1/databases/DUE/layouts/Main_Groups/records?_limit=20000", requestOptions)
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
//console.log("iteam having respones"+ JSON.stringify(items))
      if (!isLoaded){
          return <div>Loading...</div>
      }
          else{
        return(

          <div className="mt-5 d-flex justify-content-left">
                  
          <Card style={styles.card}>
          {/* <Card border="primary " style={{ width: '20rem' }}> */}
   
              {items.response.data.map(item => (<li key ={item.fieldData.data_id}>
                  
                 
                 <Typography >Group ID:{item.fieldData.Group_id}</Typography>
                 <Typography>
            GroupName:{item.fieldData.Group_Name}
            </Typography>
            <Typography>
           Group Description:{item.fieldData.Group_description}
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

   export default Groups;