import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "./../../axios";
import { convertPlanningDates } from "../../components/Functions";
import { TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const localizer = momentLocalizer(moment);

const TimetableList = () => {
    const [view, setView] = useState("month");
    const [planning, setPlanning] = useState([]);
    const [allClass, setAllClass] = useState([]);
    const [allHalls, setAllHalls] = useState([]);
    const [allTeacher, setAllTeachers] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState("");
    const [selectedHallId, setSelectedHallId] = useState("");
    const [selectedTeacherId, setSelectedTeacherId] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getPlanningData();
    }, [selectedClassId, selectedHallId, selectedTeacherId]);

    const getData = async () => {
        try {
            const response1 = await axios.get("/hall/allHalls");
            const response2 = await axios.get("/teacher/all");
            const response3 = await axios.get("/class");

            setAllHalls(response1.data);
            setAllTeachers(response2.data);
            setAllClass(response3.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getPlanningData = async () => {
        try {
            let response;

            if (selectedTeacherId !== "") {
                response = await axios.get(`/planning/teacher/${selectedTeacherId}`);
            } else if (selectedHallId !== "") {
                response = await axios.get(`/planning/hall/${selectedHallId}`);
            } else if (selectedClassId !== "") {
                response = await axios.get(`/planning/class/${selectedClassId}`);
            } else {
                response = await axios.get("/planning");
            }

            setPlanning(response.data)

        } catch (e) {
            console.log(e);
        }
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    console.log(planning)

    return (
        <div className="mb-5">
            {/* <div className="search-bar">
                <TextField
                    label="Rechercher un emploi de temps"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    variant="outlined"
                    fullWidth
                />
            </div> */}

            <p className="text-3xl text-center mt-4 mb-0 fs-4 text-uppercase fw-bold">
                Emplois de temps Université de Yaounde 1
            </p>
            <p className='text-center text-secondary'>
                Veuillez sélectionner une salles, une classe ou un enseigant afin de voir son emplois de temps
            </p>

            <div className="filter-selects my-4 d-flex justify-content-between">
                <FormControl>
                    <InputLabel id="class-select-label">Classe</InputLabel>
                    <Select
                        labelId="class-select-label"
                        id="class-select"
                        value={selectedClassId}
                        onChange={(event) => {
                            setSelectedTeacherId("");
                            setSelectedHallId("");
                            setSelectedClassId(event.target.value);
                        }}
                        style={{ width: 200 }}
                    >
                        <MenuItem value="">Toutes les classes</MenuItem>
                        {allClass.map((classe) => (
                            <MenuItem key={classe._id} value={classe._id}>
                                {classe.sector} {classe.level}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="hall-select-label">Salle de classe</InputLabel>
                    <Select
                        labelId="hall-select-label"
                        id="hall-select"
                        value={selectedHallId}
                        onChange={(event) => {
                            setSelectedTeacherId("");
                            setSelectedHallId(event.target.value);
                            setSelectedClassId("");
                        }}
                        style={{ width: 200 }}
                    >
                        <MenuItem value="">Toutes les salles</MenuItem>
                        {allHalls.map((hall) => (
                        <MenuItem key={hall._id} value={hall._id}>
                            {hall.name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="teacher-select-label">Professeur</InputLabel>
                    <Select
                        labelId="teacher-select-label"
                        id="teacher-select"
                        value={selectedTeacherId}
                        onChange={(event) => {
                            setSelectedTeacherId(event.target.value);
                            setSelectedHallId("");
                            setSelectedClassId("");
                        }}
                        style={{ width: 250 }}
                    >
                        <MenuItem value="">Tous les professeurs</MenuItem>
                        {allTeacher.map((teacher) => (
                            <MenuItem key={teacher._id} value={teacher._id}>
                                {teacher.name} {teacher.surname}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="calendar-container">
                <Calendar
                    localizer={localizer}
                    events={convertPlanningDates(planning)}
                    startAccessor="start"
                    endAccessor="end"
                    view={view}
                    style={{ height: 400, width: "100%", background: "#fff", borderRadius: 10 }}
                    selectable
                    defaultView="week"
                    onView={handleViewChange}
                />
            </div>
        </div>
    )
}

export default TimetableList


















// import React, { useState, useEffect } from "react"
// import { Calendar, momentLocalizer } from "react-big-calendar"
// import moment from "moment"
// import "react-big-calendar/lib/css/react-big-calendar.css"
// import axios from './../../axios'
// import { convertPlanningDates } from "../../components/Functions"

// const localizer = momentLocalizer(moment)


// const TimetableList = () => {

//     const [view, setView] = useState("month")
//     const [planning, setPlanning] = useState([])
//     const [allClass, setAllClass] = useState([])
//     const [allHalls, setAllHalls] = useState([])
//     const [allTeacher, setAllTeachers] = useState([])
//     const [selectedClassId, setSelectedClassId] = useState('')
//     const [selectedHallId, setSelectedHallId] = useState('')
//     const [selectedTeacherId, setSelectedTeacherId] = useState('')


//     useEffect(() => {
//         getData()
//     }, [])

//     useEffect(() => {
//         getPlanningData()
//     }, [selectedClassId, selectedHallId, selectedTeacherId])

//     const getData = async() => {

//         try {

//             const response1 = await axios.get('/hall/allHalls')
//             const response2 = await axios.get('/teacher/all')
//             const response3 = await axios.get('/class')

//             setAllHalls(response1.data)
//             setAllTeachers(response2.data)
//             setAllClass(response3.data)
            
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const getPlanningData = async() => {

//         try {

//             const response0 = await axios.get(`/planning`)
//             const response1 = await axios.get(`/planning/${selectedClassId}`)
//             const response2 = await axios.get(`/planning/${selectedHallId}`)
//             const response3 = await axios.get(`/planning/${selectedTeacherId}`)

//             setPlanning(response0.data)
            
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const handleViewChange = (newView) => {
//         setView(newView)
//     }

//     return (
//         <div>

//                 <Calendar
//                     localizer={localizer}
//                     events={convertPlanningDates(planning)}
//                     startAccessor="start"
//                     endAccessor="end"
//                     view={view}
//                     style={{ height: 400, width: "100%", background: '#fff', borderRadius: 10 }}
//                     selectable
//                     defaultView="week"
//                     onView={(view) => handleViewChange(view)}
//                 />
            
//         </div>
//     )
// }

// export default TimetableList
