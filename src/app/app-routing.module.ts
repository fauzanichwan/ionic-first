import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contoh', loadChildren: './contoh/contoh.module#ContohPageModule' },
  { path: 'formdaftar', loadChildren: './formdaftar/formdaftar.module#FormdaftarPageModule' },
  { path: 'detaildaftar', loadChildren: './detaildaftar/detaildaftar.module#DetaildaftarPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
