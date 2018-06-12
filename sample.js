class HelloWorld {
  apply(compiler) {

    compiler.plugin('emit', function(compilation, callback) {
      console.log(compilation.chunks);
      callback();
    });

    compiler.plugin("done", () => {
      console.log("Hello world");
  })
}
}

module.exports = HelloWorld;