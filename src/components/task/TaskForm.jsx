import React, { useContext, useState } from 'react';
import {
  Container, TextField, Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { TodoContext } from '../../context/calendarData';
import ErrorBar from '../ErrorBar';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function TaskForm({
  handleSubmit, handleClickClose, heading, open, taskTitle, setTaskTitle,
  taskDescription, setTaskDescription, buttonText, error, setError,
}) {
  const {
    selectedDay, setSelectedDay, today, maxDate,
  } = useContext(TodoContext);
  const [tempSelectedDay, setTempSelectedDay] = useState(selectedDay);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
            >
              <CloseIcon onClick={handleClickClose} />
            </IconButton>
            <Typography sx={{ textAlign: 'center', flex: 1 }} variant="h6" component="div">
              {heading}
              {' '}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          component="main"
          maxWidth="m"
          sx={{
            width: '100%',
            maxWidth: 500,
            margin: '0 auto',
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField fullWidth label="Task title" id="fullWidth" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          <TextField
            value={taskDescription}
            sx={{ mt: 4, mb: 4 }}
            id="filled-textarea"
            label="Task description"
            rows={4}
            multiline
            fullWidth
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <DatePicker
            sx={{
              width: '100%',
            }}
            onChange={(tempSelected) => {
              const formattedDate = dayjs(tempSelected).format('YYYY-MM-DD');
              setTempSelectedDay(formattedDate);
            }}
            label="Choose date, but think twice !"
            format="YYYY-MM-DD"
            value={dayjs(selectedDay)}
            minDate={dayjs(today)}
            maxDate={dayjs(maxDate)}
          />
          <Button
            autoFocus
            sx={{ mt: 4, mb: 4 }}
            color="success"
            fullWidth
            variant="contained"
            onClick={() => {
              setSelectedDay(tempSelectedDay);
              handleSubmit(tempSelectedDay);
            }}
          >
            {buttonText}
          </Button>
          <ErrorBar error={error} setError={setError} />
        </Container>
      </Dialog>
    </div>
  );
}
