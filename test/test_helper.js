const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

before( (done) => {

    
    
    mongoose.connect("mongodb://localhost/users_test",{ useNewUrlParser: true });
    mongoose.connection
    
    .once('open', () => {
        // console.log(mongoose.connection.collections)
        console.log("Good to go!");
        done();
    })
    .on('error',() => {
        
        console.warn("Warning", error);
    })
    


})
beforeEach((done) => {
    const {users,comments,blogposts} = mongoose.connection.collections;
    
    users.drop( () => {
        comments.drop( () => {
            blogposts.drop(() => {

                done();
            })
        })
    })
});