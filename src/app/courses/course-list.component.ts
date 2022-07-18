// import { Component, OnInit } from "@angular/core";
// import { Course } from "./course";

import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

// @Component({
//   selector: 'app-course-list',
//   templateUrl: './course-list.component.html'
// })
// export class CourseListComponent implements OnInit {
//   courses: Course[] = [];

//   ngOnInit(): void {
//     this.courses = [
//       {
//         id: 1,
//         name: 'Angular: Forms',
//         imageUrl: '',
//         price: 99.99,
//         code: 'XPS-8796',
//         duration: 120,
//         rating: 4.4,
//         releaseDate: 'December, 2, 2019',
//       },
//       {
//         id: 2,
//         name: 'Angular: HTTP',
//         imageUrl: '',
//         price: 45.99,
//         code: 'LPL-1073',
//         duration: 90,
//         rating: 5.0,
//         releaseDate: 'December, 21, 2020',
//       },
//     ]
//   }
// }

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XLM-987',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December, 2, 2019',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'LPL-1073',
        duration: 90,
        rating: 5.0,
        releaseDate: 'December, 21, 2020',
      },
      {
        id: 3,
        name: 'GO',
        imageUrl: '',
        price: 70.99,
        code: 'XLM-989',
        duration: 85,
        rating: 4.7,
        releaseDate: '2021-09-15',
      }
    ]
  }
}