import { Injectable, Inject } from '@angular/core';

import { HttpLink } from 'apollo-angular-link-http';
import { Apollo } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MicrofrontSampleConfig } from '../../microfront-sample-config';

type endpoints = '/billing/public' | '/billing/schema' | '/billing/schema' | '/graphql';
const clients = [
    {
        name: '',
        endpoint: '/billing/schema',
        requireAuthorization: true
    },
    {
        name: 'billing',
        endpoint: '/billing/schema',
        requireAuthorization: true
    },
    {
        name: 'krakenql-public',
        endpoint: '/billing/public',
        requireAuthorization: false
    },
    {
        name: 'mock',
        endpoint: '/graphql',
        requireAuthorization: false
    }
];

@Injectable()
export class ApolloService {

    private microfrontSampleConfig: MicrofrontSampleConfig;

    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink,
        @Inject('configMicrofrontSampleGraphQL') configMicrofrontSampleGraphQL: MicrofrontSampleConfig,
    ) {
        this.microfrontSampleConfig = configMicrofrontSampleGraphQL;
    }

    createClient(endpoint: endpoints) {
        const client = clients.find(x => x.endpoint === endpoint);
        this.removeApolloClient(client.name);

        const defaultOptions: DefaultOptions = {
            watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
            },
            query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
            },
        };
        const headers = this.createHeaders(client.requireAuthorization);

        const apolloParams = {
            cache: new InMemoryCache(),
            link: this.httpLink.create({ uri: this.microfrontSampleConfig.apiKrakenQLUrl + endpoint, headers }),
            defaultOptions
        };

        try {
            if (!client.name) {
                this.apollo.createDefault(apolloParams);
            } else {
                this.apollo.create(apolloParams, client.name);
            }
            return client.name ? this.apollo.use(client.name) : this.apollo.default();
        } catch (error) {
            console.error('Falha ao criar Apollo Client', error);
            throw error;
        }
    }

    removeApolloClient(name: string = '') {
        if (!name && this.apollo.default()) {
            this.apollo.removeClient();
        }
        if (this.apollo.use(name)) {
            this.apollo.removeClient(name);
        }
    }

    private createHeaders(includeAuthorization): HttpHeaders {
        const accessToken = localStorage.getItem('access_token');
        if (includeAuthorization && accessToken) {
            return new HttpHeaders().append('Authorization', `Bearer ${accessToken}`);
        }
        return null;
    }
}
