import { CoursesService } from '../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	title = "List of Courses";

  courses;
  email = "ashu@gmail.com";

  isActive = false;

  constructor(course : CoursesService) {
  	this.courses = course.getCourses();
  }

  ngOnInit() {
  }

  onDivClicked(){
    console.log("Div was clicked");
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked" $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  course = {
    title : " The Complete Angular Course",
    rating : 4.8547,
    students : 5000000,
    price : 192.25,
    releaseDate : new Date (2019, 5, 1)
  }

  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, necessitatibus consectetur temporibus quas harum quam doloremque beatae esse iure praesentium. Unde eum iusto corrupti, ut repudiandae dignissimos molestiae fuga libero.";

}
