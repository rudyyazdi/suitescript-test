define = function(arr, fun) { return require(arr, fun) };

define(["N/log", "N/file"], function(log, file) {
  fileObj = file.create({
    name: 'test-rudy',
    fileType: file.Type.CSV,
    contents: 'hello',
    folder: 20
  });
  fileObj.save();
  log.debug('success!');
});
