import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesenhodetalhePage } from './desenhodetalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DesenhodetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesenhodetalhePage]
})
export class DesenhodetalhePageModule {}
