var DataTypes = require("sequelize").DataTypes;
var _action = require("./action");
var _artifact = require("./artifact");
var _assignee = require("./assignee");
var _attachment = require("./attachment");
var _collaboration = require("./collaboration");
var _project = require("./project");
var _role = require("./role");
var _state = require("./state");
var _task = require("./task");
var _user = require("./user");

function initModels(sequelize) {
  var action = _action(sequelize, DataTypes);
  var artifact = _artifact(sequelize, DataTypes);
  var assignee = _assignee(sequelize, DataTypes);
  var attachment = _attachment(sequelize, DataTypes);
  var collaboration = _collaboration(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var state = _state(sequelize, DataTypes);
  var task = _task(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  action.belongsTo(artifact, { as: "subject_artifact_artifact", foreignKey: "subject_artifact"});
  artifact.hasMany(action, { as: "action", foreignKey: "subject_artifact"});
  attachment.belongsTo(artifact, { as: "artifact_artifact", foreignKey: "artifact"});
  artifact.hasMany(attachment, { as: "attachment", foreignKey: "artifact"});
  collaboration.belongsTo(project, { as: "project_project", foreignKey: "project"});
  project.hasMany(collaboration, { as: "collaboration", foreignKey: "project"});
  collaboration.belongsTo(role, { as: "role_role", foreignKey: "role"});
  role.hasMany(collaboration, { as: "collaboration", foreignKey: "role"});
  action.belongsTo(state, { as: "state_state", foreignKey: "state"});
  state.hasMany(action, { as: "action", foreignKey: "state"});
  action.belongsTo(task, { as: "subject_task_task", foreignKey: "subject_task"});
  task.hasMany(action, { as: "action", foreignKey: "subject_task"});
  assignee.belongsTo(task, { as: "task_task", foreignKey: "task"});
  task.hasMany(assignee, { as: "assignee", foreignKey: "task"});
  attachment.belongsTo(task, { as: "task_task", foreignKey: "task"});
  task.hasMany(attachment, { as: "attachment", foreignKey: "task"});
  action.belongsTo(user, { as: "actor_user", foreignKey: "actor"});
  user.hasMany(action, { as: "action", foreignKey: "actor"});
  assignee.belongsTo(user, { as: "user_user", foreignKey: "user"});
  user.hasMany(assignee, { as: "assignee", foreignKey: "user"});
  collaboration.belongsTo(user, { as: "user_user", foreignKey: "user"});
  user.hasMany(collaboration, { as: "collaboration", foreignKey: "user"});
  task.belongsTo(user, { as: "owner_user", foreignKey: "owner"});
  user.hasMany(task, { as: "task", foreignKey: "owner"});

  return {
    action,
    artifact,
    assignee,
    attachment,
    collaboration,
    project,
    role,
    state,
    task,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
