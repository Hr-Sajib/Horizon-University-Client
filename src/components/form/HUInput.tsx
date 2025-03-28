import { Input } from "antd";
import { Controller, Control, useFormContext } from "react-hook-form";

interface HUInputProps {
  type: string;
  name: string;
  label?: string;
  control: Control; // Required for Controller
  placeholder:string;
}

const HUInput = ({ type, name, label}) => {

  const {register} = useFormContext();
  

  return <div>
          {
            label && <label htmlFor={name}>{label}</label>
          }
            <Input type={type} id={name} {...register(`${name}`)}/>
          </div>

};

export default HUInput;



