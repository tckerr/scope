export const environment = {
    production: true,
    settings: {
        diagnosticFetchIntervalMs: 10000
    },
    api: {
        baseUrl: '/api',
        auth: {
            tokenUrl: '/auth/token/'
        },
        diagnostics: {
            list: '/diagnostics/'
        }
    }
};
