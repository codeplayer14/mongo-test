const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

before( (done) => {


mongoose.connect("mongodb://localhost/users_test",{ useNewUrlParser: true });
mongoose.connection

    .once('open', () => {
        console.log("Good to go!");
        done();
    })
    .on('error',() => {
        
        console.warn("Warning", error);
    })



})
beforeEach((done) => {

    mongoose.connection.collections.users.drop(() => {

        done();
    })
});