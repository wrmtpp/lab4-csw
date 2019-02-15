import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'',place:'',time:'',date:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               <input type="text"   name="task"     onChange={this.handleChange}/>
               <input type="place"  name="place"    onChange={this.handleChange}/>
               <input type="time"   name="time"     onChange={this.handleChange}/>
               <input type="date"   name="date"     onChange={this.handleChange}/> <br/>
               
               <button onClick={() => this.props.addTask(this.state.task,this.state.place,this.state.time,this.state.date)}>Add</button>
           </div>
       )
   }
}

export default InputTask