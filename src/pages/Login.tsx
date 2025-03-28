import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import HUForm from "../components/form/HUForm";
import HUInput from "../components/form/HUInput";

const Login = () => {
    const navigate = useNavigate();
    // const {register, handleSubmit} = useForm({
    //     defaultValues:{
    //         id: 'A-001',
    //         password: "adminpassword"
    //     }
    // });


    const [login, {error}] = useLoginMutation()
    const dispatch = useAppDispatch();

    const onSubmit = async(data : FieldValues) => {

      console.log(data)
        // const toastId = toast.loading("Logging in")
        
        // try{
        //     const userInfo = {
        //         id: data.id,
        //         password: data.password
        //     }
        //     const result = await login(userInfo).unwrap();
        //     console.log(result)
    
        //     const decodedUser = verifyToken(result.data.accessToken) as TUser;
        //     console.log("decodedUser ",decodedUser)
        //     dispatch(setUser({user:decodedUser, token: result.data.accessToken}))
        //     toast.success("Logged in", {id:toastId})

        //     navigate(`/${decodedUser.role}/dashboard`)
        // }
        // catch(err){
        //     toast.error("Something went wrong!",{id:toastId})
        // }
    }
 


    return (
        <HUForm onSubmit={onSubmit}>
            <div>
                <HUInput type='text' name='id' label='id'/>
            </div>
            <div>
                <HUInput type='text' name='password' label='password'/>
            </div>
            <input type="submit" value="Login" />
        </HUForm>
    );
};
export default Login;