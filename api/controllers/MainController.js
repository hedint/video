/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function (req, res) {
	  function allDoneResponse (err, results) {
      console.log(results);
      return res.view('myhome', {title: 'title', videos : results.videos, categories: results.categories});

    }
	  async.auto({
	    videos : (cb) => {
	      Video.find({}).exec(cb);
      },
      categories: (cb) => {
	      Category.find({}).exec(cb);
      }
    }, allDoneResponse);

  }
};

