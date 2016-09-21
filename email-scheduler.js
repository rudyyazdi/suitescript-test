/**
 * @NApiVersion 2.x
 */

define(['N/search', 'N/record', 'N/email', 'N/runtime'],
  function(search, record, email, runtime) {
    function execute(context) {
      console.log('success')
    }
    return {
      execute: execute
    };
  }
);
