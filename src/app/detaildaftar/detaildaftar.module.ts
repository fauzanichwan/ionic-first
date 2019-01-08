import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetaildaftarPage } from './detaildaftar.page';

const routes: Routes = [
  {
    path: '',
    component: DetaildaftarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetaildaftarPage]
})
export class DetaildaftarPageModule {}
