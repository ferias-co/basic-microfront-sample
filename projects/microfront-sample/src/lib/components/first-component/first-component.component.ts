import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MicrofrontSampleService } from '../../services/microfront-sample.service';
import { Common } from '../../shared/support/common';
import SubscriberModel from '../../models/subscriber.model';

@Component({
  selector: 'fc-microfront-sample-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  @Output() goToSecondPage: EventEmitter<any> = new EventEmitter();
  name = 'Maria';
  age = 18;
  cpf = '00578598736';
  cnpj = '51895078000152';

  constructor(
    private microfrontSampleService: MicrofrontSampleService,
    public common: Common
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  async loadInfo() {
    await this.microfrontSampleService.getColaboratorMock().then(result => {
      if (result) {
        this.name = result.Persons[0].name;
        this.age = result.Persons[0].age;
      }
    }).catch(exception => {
      console.error('erro: ', exception);
    });
  }

  goToSecondPageSample() {
    const subscriber = new SubscriberModel();
    subscriber.name = this.name;
    subscriber.age = this.age;
    subscriber.cpf = this.cpf;
    const token = this.common.setUrlSearchParams(subscriber);
    this.goToSecondPage.emit(token);
  }

}
