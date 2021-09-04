import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    const updatedTask: Task = { ...task, reminder: !task.reminder };
    return this.http.put<Task>(url, updatedTask, httpOptions);
  }
}
