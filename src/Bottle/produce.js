/**
 *
 * @param String name
 * @return Object
 */
var produce = function register(name, apply) {
    apply = apply || false;
    var providerName, container, id;

    id = this.id;
    container = this.container;
    providerName = name + 'Provider';

    var provider = container[providerName];
    var instance;
    if (provider) {
        // filter through decorators
        instance = getAllWithMapped(decorators, id, name)
            .reduce(reducer, provider.$get(container));
    }

    if (instance) {
        if (apply) {
            instance = applyMiddleware(id, name, instance, container);
        }
        else {
            instance = getWithMiddlewear(id, name, instance);
        }
    }

    return instance;
};
