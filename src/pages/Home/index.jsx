import { useLocation } from "wouter";
import { useLogin } from "../../hooks"
import { auth } from "../../services";

const Home = () => {
    const { data: userLogged } = useLogin();
    const [ , setLocation] = useLocation();

    if(!userLogged?.success) setLocation("/login");

    return (
        <>
            <h1>{`Logged as ${userLogged?.data}`}</h1>
            <button onClick={auth.logout}>Log out</button>
        </>
        
    )
}

export default Home;