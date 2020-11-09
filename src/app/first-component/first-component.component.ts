import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {

  constructor(
    private router: Router) { }

  goToDetailPage(event: any) {
    this.router.navigate([`basic-microfront-sample/detail/${event}`]);
  }

}
