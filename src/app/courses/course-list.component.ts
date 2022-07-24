// import { Component, OnInit } from "@angular/core";
// import { Course } from "./course";

import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

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

  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy!: string;

  constructor(private CourseService: CourseService){
    
  }

  ngOnInit(): void{
    this._courses = this.CourseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter() {
    return this._filterBy;
  }
}