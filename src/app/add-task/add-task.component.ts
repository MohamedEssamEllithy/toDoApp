import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() sendTask = new EventEmitter();
  newTask !: String ;
  taskList :Array<String>=[] ;

  addNewTask(addTask: String) {
    if(addTask != ""){
      this.taskList.push(addTask)
      console.log("list",this.taskList);
      this.sendTask.emit(this.taskList);
      this.newTask = '';
    }
  }
}
