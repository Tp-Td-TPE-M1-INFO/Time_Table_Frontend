import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { withStyles } from "@material-ui/core/styles"
import { ToastContainer, toast } from "react-toastify"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import TextField from "@material-ui/core/TextField"
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import axios from "../axios"
import AutoComplete from "../components/AutoComplete"
import { convertDateToTimeStamp, convertPlanningDates } from "../components/Functions"
import cover from '../media/cover.png'
import Navbar from "../components/home/Navbar"
import Banner from "../components/home/Banner"
import { Face2Sharp, VerifiedUser } from "@mui/icons-material"

const localizer = momentLocalizer(moment)

const styles = (theme) => ({
    root: {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        marginTop: 20
    },
    button: {
        margin: theme.spacing(1),
    },
})

const Index = ({ classes }) => {
    const [view, setView] = useState("month")
    const [ues, setUes] = useState([])
    const [classe, setClasses] = useState([])
    const [halls, setHalls] = useState([])
    const [teachers, setTeachers] = useState([])
    const [teacher, setTeacher] = useState("")
    const [ue, setUe] = useState("")
    const [hall, setHall] = useState("")
    const [clas, setClas] = useState("")
    const [planning, setPlanning] = useState([])
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [start, setStart] = useState(moment())
    const [end, setEnd] = useState(moment())
    const [nameOfClass, setNameOfClass] = useState("")

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getSelectedClasse()
    }, [clas])


    const getData = async() => {

        try {

            const response1 = await axios.get('/hall/allHalls')
            const response2 = await axios.get('/teacher/all')
            const response3 = await axios.get('/ue')
            const response4 = await axios.get('/class')
            const response5 = clas != '' ? await axios.get( `/planning/class/${clas}`) : await axios.get( `/planning`)

            setHalls(response1.data) // Salles
            setTeachers(response2.data)
            setUes(response3.data)
            setClasses(response4.data)
            setPlanning(response5.data)
            console.log(response5.data)
            
        } catch (e) {
            console.log(e)
        }
    }

    const handleViewChange = (newView) => {
        setView(newView)
    }

    const handleEventDoubleClick = (event) => {
        setOpen(true)
        setTitle(event.description)
        setStart(event.start)
        setEnd(event.end)
        console.log("Event clicked !!")
    }
    console.log(planning)

    const handleFormSubmit = async(e) => {
        e.preventDefault()

        if(clas == ''){
            setOpen(false)
            return generateError('Veuillez tout d`abord sélectionner une classe ')
        }

        const newEvent = {
            ue,
            classe: clas,
            hall,
            teacher,
            description: title,
            start: convertDateToTimeStamp(start._d),
            end: convertDateToTimeStamp(end._d),
        }

        try {

            const response = await axios.post('/course/create', newEvent)

            if(response.status == 200 || response.status == 201){
                setPlanning([...planning, {
                    ue,
                    clas,
                    hall,
                    teacher,
                    title,
                    start,
                    end
                }])
                setOpen(false)
            }
            
        } catch (e) {
            console.log("Erreur lors de création de planning ", e)
        }

    }

    const handleSlotSelect = (slotInfo) => {
        setOpen(true)
        setTitle("")
        setStart(slotInfo.start)
        setEnd(slotInfo.end)
    }

    const handleEventSelect = (event) => {
        setOpen(true)
        setTitle(event.description)
        setStart(event.start)
        setEnd(event.end)
    }

    const getSelectedClasse = () => {
        const classeItem = classe.find((c) => c._id === clas)
        const classeDescription = classeItem ? ` ${classeItem.sector} ${classeItem.level}` : ''

        setNameOfClass(classeDescription)
    }
    
    const generateError = (err) =>
    toast.error(err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })

    return (
        <div className="pt-2">

            {/* <AutoComplete 
                icon={<VerifiedUser />}  
                dataList = {
                    classe.map((elt) => elt._id)
                } 
                value = {clas}
                handleChange = {(e) => setClas(e)}
                style={{ padding: 10, marginBottom: 5, marginTop: 2, marginRight: 10 }}
                label='Classe'
                placeholder="Selectionnez une classe" 
                
            /> */}
            <div className="my-2">
                <FormControl>
                    <InputLabel id="teacher-select-label">Selectionnez une classe</InputLabel>
                    <Select
                        labelId="class-select-label"
                        id="class-select"
                        value={clas}
                        onChange={(event) => {
                            setClas(event.target.value)
                        }}
                        style={{ minWidth: 500 }}
                    >
                        <MenuItem value="">Classe</MenuItem>
                        {classe.map((classe) => (
                            <MenuItem key={classe._id} value={classe._id}>
                                {classe.sector} {classe.level}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <ToastContainer/>

            <p className="text-3xl text-center mt-4 fs-4 text-uppercase fw-bold">
                Emplois de temps {nameOfClass}
            </p>

            <div className={classes.root}>
                <Calendar
                    localizer={localizer}
                    events={convertPlanningDates(planning)}
                    startAccessor="start"
                    endAccessor="end"
                    view={view}
                    style={{ height: 400, width: "100%", background: '#fff', borderRadius: 10 }}
                    //onDoubleClickEvent={handleEventClick}
                    selectable
                    onSelectSlot={handleSlotSelect}
                    defaultView="week"
                    onSelectEvent={handleEventSelect}
                    onView={(view) => handleViewChange(view)}
                />
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>{title ? "Modifier l'événement" : "Ajouter un événement"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Remplissez les informations ci-dessous :
                        </DialogContentText>
                        <form>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                label="Description"
                                type="text"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mb-4"
                            />
                            {/* <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    teachers.map((elt) => elt._id)
                                } 
                                value = {teacher}
                                handleChange = {(e) => setTeacher(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Enseignant'
                                placeholder="Selectionnez un enseignant" 
                            /> */}
                            <div className="my-2">
                                <FormControl>
                                    <InputLabel id="teacher-select-label">Selectionnez un enseignant</InputLabel>
                                    <Select
                                        labelId="teacher-select-label"
                                        id="teacher-select"
                                        value={teacher}
                                        onChange={(event) => {
                                            setTeacher(event.target.value)
                                        }}
                                        style={{ width: 500 }}
                                    >
                                        <MenuItem value="">Enseignants</MenuItem>
                                        {teachers.map((teacher) => (
                                            <MenuItem key={teacher._id} value={teacher._id}>
                                                {teacher.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            {/* <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    ues.map((elt) => elt._id)
                                } 
                                value = {ue}
                                handleChange = {(e) => setUe(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Unités d`enseignement'
                                placeholder="Selectionnez une UE" 
                            /> */}
                            <div className="my-2">
                                <FormControl>
                                    <InputLabel id="teacher-select-label">Selectionnez une UE</InputLabel>
                                    <Select
                                        labelId="ue-select-label"
                                        id="ue-select"
                                        value={ue}
                                        onChange={(event) => {
                                            setUe(event.target.value)
                                        }}
                                        style={{ minWidth: 500 }}
                                    >
                                        <MenuItem value="">Unités d'enseignement</MenuItem>
                                        {ues.map((ue) => (
                                            <MenuItem key={ue._id} value={ue._id}>
                                                {ue.code}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            {/* <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    halls.map((elt) => elt._id)
                                } 
                                value = {hall}
                                handleChange = {(e) => setHall(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Salles de classe'
                                placeholder="Selectionnez une Salle" 
                            /> */}
                            <div className="my-2">
                                <FormControl>
                                    <InputLabel id="teacher-select-label">Selectionnez une salle</InputLabel>
                                    <Select
                                        labelId="hall-select-label"
                                        id="hall-select"
                                        value={hall}
                                        onChange={(event) => {
                                            setHall(event.target.value)
                                        }}
                                        style={{ minWidth: 500 }}
                                    >
                                        <MenuItem value="">Salle de classe</MenuItem>
                                        {halls.map((hall) => (
                                            <MenuItem key={hall._id} value={hall._id}>
                                                {hall.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <TextField
                                margin="dense"
                                id="start"
                                label="Date de début"
                                type="datetime-local"
                                fullWidth
                                value={moment(start).format("YYYY-MM-DDTHH:mm")}
                                onChange={(e) => setStart(moment(e.target.value))}
                            />
                            <TextField
                                margin="dense"
                                id="end"
                                label="Date de fin"
                                type="datetime-local"
                                fullWidth
                                value={moment(end).format("YYYY-MM-DDTHH:mm")}
                                onChange={(e) => setEnd(moment(e.target.value))}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={handleFormSubmit} color="primary">
                            {title ? "Modifier" : "Ajouter"}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}
  
export default withStyles(styles)(Index)
