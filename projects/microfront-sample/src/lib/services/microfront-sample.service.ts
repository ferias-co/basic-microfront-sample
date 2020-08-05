import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { ApolloService } from '../shared/services/apollo-service.service';

@Injectable({
    providedIn: 'root'
})
export class MicrofrontSampleService {
    private apollo;

    constructor(private apolloService: ApolloService) {
    }

    async getColaboratorMock() {
        try {
            this.apollo = this.apolloService.createClient('/graphql');
            const response: any = await this.apollo.query({
                query: gql`query {
                    Persons {
                      name
                      cpf
                      age
                      friends {
                        name
                        age
                      }
                    }
                  }`
            }).toPromise();

            return response.data;
        } catch (error) {
            console.error('error:', error);
            return null;
        }
    }
}
