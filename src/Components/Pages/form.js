import React, { useState } from 'react'
import faker from 'faker'
import downlaod from 'downloadjs'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Button, Grid, Paper, Box, Chip, TextField, MenuItem, Select, InputLabel, FormControl, makeStyles } from '@material-ui/core'
import { options, dataTemplate } from './option'
import '../../Stylesheets/App.css'
import download from 'downloadjs';
const category = Object.keys(options)
const useStyles = makeStyles(theme => ({
    FormControl: {
        minWidth: '100%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: '2',
    },
    button: {
        backgroundColor: ' rgba(10, 236, 168, 0.911)',
        color: '#ffff',
    }
}))
const Form = (props) => {
    const classes = useStyles();
    const [data, setdata] = useState(dataTemplate);
    const [down, setdown] = useState(1);
    const genratedata = () => {
        //code download data
        let copydata = JSON.parse(JSON.stringify(options))
        let arrdata = [];
        for (let i = 0; i < down; i++) {
            for (let cat of category) {
                for (let key of Object.keys(options[cat])) {
                    if (data[cat][key] != undefined) {
                        copydata[cat][key] = faker[cat][key]();//faker works
                    }
                }
            }
            arrdata.push(copydata)
            copydata = JSON.parse(JSON.stringify(options))
        }
        download(JSON.stringify(arrdata), "fakedata.txt", "txt")
        setdown(1);
        setdata(dataTemplate);
    }
    const chageevent = (event) => {
        let copydata = { ...data }
        copydata[event.target.name] = {}
        event.target.value.forEach(item => {
            copydata[event.target.name][item] = ''
        })
        setdata(copydata);
    }
    return (
        <>
            <Grid  id='maindiv1'>
                {
                    category.map((catg) => (

                        <Grid item sm={3} key={catg} id='submaindiv'>
                            <Paper component={Box} p={3}>
                                <FormControl className={classes.FormControl}>
                                    <InputLabel>{catg}</InputLabel>
                                    <Select name={catg} multiple fullWidth value={Object.keys(data[catg])} onChange={chageevent}
                                        renderValue={
                                            (selected) => (
                                                <div className={classes.chips}>
                                                    {
                                                        selected.map(value => (
                                                            <Chip key={value} label={value} className={classes.chip}></Chip>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    >
                                        {
                                            Object.keys(options[catg]).map((menuitem) => (
                                                <MenuItem value={menuitem} key={menuitem}>
                                                    {menuitem}
                                                </MenuItem>

                                            )

                                            )
                                        }
                                    </Select>
                                </FormControl>
                            </Paper>
                        </Grid>
                    )

                    )

                }

            </Grid>
            <Paper component={Box} my={1} p={3}>
                <TextField fullWidth variant='outlined' label="Enter number of Fake data Genrated" placeholder="Enter Number" value={down}
                    onChange={down => (setdown(down.target.value))} >
                </TextField>
            </Paper>
            <Button variant='contained' className={classes.button} onClick={genratedata}>
                Genrate Data
        </Button>
        </>
    );
}
export default Form
