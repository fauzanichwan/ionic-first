import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-formdaftar',
  templateUrl: './formdaftar.page.html',
  styleUrls: ['./formdaftar.page.scss'],
})
export class FormdaftarPage implements OnInit {

  formDaftar: any = {
    name: '',
    idNumb: '',
    address: '',
    mobileNumber: ''
  }

  constructor(public router: Router, public storage: Storage) { }

  ngOnInit() {
  }
  submitRegister(){
    this.storage.set('formDaftar', this.formDaftar);
    this.router.navigate(['/detaildaftar']);
  }
}
