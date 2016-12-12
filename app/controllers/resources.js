var mongoose = require('mongoose');
var Resource = mongoose.model('Resource');

module.exports.create = function (req, res, next) {
  var resource = new Resource({
    title: req.body.title,
    type: req.body.type,
    caption: req.body.caption,
    preview: req.body.preview,
    hero: req.body.hero
  });

  resource.save()
  .then(function (resource) {
    return res.json(resource)
  })
  .catch(next);

};

module.exports.index = function (req, res, next) {
  Resource.find({})
  .then(function (resources) {
    if(!resources.length) return res.status(404);
    return res.json(resources)
  })
  .catch(next);
};

module.exports.show = function (req, res, next) {
  Resource.find({_id: req.params.resource})
  .then(function (resource) {
    if(!resource.length) return res.status(404);
    return res.json(resource);
  })
  .catch(next);
};

module.exports.remove = function (req, res, next) {
  Resource.find({_id: req.params.resource})
  .then(function (resource) {
    if(!resource.length) return res.status(404);
    return resource.remove();
  })
  .catch(next);
};
