import { z } from "zod";
import { monthOptions, nameOptions, yearOptions } from "../pages/admin/academicManagement/academic.constants";

  // Extract values for Zod schema
  const nameCodes = nameOptions.map((option) => option.value); // ["01", "02", "03"]
  const years = yearOptions.map((option) => option.value); // ["2025", "2026", ...]
  const months = monthOptions.map((option) => option.value); // ["January", "February", ...]

  export const createAcdemicSemesterValidationSchema = z.object({
    name: z.enum([...nameCodes] as [string, ...string[]], {
      required_error: "Semester code is required",
    }),
    year: z.enum([...years] as [string, ...string[]], {
      required_error: "Year is required",
    }),
    startMonth: z.enum([...months] as [string, ...string[]], {
      required_error: "Start month is required",
    }),
    endMonth: z.enum([...months] as [string, ...string[]], {
      required_error: "End month is required",
    }),
  });