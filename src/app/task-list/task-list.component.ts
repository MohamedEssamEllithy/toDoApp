import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() addTaskList!: any;
@Output() sendIndex = new EventEmitter()
  delTask(index:Number): void {
this.sendIndex.emit(index) 
 }
}
