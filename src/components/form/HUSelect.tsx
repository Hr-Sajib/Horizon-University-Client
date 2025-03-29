import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type THUSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const HUSelect = ({ label, name, options}:THUSelectProps) => {
 

  return (
    <Controller
      name={name}
      render={({field, fieldState:{error}}) => (
        <Form.Item label={label}>
          <Select
            style={{ width: '100%' }}
            {...field}
            size="large"
            options={options}
          />
          {error && <small style={{color:"red"}}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default HUSelect;