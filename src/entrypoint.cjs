const oasOld = import('./index_old.js');
const oasNew = import('./index.js');

function initialize(...args) {
    if (args.length === 3) {
        oasOld.then((m) => m.initialize(args[0], args[1], args[2]));
    } else {
        return oasNew.then((m) => m.initialize(args[0], args[1]));
    }
}

function use(...args) {
    oasNew.then((m) => m.use(args[0], args[1], args[2]))
}

function configure(cfg) {
    oasOld.then((m) => m.configure(cfg));
}

module.exports = {
    initialize,
    configure,
    use
}
