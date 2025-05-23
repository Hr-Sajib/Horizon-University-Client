import { FieldValues, SubmitHandler } from "react-hook-form";
import HUForm from "../../../components/form/HUForm"
import { Button, Col, Flex } from "antd";
import HUSelect from "../../../components/form/HUSelect";
import {zodResolver} from "@hookform/resolvers/zod"
import { monthOptions, nameOptions, yearOptions } from "./academic.constants";
import { createAcdemicSemesterValidationSchema } from "../../../schemas/createAcdemicSemesterValidationSchema";
import { useCreateSemesterMutation } from "../../../redux/features/admin/academicManagement";
import { toast } from "sonner";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentToken, selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { TResponse } from "../../../types/global";

const CreateAcademicSemesters = () => {

  const [addAcademicSemester] = useCreateSemesterMutation();


  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast("Creating...")
    const name = nameOptions[Number(data?.name)-1]?.label

    const semesterData = {
      name: name,
      code: data.name ,
      year:  data.year ,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    }

     console.log(semesterData)

     try{
      const res = await addAcademicSemester(semesterData) as TResponse;
      // console.log("res: ",res)
      if(res.error){
        toast(res?.error?.data?.message, {id:toastId})
      }
      else{
        toast('Semester Created', {id:toastId})
      }
     }
     catch(err){
      console.log(err)
      toast("Somethis went wrong!", {id:toastId})
     }

  } 

 
  return (
    <div>
      <div>
        <h1>Create Academic Semester</h1>
      </div>
      <Flex justify="center">
        <Col span={6}>
          <HUForm onSubmit={onSubmit} resolver={zodResolver(createAcdemicSemesterValidationSchema)}>
            <HUSelect label="Semester Name" name="name" options={nameOptions}/>
            <HUSelect label="Year" name="year" options={yearOptions}/>
            <HUSelect label="Start Month" name="startMonth" options={monthOptions}/>
            <HUSelect label="End Month" name="endMonth" options={monthOptions}/>

          
            <Button htmlType="submit">Save</Button>
          </HUForm>
        </Col>
      </Flex>
    </div>
  );
};
 
export default CreateAcademicSemesters;