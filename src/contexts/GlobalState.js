import { useState , useEffect} from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import  Cards from "../components/Cards";



export default function GlobalState (props){

    const [users, setUsers] = useState([])
    
  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist =  () => {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers:{
            Authorization: "dayse-barbosa"
        }
    })

    .then((response)=>{
    //   console.log(response.data)
    setUsers(response.data)
    })
    .catch((error)=>{console.log(error.response)})

  };

const context = {
    users,
}

 return(
    <GlobalContext.Provider value={context} >
 {props.children}
    </GlobalContext.Provider>
 )
 


}