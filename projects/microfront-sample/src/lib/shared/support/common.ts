import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncryptoDecryptoService } from './encrypto-decrypto.service';
import SubscriberModel from '../../models/subscriber.model';
import { String } from 'typescript-string-operations';


@Injectable()
export class Common {

  constructor(
    private EncryptoDecrypto: EncryptoDecryptoService) { }

  getUrlSearchParams(actRouter: ActivatedRoute): SubscriberModel {
    let subscriber: SubscriberModel;
    actRouter.params.forEach((a) => {
      if (a.parameter) {
        subscriber = new SubscriberModel();

        const param = this.EncryptoDecrypto.get(decodeURIComponent(a.parameter));

        const lisParam = param.split('/');

        // 0-name | 1-age | 2-cpf
        subscriber.name = lisParam[0];
        subscriber.age = lisParam[1];
        subscriber.cpf = lisParam[2];
      }
    });

    return subscriber;
  }

  setUrlSearchParams(subscriber: SubscriberModel): string {
    const entity = Object.assign({}, subscriber);

    /* 0-name | 1-age | 2-cpf */
    const strParam = String.Format('{0}/{1}/{2}',
      entity.name,
      entity.age,
      entity.cpf
    );

    const tokenSearch = encodeURIComponent(this.EncryptoDecrypto.set(strParam));

    return tokenSearch;
  }
}
