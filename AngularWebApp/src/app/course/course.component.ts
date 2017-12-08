import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template:'<h2>Aravind</h2>',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
title="Aravind";
  constructor() { }

  ngOnInit() {
  }

}
