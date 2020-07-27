import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const styles = ((theme) => ({
    root: {
        marginBottom: 10,
        cursor: "pointer"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    arrow: {
        color: '#494B96 !important',
    }
})
);

class MainCard extends Component {
    render() {
        const { classes } = this.props;
        return (

                <Card className={classes.root} onClick={this.props.handleClick}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={this.props.title} className={classes.avatar} src={this.props.src} />
                        }
                        action={
                            <IconButton aria-label={this.props.title}>
                                <span className={classes.arrow}>{this.props.count ? this.props.count : ''}</span>
                                <ArrowForwardIosIcon className={classes.arrow} />
                            </IconButton>
                        }
                        title={this.props.title}
                        subheader={this.props.description}
                    />
                </Card>
        )
    }
}

export default (withStyles(styles)(MainCard));

