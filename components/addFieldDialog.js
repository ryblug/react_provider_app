import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  addButton: {
    backgroundColor: '#494B96 !important',
    color: '#ffffff',
    height: "3rem",
    width: "7rem",
    marginRight: "2rem"
  },
  cancelButton: {
    backgroundColor: 'rgb(246, 246, 246, 1) !important',
    color: '#000000',
    height: "3rem"
  },
  titleText: {
    color: '#494B96',
    fontSize: "1.1rem"
  },
  fieldText: {
    borderColor: 'green',
    color: '#494B96',
  }
}));



const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const CssTextField = withStyles({
	root: {
		color: "#494B96",
	  '& label': {
		color: '#494B96',
	  },
	  '& .MuiInput-underline:after': {
		borderBottomColor: '#53E7C3',
	  },
	  '& .MuiInput-underline:before': {
		borderBottomColor: '#53E7C3',
	  },
      '&.Mui-focused fieldset': {
        borderColor: '#53E7C3',
	  },	  
	  '& .Mui-error:after': {
		borderBottomColor: 'red',
    },
    '& .MuiInputBase-input': {
      fontSize: "1.2rem",
      color: '#494B96',
    }
	},
  })(TextField);

export default function AddFieldDialog(props) {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }    

  const handleChange = (event) => {
    setName(capitalizeFirstLetter(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.titleText} id="form-dialog-title">Add field</DialogTitle>
        <DialogContent>
          <CssTextField
            margin="dense"
            id="name"
            label="Enter field title"
            type="text"
            //InputLabelProps={{'classes':classes.fieldText}}
            fullWidth            
            className={classes.fieldText}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" className={classes.addButton} onClick={() => props.processAddField(name)} color="primary">
            Add
          </Button>
          <Button variant="contained" className={classes.cancelButton} onClick={handleClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}