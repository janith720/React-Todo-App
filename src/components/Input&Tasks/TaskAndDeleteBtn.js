//text
//binicon

import React from 'react'
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    margin: {
      marginLeft: 'auto',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function TaskAndDeleteBtn(prop) {

    const classes = useStyles();

    let { todos,index,myTodoList,setMyTodoList,setClearAll,setIsInput,setIsInputOne} = prop;

    const deletetask = () => {
        let delTodo = [...myTodoList]
        
        delTodo.splice(index,1)
        setMyTodoList(delTodo)
        
        if(delTodo.length < 2){
            setClearAll(false)
        }
    }

    const update = () => {
        setIsInput(true);
        setIsInputOne(false)
        let delTodo = [...myTodoList]
        
        delTodo.splice(index,1)
        setMyTodoList(delTodo)

    }

    return (
        
        <div className="task" style={{
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            // marginTop: '10px',
            backgroundColor: 'white',
            // width: '420px',
            // padding: '10px 20px',
            fontSize: '18px',
            textAlign: 'left',
            alignItems: 'center',
            borderRadius: '5px',
            color: '#00BFA5',
            fontWeight: '500'
            }}>
            <p>{todos}</p>
            
            <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon onClick={deletetask} />
            </IconButton>

            <button
                style={{background: 'none',border: 'none',cursor: 'pointer',color: '#00BFA5',paddingLeft: '5px'}}
                onClick={update}
            ><EditIcon /></button>
            
        </div>
    )
}
