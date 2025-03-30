import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement";
import { selectCurrentToken, selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}



const AcademicSemesters = () => {
    const {data} = useGetAllSemestersQuery(undefined);
      
    //   const token = useAppSelector(selectCurrentToken);
    //   const user = useAppSelector(selectCurrentUser);
      console.log(data)
    //   console.log(user)
    //   console.log(user)


    const tableData = data?.data.map(({_id, name, startMonth, endMonth, year})=>({
        _id,
        name,
        startMonth,
        endMonth,
        year
    }))

  
  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Year',
              value: 'year',
            },
            {
              text: 'Start Month',
              value: 'startMonth',
            },
            {
              text: 'End Month',
              value: 'endMonth',
            },
          ],
        },
      ],
    },
    {
      title: 'Year',
      dataIndex: 'year',
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
  ];




  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
    return (
        <div>
              <Table<DataType> columns={columns} dataSource={tableData} onChange={onChange} />

        </div>
    );
};

export default AcademicSemesters;