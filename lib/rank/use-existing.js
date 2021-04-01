"use strict";

var _ = require("../lodash");

module.exports = useExisting;

/*
 * Just use the rank the node already has.
 */
function useExisting(g) {

  function dfs(v) {
    var label = g.node(v);
    var rank = label.rank;

    if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === undefined || // return value of _.map([]) for Lodash 4
        rank === null) { // return value of _.map([null])
      label.rank = 0;
    }

    return label.rank;
  }

  _.forEach(g.sources(), dfs);
}
