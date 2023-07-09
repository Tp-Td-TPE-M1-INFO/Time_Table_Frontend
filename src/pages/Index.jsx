import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import TextField from "@material-ui/core/TextField"
import axios from "../axios"
import AutoComplete from "../components/AutoComplete"
import { convertDateToTimeStamp } from "../components/Functions"
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
        marginTop: 50
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
    const [events, setEvents] = useState([
        {
            title: "Réunion de travail",
            start: moment().toDate(),
            end: moment().add(1, "hour").toDate(),
        },
        {
            title: "Formation",
            start: moment().add(1, "day").toDate(),
            end: moment().add(1, "day").add(2, "hour").toDate(),
        },
    ])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {

        try {

            const response1 = await axios.get('/hall/allHalls')
            const response2 = await axios.get('/teacher/all')
            const response3 = await axios.get('/ue')
            const response4 = await axios.get('/class')

            setHalls(response1.data) // Salles
            setTeachers(response2.data)
            setUes(response3.data)
            setClasses(response4.data)
            
        } catch (e) {
            console.log(e)
        }
    }

    const handleViewChange = (newView) => {
        setView(newView)
    }

    const handleEventDoubleClick = (event) => {
        setOpen(true)
        setTitle(event.title)
        setStart(event.start)
        setEnd(event.end)
        console.log("Event clicked !!")
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault()
        const newEvent = {
            ue,
            classe: clas,
            hall,
            teacher,
            description: title,
            start: convertDateToTimeStamp(start),
            end: convertDateToTimeStamp(end),
        }

        try {

            const response = await axios.post('/course/create', newEvent)

            if(response.status == 200 || response.status == 201){
                setEvents([...events, newEvent])
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
        setTitle(event.title)
        setStart(event.start)
        setEnd(event.end)
    }
    
    const createPlanning = async () => {

        const data = {

        }

        try {
            
            const response = await axios.post('', data) 
            console.log(response.data)

        } catch (e) {
            console.log(e)
        }
    }
    console.log(hall);

    return (
        // <div style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
        <div>
            {/* <Navbar />

            <Banner /> */}

            <AutoComplete 
                icon={<VerifiedUser />}  
                dataList = {
                    classe.map((elt) => elt._id)
                } 
                value = {clas}
                handleChange = {(e) => setClas(e)}
                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                label='Classe'
                placeholder="Selectionnez une classe" 
            />

            <div className={classes.root}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    view={view}
                    style={{ height: 400, width: "100%", background: '#fff', borderRadius: 10 }}
                    //onDoubleClickEvent={handleEventClick}
                    selectable
                    onSelectSlot={handleSlotSelect}
                    defaultView="week"
                    onRangeChange={() => console.log("Range changed")}
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
                            <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    teachers.map((elt) => elt._id)
                                } 
                                value = {teacher}
                                handleChange = {(e) => setTeacher(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Enseignant'
                                placeholder="Selectionnez un enseignant" 
                            />
                            <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    ues.map((elt) => elt._id)
                                } 
                                value = {ue}
                                handleChange = {(e) => setUe(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Unités d`enseignement'
                                placeholder="Selectionnez une UE" 
                            />
                            <AutoComplete 
                                icon={<VerifiedUser />}  
                                dataList = {
                                    halls.map((elt) => elt._id)
                                } 
                                value = {hall}
                                handleChange = {(e) => setHall(e)}
                                style={{ padding: 10, marginBottom: 30, marginRight: 10 }}
                                label='Salles de classe'
                                placeholder="Selectionnez une Salle" 
                            />
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
