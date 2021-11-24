const TodoList = artifacts.require("./TodoList.sol");

module.exports = function(_deployer) {
  _deployer.deploy(TodoList);
};
