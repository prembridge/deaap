import React,{Component} from 'react'
//import {Card,CardDeck,CardGroup} from 'react-bootstrap'
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
export class Departments extends Component {
            constructor(props){
                super(props)
                this.state ={
                    items:'',
                    isLoaded:false
                }
            }

            
 async componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer acc896cefeb597ce46d7437138e5b732aeec14029ae3392bd441");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("fmi/data/v1/databases/DUE/layouts/Main_Organization/records?_limit=20000", requestOptions)
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
        //console.log(jsondata+"jsondata")
        var {isLoaded,items }= this.state;
        if (!isLoaded){
            return <div>Loading...</div>
        }
            else{
        return(
            <div className="mt-5 d-flex justify-content-left">
                  
         <Card style={styles.card}>
         {/* <Card border="primary " style={{ width: '20rem' }}> */}
  
             {items.response.data.map(item => (<li key ={item.fieldData.data_id}>
                  <CardMedia style={styles.media} image={item.fieldData.logo_urls_l} />
                
                <Typography >Campaign ID:{item.fieldData.data_id}</Typography>
                <Typography>
           mission_statement:{item.fieldData.data_mission_statement}
           </Typography>
           <Typography>
          Orgination Name:{item.fieldData.data_name}
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