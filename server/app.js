var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


mongoose.connection.on('connected', () => {
  console.log('mongoose db is connected');
});

var testSchema = new mongoose.Schema({
  name: String
});

mongoose.model('testModel', testSchema).create({ name: 'yuriy'}, (err, doc) => {
  if(err) {
    console.log('err', err)
    return; 
  }

  console.log('doc', doc);
});


var testSchema2 = new mongoose.Schema({
  name2: String
});

mongoose.model('testModel2', testSchema2).create({
  name2: 'Patrick'
}, (err, docs) => {
  if(err) {
    console.log('err', err);
    return;
  }
  console.log('docs', docs);
});

mongoose.model('testModel').find().exec((err, docs) => {
  console.log('docs', docs);
})