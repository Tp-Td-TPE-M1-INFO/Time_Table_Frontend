import React, { useState } from "react"
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
import cover from '../media/cover.png'
import Navbar from "../components/home/Navbar"
import Banner from "../components/home/Banner"

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

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const newEvent = {
            title,
            start: start,
            end: end,
        }
        setEvents([...events, newEvent])
        setOpen(false)
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

    return (
        // <div style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover' }}>
        <div>
            {/* <Navbar />

            <Banner /> */}

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
                                label="Titre"
                                type="text"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                margin="dense"
                                id="start"
                                label="Début"
                                type="datetime-local"
                                fullWidth
                                value={moment(start).format("YYYY-MM-DDTHH:mm")}
                                onChange={(e) => setStart(moment(e.target.value))}
                            />
                            <TextField
                                margin="dense"
                                id="end"
                                label="Fin"
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
