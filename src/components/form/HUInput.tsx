
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

interface THUInputProps {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}

const HUInput = ({ type, name, label, placeholder }: THUInputProps) => {
  return (
    <div >
      {/* {label && <label>{label}</label>} */}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input style={{marginTop:"1px"}} size="large" {...field} type={type} placeholder={placeholder} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default HUInput;
 



