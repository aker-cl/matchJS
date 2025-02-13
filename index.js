/**
 * Pattern matching for JavaScript. Inspired by the pattern matching in Scala and Rust.
 *
 * @param {*} value - The value to be matched.
 * @param {Object} options - A dictionary of values to be matched against, with
 *     associated values or functions to be executed if the match is successful.
 *     The `default` key can be used to specify a default return value if no
 *     match is found.
 * @returns {*} The result of the match.
 */
export function Match(value, options){
    if (!options.hasOwnProperty(value)) {
        return options.hasOwnProperty('default') ? (typeof options.default === 'function' ? options.default() : options.default) : undefined;
    }

    return typeof options[value] === 'function' ? options[value]() : options[value];
}

/**
 * Pattern matching with a list of conditions. Inspired by the pattern matching
 * in Rust.
 *
 * @param {*} value - The value to be matched.
 * @param {Object[]} conditions - A list of dictionaries of values to be matched
 *     against. Each dictionary should include a `case` key with a function
 *     which returns true or false, and a `result` key with the value to be
 *     returned if the condition is true. An optional `default` key can be
 *     included with a value or function to be returned if none of the
 *     conditions are true.
 * @returns {*} The result of the match.
 */
export function MatchX(value, conditions) {
    for (let condition of conditions) {
        if (condition.default)
            return typeof condition.default === 'function' ? condition.default() : condition.default
        if (condition.case(value))
            return typeof condition.result === 'function' ? condition.result() : condition.result
    }
    
    if (conditions.default)
        return typeof conditions.default === 'function' ? conditions.default() : conditions.default
    return undefined
}
