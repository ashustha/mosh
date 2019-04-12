import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

	// courses = ["course1","course2","course3"];

	// courses = [];

	// viewMode = 'some';

	courses = [
		{id: 1, name: 'course1'},
		{id: 2, name: 'course2'},
		{id: 3, name: 'course3'},
		{id: 4, name: 'course4'} 
	]


  constructor() { }

  ngOnInit() {
  }





}
