import { Injectable, Inject } from '@angular/core';
import { MicrofrontSampleConfig } from './microfront-sample-config';

@Injectable()
export class MicrofrontSampleConfigService {

    constructor(@Inject('configMicrofrontSampleGraphQL') private configMicrofrontSampleGraphQL: MicrofrontSampleConfig) {
    }

}
