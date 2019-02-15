import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<ul > {
                   this.props.tasks.map((item) => (
                       				<li key={item.id}>Name: {item.task} <br/>
                      								place  : {item.place}<br/>
                       								time: {item.time} <br/>
                       								date : {item.date} <br/></li>
                   ))
               }
           </ul>)
   }
}

export default TaskList