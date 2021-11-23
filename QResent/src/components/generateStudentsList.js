import React from 'react';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { compose } from '@mui/system';

const StudentsList = () => {
    const data = localStorage.getItem("STUDENTS_LIST");
const students_list = JSON.parse(data);
    const t = Object.values(students_list);
  // console.log(t);
    let data2 = localStorage.getItem("USER");
    const user = JSON.parse(data2);

    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
};

    return (
<button onClick={() => exportToCSV(t[0], user.courseName + "_" + date)}>Export students grades</button>
    );

}

export default StudentsList;