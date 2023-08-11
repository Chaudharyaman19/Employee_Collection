import { map } from 'rxjs';
import { ApiService } from './../shared/api.service';
import { Resturantdata } from './resturent.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resturantdash',
  templateUrl: './resturantdash.component.html',
  styleUrls: ['./resturantdash.component.css'],
})
export class ResturantdashComponent {
  formvalue!: FormGroup;
  Resturantmodelobj: Resturantdata = new Resturantdata();
  allresturantdata: any;
  bookservice: any;
  conversationsService: any;
  form: any;
  router: any;
  productApiService: any;
  products: any;
  http: any;
  httpClient: any;
  noteService: any;
  baseUrl: any;
  apiService: any;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formvalue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getalldata();
  }
  //now subscribing our data
  addresto() {
    this.Resturantmodelobj.name = this.formvalue.value.name;
    this.Resturantmodelobj.email = this.formvalue.value.email;
    this.Resturantmodelobj.mobile = this.formvalue.value.mobile;
    this.Resturantmodelobj.address = this.formvalue.value.address;
    this.Resturantmodelobj.services = this.formvalue.value.services;
    this.api.postresturant(this.Resturantmodelobj).subscribe((res) => {
      console.log(res);
      alert('Resturant Records Added Succesfully😊😊👌');
      this.formvalue.reset();
      this.getalldata();
    });
  }

  //getdatadynamicly
  getalldata() {
    this.api.getresturant().subscribe((res) => {
      this.allresturantdata = res;
    });
  }
  //deletdata
  deleter(id: number) {
    console.warn('test id', id);
    this.products.delete(id).subscribe(() => {});
  }
}
