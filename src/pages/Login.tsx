import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
    const {register, handleSubmit} = useForm({
        defaultValues:{
            id: 'A-001',
            password: "adminpassword"
        }
    });

    const [login, {error}] = useLoginMutation()
    const dispatch = useAppDispatch();

    const onSubmit = async(data : {id: string, password: string}) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const result = await login(userInfo).unwrap();
        console.log(result)

        dispatch(setUser({user:{}, token: result.data.accessToken}))
        
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" {...register('id')}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" {...register('password')}/>
            </div>
            <input type="submit" value="Login" />
        </form>
    );
};
export default Login;