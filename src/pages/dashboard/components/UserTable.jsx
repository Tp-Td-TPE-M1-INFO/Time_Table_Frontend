import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "../../../axios";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { ToastContainer, toast } from "react-toastify";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DoneIcon from "@mui/icons-material/Done";
import ContainerC from "../../../components/Container";
import UpdateStudentForm from "./UpdateStudentForm";

const columns = [
  { id: "name", label: "Matricule", minWidth: 170 },
  { id: "code", label: "Nom", minWidth: 170 },
  {
    id: "population",
    label: "Prénom",
    minWidth: 170,

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Email",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "classe",
    label: "Classe",
    minWidth: 170,
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 100,
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 100,
  },
];

function createData(name, code, population, size, classe) {
  const density = population / size;
  return { name, code, population, size, density, classe };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263, "SIGL"),
  createData("China", "CN", 1403500365, 9596961, "SIGL"),
];

export default function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [isLoading]);

  const generateError = (err) =>
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  const generateSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  const deleteStudent = (d) => {
    axios
      .delete(`/student/delete/${d}`)
      .then((response) => {
        setIsLoading(!isLoading);
        generateSuccess("Deleted Succes");
      })
      .catch((error) => {
        // setIsLoading(false);
        generateError(error);
      });
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getData = async () => {
    try {
      const response = await axios.get("/student/all");
      setStudents(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log('Les data de student sont : ',students)

  return (
    <Paper sx={{ width: "98%", overflow: "hidden" }}>
      <ToastContainer />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#00009c",
                    color: "#fff",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell key={row.id} align={row.align}>
                      {row.registerNumber}
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      {row.name}
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      {row.surname}
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      {row.email}
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      XXXX
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      <IconButton onClick={() => deleteStudent(row._id)}>
                        <DeleteRoundedIcon
                          sx={{ color: "red", cursor: "pointer" }}
                        />
                      </IconButton>
                    </TableCell>
                    <TableCell key={row.id} align={row.align}>
                      <IconButton>
                        <ContainerC
                          component={
                            <BorderColorIcon
                              sx={{ color: "#00009c", cursor: "pointer" }}
                            />
                          }
                          formToDisplay={
                            <UpdateStudentForm
                              studentInfo={row}
                              setIsLoading={setIsLoading}
                              isLoading={isLoading}
                            />
                          }
                          heading="Update Student"
                        />
                      </IconButton>
                      :
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
