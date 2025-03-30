import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters : builder.query({
            query: () => ({
                url:"/academic-semesters",
                method: "GET",
            }),
            transformResponse:(res)=>{
                return {
                    data: res.data,
                    meta: res.meta
                }
            }
        }),

        createSemester : builder.mutation({
            query: (data) => ({
                url:"/academic-semesters/create-academic-semester",
                method: "POST",
                body: data,
            }),
        }),
    }),
})


export const {useGetAllSemestersQuery, useCreateSemesterMutation} = academicManagementApi