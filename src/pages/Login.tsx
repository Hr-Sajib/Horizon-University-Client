import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCurrentToken, selectCurrentUser, setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import HUForm from "../components/form/HUForm";
import HUInput from "../components/form/HUInput";
import { Button, Row } from "antd";

const Login = () => {
    const navigate = useNavigate();

    const [login, {error}] = useLoginMutation()
    const dispatch = useAppDispatch();
    
    const defaultFormValues = {
      id: 'A-001',
      password: "adminpassword"
    }

    const onSubmit = async(data : FieldValues) => {


        const toastId = toast.loading("Logging in")
        
        try{
            const userInfo = {
                id: data.id,
                password: data.password
            }
            const result = await login(userInfo).unwrap();
            console.log('login req result: ',result)
    
            const decodedUser = verifyToken(result.data.accessToken) as TUser;
            console.log("decodedUser ",decodedUser)
            dispatch(setUser({user:decodedUser, token: result.data.accessToken}))
            toast.success("Logged in", {id:toastId})

            navigate(`/${decodedUser.role}/dashboard`)
        }
        catch(err){
            toast.error("Something went wrong!",{id:toastId})
        }
    }
    const token = useAppSelector(selectCurrentToken);
    const user = useAppSelector(selectCurrentUser);
    console.log(token)
    console.log(user)
 

    return (
        <Row justify="center"align="middle" style={{height:"100vh"}} >
          <HUForm defaultFormValues={defaultFormValues} onSubmit={onSubmit}>
            <div>
                <HUInput type='text' name='id' label='id'/>
            </div>
            <div style={{marginTop:"10px"}}>
                <HUInput type='text' name='password' label='password'/>
            </div>
            <Button htmlType="submit" style={{marginTop:"10px"}}>Login</Button>
          </HUForm>
        </Row>
    );
};
export default Login;