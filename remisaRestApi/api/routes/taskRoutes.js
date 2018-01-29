'use strict';
module.exports = function (app) {
    var remisa = require('../controllers/taskController');

    app.route('/tasks')
        .get(remisa.list_all_tasks)
        .post(remisa.create_a_task);

    app.route('/tasks/:taskId')
        .get(remisa.read_a_task)
        .put(remisa.update_a_task)
        .delete(remisa.delete_a_task);

    var users = require('../controllers/userController');
    
    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_a_user);

    app.route('/users/:userId')
        .get(users.list_a_user)
        .put(users.update_a_user);
};