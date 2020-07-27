import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'block'
  },
  descriptionText: {
    fontSize: "1.4rem"
  }
}));

export default function AlertDialog(props) {
  //console.log('open1:', props.open);
  const classes = useStyles();
  //let [open, setOpen] = React.useState(false);
  //console.log('open2', open);
  //const [close, setClose] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  //const handleClickOpen = () => {
  //  setOpen(true);
  //};

  const handleClose = () => {
    // console.log('close1');
    // console.log(typeof (props.handlePopupClose));
    if (typeof (props.handlePopupClose) === 'function') {
      props.handlePopupClose();
    } else {
      console.log('close2');
      //setClose(true);
    }
    // console.log('clicked close');
    // open = false;
    // setOpen(false);    
  };

  //const handleMaxWidthChange = (event) => {
  //  setMaxWidth(event.target.value);
  //};

  //const handleFullWidthChange = (event) => {
  //  setFullWidth(event.target.checked);
  //};

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.open} //  && !close
        //onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.descriptionText}>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes[props.actionClass ? props.actionClass : 'hide']} onClick={() => props.handlePopupAction()} color="secondary">
            {props.actionButtonTitle ? props.actionButtonTitle : 'OK'}
          </Button>
          <Button onClick={handleClose} color="primary">
            {props.cancelButtonTitle ? props.cancelButtonTitle : 'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
