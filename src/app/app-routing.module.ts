import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'basic-microfront-sample', pathMatch: 'full' },
  {
    path: 'basic-microfront-sample',
    loadChildren: () => import('./first-component/first-component.module').then(m => m.FirstComponentModule)
  },
  {
    path: 'basic-microfront-sample/detail/:parameter',
    loadChildren: () => import('./second-component/second-component.module').then(m => m.SecondComponentModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
