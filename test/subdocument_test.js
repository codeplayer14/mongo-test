const assert = require('assert');
const User = require('../src/user');



describe("Adding subdocuments",() => {


    it("Can add subdocuments to an existing record",(done) => {

        const paddy = new User({

            name:'Paddy',
            posts:[]

        });

        paddy.save()
            .then( () => User.findOne({name:'Paddy'}))
            .then( user => {
                
                user.posts.push({title:'New Post'});
                return user.save();
                
            })
            .then(() => User.findOne({name:'Paddy'}))
            .then((user) => {

                assert(user.posts[0].title === 'New Post');
                done();
            });
    });
})