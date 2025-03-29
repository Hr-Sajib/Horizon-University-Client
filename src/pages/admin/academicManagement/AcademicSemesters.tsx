import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement";



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