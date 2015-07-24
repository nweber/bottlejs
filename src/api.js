
/**
 * Bottle constructor
 *
 * @param String name Optional name for functional construction
 */
var Bottle = function Bottle(name) {
    if (!(this instanceof Bottle)) {
        return Bottle.pop(name);
    }

    this.id = id++;
    this.container = {
        $register : register.bind(this),
        $get : produce.bind(this)
    };
};

/**
 * Bottle prototypeproduce
 */
Bottle.prototype = {
    produce: produce,
    constant : constant,
    decorator : decorator,
    defer : defer,
    digest : digest,
    factory : factory,
    middleware : middleware,
    provider : provider,
    register : register,
    resolve : resolve,
    service : service,
    value : value
};

/**
 * Bottle static
 */
Bottle.pop = pop;
