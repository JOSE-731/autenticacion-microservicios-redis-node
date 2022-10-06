const TABLA = 'user';

module.exports = function (injectedStore) {

    let store = injectedStore;
    if (!store) {
        store = require('../store/db_test');
    }

    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id)
    }


    return {
        list,
        get
    };
}
