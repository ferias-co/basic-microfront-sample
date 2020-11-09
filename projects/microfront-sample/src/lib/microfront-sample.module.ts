import { NgModule, ModuleWithProviders } from '@angular/core';
import { PipesModule } from './shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MicrofrontSampleConfig } from './microfront-sample-config';
import { ApolloService } from './shared/services/apollo-service.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ptBrLocale, defineLocale } from 'ngx-bootstrap/chronos';
import localePt from '@angular/common/locales/pt';
import { Common } from './shared/support/common';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

defineLocale('pt-br', ptBrLocale);
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    PipesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    ApolloService,
    Common,
    BsModalService
  ],
  exports: [
    FirstComponentComponent,
    SecondComponentComponent
  ]
})
export class MicrofrontSampleModule {
  static forRoot(configMicrofrontSampleGraphQL: MicrofrontSampleConfig): ModuleWithProviders {
    return {
      ngModule: MicrofrontSampleModule,
      providers: [{ provide: 'configMicrofrontSampleGraphQL', useValue: configMicrofrontSampleGraphQL }]
    };
  }
}
