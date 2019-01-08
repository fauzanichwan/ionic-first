import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-detaildaftar',
  templateUrl: './detaildaftar.page.html',
  styleUrls: ['./detaildaftar.page.scss'],
})

export class DetaildaftarPage implements OnInit {

  data: any = {};
  constructor(public storage: Storage) { 
    storage.get('formDaftar').then((valueFormDaftar) => {
      this.data = valueFormDaftar;
    });
  }

  ngOnInit() {
  }

}
