import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = 'de';
  day: string;
  reminder: boolean;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter task text!');
      return;
    }
    this.onAddTask.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    });

    this.text = '';
    this.day = '';
  }
}
