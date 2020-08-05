import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MicrofrontSampleModule } from 'projects/microfront-sample/src/lib/microfront-sample.module';
import { FirstComponentComponent } from './first-component.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent }
];

@NgModule({
  declarations: [
    FirstComponentComponent
  ],
  imports: [
    CommonModule,
    MicrofrontSampleModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class FirstComponentModule { }
