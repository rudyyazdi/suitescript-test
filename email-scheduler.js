/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 */

define(['N/search', 'N/record', 'N/email', 'N/runtime', 'N/log'],
  function(search, record, email, runtime, log) {
    function execute(context) {
      log.debug('success!');
    }
    return {
      execute: execute
    };
  }
);
