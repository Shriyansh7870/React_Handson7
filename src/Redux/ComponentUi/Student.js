import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink, useNavigate } from "react-router-dom";
const Student = () => {
  const data = useSelector((state) => state.Stu_Data);
  const Navi = useNavigate();

  console.log(data);
  return (
    <>
      <h1 className="Stname">This is Student Page</h1>
      <button className="btn1" onClick={() => Navi("/newStudent")}>
        Add New Student
      </button>
      <table className="table" border="2px">
        <thead>
          <tr>
            <th>name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.batch}</td>
                <td>{item.course}</td>
                <td>
                  {" "}
                  <NavLink to="/editStudent" state={{ index }}>
                    Link Text
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Student;
