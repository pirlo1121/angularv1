import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  name: string = 'Shakira';
  lastName: string = 'Mebarak';
  age: number = 49;
  isSinger: boolean = true;
  gender: string = 'Female';



}
