import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester.ts/academicSemester";


const AcademicSemesters = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data)
    return (
        <div>
            as
        </div>
    );
};

export default AcademicSemesters;