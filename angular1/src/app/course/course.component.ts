import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  constructor() {}
  ngOnInit(): void {}
  course = [
    {
      id: 1,
      name: 'Learn Angular',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      image: '/assets/4.png',
    },
    {
      id: 2,
      name: 'Learn Typescript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      image: '/assets/ty.svg',
    },
    {
      id: 3,
      name: 'Learn Node js',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      image: '/assets/n.png',
    },
    {
      id: 4,
      name: 'Learn Javascript',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      image: '/assets/ja.png',
    },
  ];
}
