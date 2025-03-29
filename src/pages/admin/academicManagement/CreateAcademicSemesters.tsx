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
import { selectCurrentToken } from "../../../redux/features/auth/authSlice";

const CreateAcademicSemesters = () => {

  const [addAcademicSemester] = useCreateSemesterMutation();

  const token = useAppSelector(selectCurrentToken);
  console.log(token)



  const onSubmit : SubmitHandler<FieldValues> = async(data) => {

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
      const res = await addAcademicSemester(semesterData);
      console.log("res: ",res)
     }
     catch(err){
      console.log(err)
      toast("Somethis went wrong!")
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