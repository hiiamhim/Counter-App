import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import {counterAction} from "../store/index"

const Counter = () => {
  
  //if counter unmounted this subscription will be cancelled
  const counter=useSelector(state=>state.counter.counter) //hook for automatic subscription to the redux store

  const showCounter=useSelector(state=>state.counter.showCounter)

  //hook for dispatching action from component which will later be handled by reducer function 
  const dispatch=useDispatch()


  // const IncrementHandler=()=>{
  //  dispatch({type:'increment'})
  // }  

  // const DecrementHandler=()=>{
  //   dispatch({type:'decrement'})
  // }

  // const toggleCounterHandler = () => {
  //   dispatch({type:'toggle'})
  // }

  const IncrementHandler=()=>{
    dispatch(counterAction.increment())
   }  
 
   const DecrementHandler=()=>{
     dispatch(counterAction.decrement())
   }
 
   const toggleCounterHandler = () => {
     dispatch(counterAction.toggleCounter())
   }
 


  

 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
