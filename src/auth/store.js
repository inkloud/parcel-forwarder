const Store = (function () {
    const store = require('store');
    store.addPlugin(require('store/plugins/expire'));
    store.removeExpiredKeys();

    const expire = 1000 * 60 * 60 * 24;

    return {
        set: function (key, value) {
            store.set(key, value, new Date().getTime() + expire);
        },
        get: function (key) {
            return store.get(key);
        },
        remove: function (key) {
            store.remove(key);
        }
    };
})();


const AuthStore = (function () {
    const Emitter = new (require('events'))();

    let user = Store.get('user') === undefined ? null : Store.get('user');

    return {
        isAuthenticated: function () {
            return user !== null;
        },
        setValue: function (value) {
            user = value;
            Store.set('user', user);
            Emitter.emit('event');
        },
        removeValue: function () {
            Store.remove('user');
        },
        getValue: function () {
            return user;
        },
        on: function (cb) {
            Emitter.on('event', cb);
        },
        off: function (cb) {
            Emitter.removeListener('event', cb);
        }
    };
})();


const user = AUTH.USER;
if (user !== null)
    AuthStore.setValue(user);


export default AuthStore;
