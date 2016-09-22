require(["N/log"], function(log) {
  log.debug('success!');
});


// -------  OR:

define = function(arr, fun) { return require(arr, fun) };

define(["N/log"], function(log) {
  log.debug('success!');
});
