// Business Logic for To-Do List
function Todo() {
  this.objectives = {};
  this.currentId = 0;
}

Todo.prototype.addObjective = function(objective) {
  objective.id = this.assignId();
  this.objectives[objective.id] = objective;
};

Todo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Objectives
function Objective(when, where, what) {
  this.when = when;
  this.where = where; 
  this.what = what;
}
