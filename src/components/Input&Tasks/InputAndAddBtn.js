//input
//addbtn

import React from 'react'
import './Style.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function InputAndAddBtn(prop) {


    let { handleChange,getInput,newTodo,isInput,isInputOne,getUpdate,InputRef,open,handleClose,Transition,yesInput } = prop;

    return (
        <div>
            {isInputOne&&
                <div>
                <TextField 
                    className="in"
                    color="primary"
                    variant="outlined"
                    ref={InputRef}
                    onChange={(e) => handleChange(e)}
                    onSelect={(e) => handleChange(e)}
                    value={newTodo}
                    placeholder = 'Enter your task'
                    style={{
                        //width: '320px',
                        marginRight: '10px',
                        
                    }} 
                    />
                
                <Button 
                 onClick={getInput}
                 className="btn"
                 variant="contained" 
                 color="primary"
                 size="large"
                 style={{padding: '14px',backgroundColor: '#00BFA5'}}
                 disableElevation
                 >
                    Add
                </Button>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Are you sure to continue ?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You have been already added this task. Do you need to add this task again into the list ?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={yesInput}  style={{color: '#00BFA5'}}>
                        YES
                    </Button>
                    <Button onClick={handleClose} style={{color: '#00BFA5'}}>
                        No
                    </Button>
                    </DialogActions>
                </Dialog>
                
                </div>
            }
            
            {isInput&&
            <div style={{marginTop: '15px'}}>
                <TextField 
                    className="in"
                    id="outlined-basic" 
                    variant="outlined"
                    ref={InputRef}
                    onChange={(e) => handleChange(e)}
                    onSelect={(e) => handleChange(e)}
                    onFocus={(e) => handleChange(e)}
                    value={newTodo}
                    placeholder = 'Edit your task'
                    style={{
                        //width: '320px',
                        marginRight: '10px',
                    }} 
                    />
            <Button variant="contained" color="primary"
                 onClick={getUpdate}
                 className="btn"
                 size="large"
                 style={{padding: '14px',backgroundColor: '#00BFA5'}}
                 disableElevation
                 >
                    Update
                </Button>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Are you sure to continue ?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        You have been already added this task. Do you need to add this task again into the list ?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={yesInput}  style={{color: '#00BFA5'}}>
                        YES
                    </Button>
                    <Button onClick={handleClose} style={{color: '#00BFA5'}}>
                        No
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            }
            
    
            
        </div>
    )
}

