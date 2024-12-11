import {Link, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {useSignOutAccount} from "@/lib/react-query/queriesAndMutations.ts";
import {useEffect} from "react";
import {useUserContext} from "@/context/AuthContext.tsx";
import {getCurrentUser} from "@/lib/firebase/api.ts";

const Topbar = () => {
    const {mutate: signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const {user} = useUserContext()


    useEffect(() => {
        if(isSuccess) navigate(0);
        }, [isSuccess])

    console.log("User object:", user);


    if (!user) {
        return <div>Loading...</div>;
    }




    return (
        <section className="topbar">

            <div className={"flex-between py-4 px-5"}>

                <Link to={"/"} className={"flex gap-3 items-center"}>
                    <img src="/assets/images/logo.svg" alt="logo"
                         width={130} height={325}/>
                </Link>

                <div className={"flex gap-5"}>
                    <Button variant={"ghost"} className={"shad-button_ghost"} onClick={() => signOut()}>
                    <img src="/assets/icons/logout.svg" alt="logout"/>
                    </Button>

                    <Link to={`/profile/${user.id}`} className={"flex-center gap-3"}>
<img src={user.pfp || "/assets/images/profile-placeholder.svg"}
    alt="profile"
    className={"h-8 w-8 rounded-full"}/>


                    </Link>

                </div>

            </div>

        </section>
    )
}
export default Topbar
