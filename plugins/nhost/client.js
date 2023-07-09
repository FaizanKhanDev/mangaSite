// plugins/nhost.js

import { createClient } from 'nhost-js-sdk';

const nhostClient = createClient({
    baseURL: 'https://ytfwlcpjffnmoduprcvd.hasura.ap-south-1.nhost.run/v1/graphql',
    clientStorage: window.localStorage,
    clientStorageType: 'localStorage', // or 'cookie'
});

export default ({ app }, inject) => {
    inject('nhost', nhostClient);
};
