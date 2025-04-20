const log = (store) => (next) => (action) => {
    console.log('ACTION', action);

    next(action);
};

export default log;