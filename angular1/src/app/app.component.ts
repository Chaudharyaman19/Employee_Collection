import { HttpClient, HttpClientModule } from '@angular/common/http';
import { style } from '@angular/animations';
import { environment } from '../environments/environment';
import { enableProdMode } from '@angular/core';

import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AddserviceService } from './addservice.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

/* @HostBinding('style.color') textcolor: string | undefined;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.textcolor = 'red';
  }
  @HostListener('click') onClick() {
    this.textcolor = 'blue';
  }
  @HostListener('mouseover') onMouseOver() {
    this.textcolor = 'red';
  }
  @HostListener('mouseout') onMouseOut() {
    this.textcolor = 'orange';
  }
  */
/*@HostBinding('style.color') textcolor: string | undefined;
  ngOnInit(): void {
    this.textcolor = 'blue';
    this.datetoday = new Date().toDateString();
    this.name = 'Aman Chaudhary';
  }
  @HostListener('click') onClick() {
    this.textcolor = 'red';
  }
  @HostListener('mouseover') onMouseOver() {
    this.textcolor = 'black';
  }
  @HostListener('mouseout') onMouseOut() {
    this.textcolor = 'yellow';
  }
  student: any[] = [
    {
      name: 'Aman',
      id: '123',
    },
  ];
  */
// constructor(ts: TestService, y: AddserviceService) {
//ts.callme();
//y.add(1, 9);
//}
/*title = 'angular-reactive form';
  constructor() {}
  user: any;
  fomrData: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fomrData = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z'),
      ]),
    });
  }
  loginUser() {
    console.log(this.loginform.value);
  }
/*
  /*onclicksubmit(val: { user: string }) {
    console.log('The value of the text box is :' + val.user);
    this.x = val.user;
    return this.x;
  }
  */
