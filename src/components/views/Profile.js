import React from 'react'
import Container from '@material-ui/core/CssBaseline'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles((theme) =>({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
   paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
   }
}));
export default function Profile() {
    const classes = useStyle();
    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                adsfs
            </Paper>
        </main>
    )
}
