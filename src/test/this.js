const obj = {
  name: "Shubham",
  greetFun() {
    console.log(`Normal Function-> Hello,${this.name}`);
  },
  arrowFun: () => {
    console.log(`Arrow Function-> Hello,${this.name}`);
  },
};

obj.greetFun();
obj.arrowFun();
