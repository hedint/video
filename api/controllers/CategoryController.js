/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var controller = {
  name : 'category',
  layout : 'admin/admin_layout',
};
controller.list = `/admin/${controller.name}/list`;
controller.form = `admin/${controller.name}/form`;
controller.add = `/admin/${controller.name}/add`;
controller.edit = `/admin/${controller.name}/edit`;
controller.delete = `/admin/${controller.name}/delete`;


module.exports = {

};

