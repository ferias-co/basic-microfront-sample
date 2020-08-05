import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MicrofrontSampleModule } from 'projects/microfront-sample/src/lib/microfront-sample.module';
import { SecondComponentComponent } from './second-component.component';

const routes: Routes = [
  { path: '', component: SecondComponentComponent }
];

@NgModule({
  declarations: [
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    MicrofrontSampleModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondComponentModule { }
