import { FieldValues, SubmitHandler } from "react-hook-form";
import HUForm from "../../../components/form/HUForm"
import { Button, Col, Flex } from "antd";
import HUSelect from "../../../components/form/HUSelect";
import {zodResolver} from "@hookform/resolvers/zod"
import { monthOptions, nameOptions, yearOptions } from "./academic.constants";
import { createAcdemicSemesterValidationSchema } from "../../../schemas/createAcdemicSemesterValidationSchema";

const CreateAcademicSemesters = () => {


  const onSubmit : SubmitHandler<FieldValues> = (data) => {

    const name = nameOptions[Number(data?.name)-1]?.label

    const semesterData = {
      name: name,
      code: data.name ,
      year:  data.year 
    }

     console.log(semesterData)
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