if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(reduceMethod) {
    let reduced = 0;
    for (var i = 0; i < this.length; i++) {
      reduced = reduceMethod(reduced, this[i]);
    }
    return reduced;
  };
}

const a = [1, 2, 3, 4, 5];
console.log(
  a.pcReduce((sum, item) => {
    return sum + item;
  })
);
