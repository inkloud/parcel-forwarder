const Model = (function () {
    return {
        login: function (login, password) {
            const authFunc = AUTH.ROLES.reduce(function (acc, role) {
                acc[role] = `${AUTH.AUTH_API}${role}`;
                return acc;
            }, {});

            const acc = new Promise(function (resolve, reject) {
                reject('Start First Call');
            });
            return AUTH.ROLES.reduce(function (acc, role) {
                return acc.catch(function () {
                    return fetch(`${authFunc[role]}?login=${login}&password=${password}`).then(function (response) {
                        if (response.ok)
                            return response.json();
                        throw new Error('Errore di autenticazione');
                    });
                });
            }, acc);
        },
        decode: function (jwt) {
            return fetch(`${AUTH.AUTH_DECODE_API}${jwt}`).then(function (res) {
                if (!res['ok'])
                    throw new Error('Errore di autenticazione');
                return res;
            });
        }
    };
})();


export default Model;
