import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() handleTaskDelete: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() handleReminderToggle: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}

  onDelete(task: Task) {
    this.handleTaskDelete.emit(task);
  }

  onToggleReminder(taskId: Task) {
    console.log(taskId);
    this.handleReminderToggle.emit(taskId);
  }
}
