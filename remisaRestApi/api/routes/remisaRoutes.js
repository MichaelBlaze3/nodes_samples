'use strict';
module.exports = function (app) {
    var remisa = require('../controllers/remisaController');

    app.route('/tasks')
        .get(remisa.list_all_tasks)
        .post(remisa.create_a_task);

    app.route('/tasks/:taskId')
        .get(remisa.read_a_task)
        .put(remisa.update_a_task)
        .delete(remisa.delete_a_task);
};