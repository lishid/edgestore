'use strict';

module.exports = function () {
    // Forward edges
    var f = {};
    // Backward edges
    var b = {};

    function _delete_empty_store(store, key) {
        var o = store[key];
        // If there's anything in o, we can return
        for (var k in o) {
            return;
        }
        // If we get here, it means o is empty
        delete store[key];
    }

    function add(x, y) {
        f[x] = f[x] || {};
        f[x][y] = true;

        b[y] = b[y] || {};
        b[y][x] = true;
    }

    function remove(x, y) {
        if (f[x]) {
            delete f[x][y];
            _delete_empty_store(f, x);
        }
        if (b[y]) {
            delete b[y][x];
            _delete_empty_store(b, y);
        }
    }

    function exists(x, y) {
        return f[x] && f[x][y];
    }

    function clear() {
        f = {};
        b = {};
    }

    function remove_for_x(x) {
        var ys = get_for_x(x);
        for (var i = 0; i < ys.length; i++) {
            remove(x, ys[i]);
        }
    }

    function remove_for_y(y) {
        var xs = get_for_y(y);
        for (var i = 0; i < xs.length; i++) {
            remove(xs[i], y);
        }
    }

    function get_for_x(x) {
        var store = f[x] || {};
        var ys = [];
        for (var y in store) {
            ys.push(y);
        }
        return ys;
    }

    function get_for_y(y) {
        var store = b[y] || {};
        var xs = [];
        for (var x in store) {
            xs.push(x);
        }
        return xs;
    }

    var r = this || {};
    r.add = add;
    r.remove = remove;
    r.exists = exists;
    r.clear = clear;
    r.remove_for_x = remove_for_x;
    r.remove_for_y = remove_for_y;
    r.get_for_x = get_for_x;
    r.get_for_y = get_for_y;
    return r;
};
