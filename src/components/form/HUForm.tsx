import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface HUFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultFormValues?: Record<string, any>,
  resolver?: any

}

type TFormConfig = {
  defaultValues ?: Record<string, any>
  resolver?: any
}

const HUForm = ({ onSubmit, children, defaultFormValues, resolver }: HUFormProps) => {

  const formConfig : TFormConfig = {}

  if(defaultFormValues){
    formConfig['defaultValues'] = defaultFormValues;
  }
  if(resolver){
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  return <FormProvider {...methods}>
            <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
          </FormProvider>;
};

export default HUForm;