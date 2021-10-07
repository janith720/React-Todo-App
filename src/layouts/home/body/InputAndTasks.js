//input&addbtn
//task&deletebtn

import React from 'react'
import '../../../components/Input&Tasks/Style.css'
import InputAndAddBtn from '../../../components/Input&Tasks/InputAndAddBtn'
import TaskAndDeleteBtn from '../../../components/Input&Tasks/TaskAndDeleteBtn'
import Alert from '@material-ui/lab/Alert';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import emptytasks1 from '../../../images/emptytasks1.png'
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function InputAndTasks() {


    const [myTodoList,setMyTodoList] = React.useState([]);
    const [newTodo,setNewTodo] = React.useState("");

    const [clearAll,setClearAll] = React.useState(false);
    const [message,setMessage] = React.useState(false)
    
    const [isInput,setIsInput] = React.useState(false)
    const [isInputOne,setIsInputOne] = React.useState(true)

    const [open, setOpen] = React.useState(false);

    const InputRef = React.useRef();

    const getInput = () => {
        let newTodoList = [...myTodoList];
        if(newTodo.length > 2){
            const result = newTodoList.filter(word => word === newTodo);
            
            if(result.length > 0){
                console.log("already added")
                setOpen(true);
                //setNewTodo("")
            }else{
                //console.log("added")
                newTodoList.push(newTodo)
                setMyTodoList(newTodoList)
                setNewTodo("")
            }
            
 
        }else{
            setMessage(true)
            InputRef.current.style.border = '2px solid red';
            InputRef.current.style.borderRadius = '5px';
        }
        
        if(newTodoList.length > 1){
            setClearAll(true)
        }

    }
    const handleClose = () => {
        setOpen(false);
        setNewTodo("")
      };

    const yesInput = () => {
        let newTodoList = [...myTodoList];


        newTodoList.push(newTodo)
        setMyTodoList(newTodoList)
        //console.log(newTodoList)
        setNewTodo("")
        setOpen(false);
        setIsInputOne(true)
        setIsInput(false)
    }
    const handleChange = (e) => {
        setNewTodo(e.target.value)
        if(e.target.value.length > 0){
            setMessage(false)
            InputRef.current.style.border = 'none';
        }
        
    }
    const getUpdate = () => {
        let newTodoList = [...myTodoList];
        if(newTodo.length > 2){
            const result = newTodoList.filter(word => word === newTodo);

            if(result.length > 0){
                console.log("already added")
                //setNewTodo("")
                setOpen(true);
            }else{
                //console.log("added")
                newTodoList.push(newTodo)
                setMyTodoList(newTodoList)
                setNewTodo("")
                setIsInputOne(true)
                setIsInput(false)
            }
            
        }else{
            setMessage(true)
            InputRef.current.style.border = '2px solid red';
            InputRef.current.style.borderRadius = '5px';
        }  
    }

    const clearAllTsk = () => {
        let delTodo = [...myTodoList]

        delTodo.splice(myTodoList)
        setMyTodoList(delTodo)
        setClearAll(false)  
    }


    // React.useEffect(() => {
    //     if(myTodoList.length > 0){
    //         let tempJsonString = JSON.stringify(myTodoList);
    //         localStorage.setItem("todos", (tempJsonString));
            
    //     }
        
    //   }, [myTodoList]);

    //     React.useEffect(() => {
    //     let storeTodo = localStorage.getItem("todos");
    //     let tempTodo = JSON.parse(storeTodo);
    //     setMyTodoList(tempTodo);
    //   }, []);
    
    return (
        <div style={{textAlign: 'center',marginTop: '25px'}}>
            <InputAndAddBtn handleChange={handleChange} getUpdate={getUpdate} getInput={getInput} handleClose={handleClose} yesInput={yesInput} Transition={Transition} open={open} newTodo={newTodo} isInput={isInput} isInputOne={isInputOne} message={message} InputRef={InputRef}/>

            {message&& 
               <Alert variant="filled" className="errormsg" severity="error" style={{
                   marginTop: '10px',
                   marginLeft: 'auto',
                   marginRight: 'auto',
                   }}>
                    Please enter a valid Todo!
                </Alert>
            }
            {myTodoList.length > 0 ?
                myTodoList.map((val,key) => {
                return (
                    <TaskAndDeleteBtn  key={key}
                     todos={val} 
                     myTodoList={myTodoList} 
                     setMyTodoList={setMyTodoList} 
                     index={key} 
                     setClearAll={setClearAll} 
                     setIsInput={setIsInput}
                     isInput={isInput}
                     isInputOne={isInputOne} 
                     setIsInputOne={setIsInputOne}
                      />
                )
                
            }) : (
                <div style={{marginTop: '5px',color: 'gray'}}>
                   <img src={emptytasks1} alt="" width= '200px' />
                   <p>Empty Tasks</p> 
                    
                </div>  
            )  
        }
        {clearAll&&    
                <HighlightOffOutlinedIcon  onClick={clearAllTsk} style={{
                    marginTop: '20px',
                    cursor: 'pointer',
                    color: '#00BFA5',
                    fontSize: '35px'
                }} />
}
        </div>
    )
}
