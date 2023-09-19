import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  taskFromAddTask !: Array<String> ;
  newTask(newtask: any) {
    console.log('parent', newtask);
    this.taskFromAddTask = newtask;
  }
  updateList(i :any){
    this.taskFromAddTask.splice(i,1)
    console.log('parent11', this.taskFromAddTask);
    
  }
}
