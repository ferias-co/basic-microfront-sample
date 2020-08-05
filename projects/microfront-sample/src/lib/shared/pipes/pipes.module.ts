import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjPipe } from './cnpj.pipe';
import { CpfPipe } from './cpf.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations:
    [
        CnpjPipe,
        CpfPipe
    ],
    exports:
    [
        CnpjPipe,
        CpfPipe
    ],
})
export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        };
    }
}
