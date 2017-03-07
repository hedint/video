/**
 * VideoController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add : (req, res) => {
      if (req.method === 'GET') {
        Category.find({}).exec(function (err, categories) {
          return res.view('admin/video/form', {layout: 'admin/admin_layout',
            title:'Добавить видео',
            item : {},
            categories
          });
        });
    }
    if (req.method === 'POST') {
	    let params = req.allParams();
	    let video = {
	      name : params.name,
        description : params.description,
        url : params.url,
          categories: params.categories.map((category_id) => parseInt(category_id))
      };
	    Video.create(video).exec((err, item) => {
	      return res.redirect('/admin/video/list');
      });
    }
  },
  edit : (req, res) => {
    if (req.method === 'GET') {
      Video.findOne({id : parseInt(req.params.id, 10)}).exec((err, item) => {
        console.log(item);
        Category.find({}).exec(function (err, categories) {
          return res.view('admin/video/form', {layout: 'admin/admin_layout',
            title : 'Редактировать видео',
            item,
            categories
          });
        });
      });
    }
    if (req.method === 'POST') {
      let params = req.allParams();
      let video = {
        name : params.name,
        description : params.description,
        url : params.url,
        categories: params.categories.map((category_id) => parseInt(category_id))
      };

      Video.update({id: parseInt(req.params.id, 10)}, video).exec((err, item) => {
        return res.redirect('/admin/video/list');
      });
    }
  },
  delete : (req, res)=>{
    if (req.method === 'GET') {
      Video.destroy({id: parseInt(req.params.id, 10)}).exec((err, item) => {
        return res.redirect('/admin/video/list');
      });
    }
  },
  list : (req, res) => {
	  Video.find().exec((err, items) => {
      return res.view('admin/video/list', {'layout': 'admin/admin_layout', items});
    });
  }
};

