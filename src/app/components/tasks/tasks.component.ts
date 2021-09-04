import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  tasks: Task[] = [];
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  handleTaskDelete(task: Task) {
    console.log(1);
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }
}
