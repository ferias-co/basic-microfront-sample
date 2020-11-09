import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent {

  constructor(private router: Router) { }

  backToPreviousPage(event: any) {
    this.router.navigate([`basic-microfront-sample`]);
  }

}
