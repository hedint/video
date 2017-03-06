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
controller.list_view = `admin/${controller.name}/list`;
controller.form = `admin/${controller.name}/form`;
controller.add = `/admin/${controller.name}/add`;
controller.edit = `/admin/${controller.name}/edit`;
controller.delete = `/admin/${controller.name}/delete`;


module.exports = {
  add : (req, res) => {
    if (req.method === 'GET') {
      return res.view(controller.form, {layout: controller.layout, title:'Добавить категорию', item : {}});
    }
    if (req.method === 'POST') {
      let params = req.allParams();
      let category = {
        name : params.name,
        description : params.description,
        url : params.url
      };
      Category.create(category).exec((err, item) => {
        return res.redirect(controller.list);
      });
    }
  },
  edit : (req, res) => {
    if (req.method === 'GET') {
      Category.findOne({id : parseInt(req.params.id, 10)}).exec((err, item) => {
        return res.view(controller.form, {layout: controller.layout, title : 'Редактировать категорию', item});
      });
    }
    if (req.method === 'POST') {
      let params = req.allParams();
      let category = {
        name : params.name,
        description : params.description,
        url : params.url
      };

      Category.update({id: parseInt(req.params.id, 10)}, category).exec((err, item) => {
        return res.redirect(controller.list);
      });
    }
  },
  delete : (req, res)=> {
    if (req.method === 'GET') {
      Category.destroy({id: parseInt(req.params.id, 10)}).exec((err, item) => {
        return res.redirect(controller.list);
      });
    }
  },
  list : (req, res) => {
    Category.find().exec((err, items) => {
      return res.view(controller.list_view, {layout: controller.layout, items});
    });
  }
};

