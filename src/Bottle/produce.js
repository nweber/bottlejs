/**
 *
 * @param String name
 * @return Object
 */
var produce = function register(name) {
    var providerName, container, id;

    id = this.id;
    container = this.container;
    providerName = name + 'Provider';

    var provider = container[providerName];
    var instance;
    if (provider) {
        delete container[providerName];
        delete container[name];

        // filter through decorators
        instance = getAllWithMapped(decorators, id, name)
            .reduce(reducer, provider.$get(container));
    }
    return instance ? applyMiddleware(id, name, instance, container) : instance;
};
