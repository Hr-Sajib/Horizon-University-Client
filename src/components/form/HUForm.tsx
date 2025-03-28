import { FieldValues, FormProvider, useForm } from "react-hook-form";

interface HUFormProps {
  onSubmit: (data: FieldValues) => void;
  children: React.ReactNode;
}


const HUForm = ({ onSubmit, children }: HUFormProps) => {

  const methods = useForm({defaultValues:{
            // id: 'A-001',
            // password: "adminpassword"
        }});

  return <FormProvider {...methods}><form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form></FormProvider>;
};

export default HUForm;