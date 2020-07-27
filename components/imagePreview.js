import React from 'react';
import { Grid } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  deleteImageButton: {
    color: '#ffffff',
    backgroundColor: '#494B96 !important',
    width: '10rem',
    height: "3rem"
  },
  image: {
    maxHeight: "80vh"
  }
}));

export default function ImagePreview(props) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.open} onClick={props.closePreview} >
      <Grid
                            fullWidth
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="center"
                            >

                            <Grid item fullWidth>

        <img src={props.imageURL} className={classes.image} alt="" />
        </Grid>
        <Grid item fullWidth>
        <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.deleteImageButton}
                                                onClick={props.deleteImage}
                                                
                                                
                                            >
                                                Delete image
							
                                            </Button>
                                            </Grid>
                                            </Grid>
      </Backdrop>
    </div>
  );
}