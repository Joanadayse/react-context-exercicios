import { useContext } from "react";
import Card from "../components/Cards";
import { GlobalContext } from "../contexts/GlobalContext";

export default function HomePage(){
 const context = useContext(GlobalContext);
 const {users}= context;


  return(
    <>
    {users.map((user)=>{
        return <Card key={user.id}  user={user}/>
    })}
    </>
  )
}