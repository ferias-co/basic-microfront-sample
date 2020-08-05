import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToPreviousPage(event: any) {
    this.router.navigate([`basic-microfront-sample`]);
  }

}
