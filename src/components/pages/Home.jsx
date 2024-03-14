import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"
import { useEffect } from "react";
function Home(){
    return(
        <>
        <UserSearch />
         <UserResults />  
        </>
    )
}
export default Home