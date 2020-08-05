import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Common } from '../../shared/support/common';
import SubscriberModel from '../../models/subscriber.model';

@Component({
  selector: 'fc-microfront-sample-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  @Output() emitBackToPreviousPage: EventEmitter<any> = new EventEmitter();
  subscriber: SubscriberModel;
  name = '';
  age = 18;
  cpf = '';

  constructor(
    private activateRoute: ActivatedRoute,
    public common: Common
  ) { }

  ngOnInit(): void {
    this.subscriber = this.common.getUrlSearchParams(this.activateRoute);
    this.name = this.subscriber.name;
    this.age = this.subscriber.age;
    this.cpf = this.subscriber.cpf;
  }

  backToPreviousPage() {
    this.emitBackToPreviousPage.emit();
  }

}
