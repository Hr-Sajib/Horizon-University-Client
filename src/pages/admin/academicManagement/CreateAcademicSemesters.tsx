import { useState } from "react";
import { Input, Select, Button } from "antd";

const { Option } = Select;

const CreateAcademicSemester = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    code: "",
    startMonth: "",
    endMonth: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
    const { name, value } = "target" in e ? e.target : { name: e.name, value: e.value };
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Logs { name, year, code, startMonth, endMonth }
  };

  // Month options
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create Academic Semester</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name">Semester Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Fall"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="year">Year</label>
          <Input
            type="text"
            name="year"
            id="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g., 2023"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="code">Code</label>
          <Input
            type="text"
            name="code"
            id="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="e.g., F23"
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="startMonth">Start Month</label>
          <Select
            id="startMonth"
            value={formData.startMonth || undefined} // Use undefined for placeholder
            onChange={(value) => handleSelectChange(value, "startMonth")}
            style={{ width: "100%" }}
            placeholder="Select Start Month"
          >
            {months.map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </Select>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="endMonth">End Month</label>
          <Select
            id="endMonth"
            value={formData.endMonth || undefined} // Use undefined for placeholder
            onChange={(value) => handleSelectChange(value, "endMonth")}
            style={{ width: "100%" }}
            placeholder="Select End Month"
          >
            {months.map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </Select>
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateAcademicSemester;