var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
  title: { type: String, unique: true },
  type: { type: String, enum: ['click', 'view'], default: 'movie' },
  caption: { type: String },
  preview: { type: String },
  hero: { type: String }
});

mongoose.model('Resource', ResourceSchema);
