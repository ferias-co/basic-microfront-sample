import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailPage(event: any) {
    this.router.navigate([`basic-microfront-sample/detail/${event}`]);
  }

}
