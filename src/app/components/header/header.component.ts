import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = 'Task Tracker'
  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log('toggle')
  }

}
