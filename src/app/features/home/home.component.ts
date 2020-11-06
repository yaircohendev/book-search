import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit(): void {

  }





}
