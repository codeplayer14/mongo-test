const mongoose = require('mongoose');

const assert = require('assert');


const User = require('../src/user');
const BlogPost = require('../src/BlogPost');


describe('MiddleWare' , () => {

    let paddy,blog;

    beforeEach((done) => {

        paddy = new User({name:'Paddy'});
        blog = new BlogPost({title:"South Park",content:'Best show ever'});

        paddy.blogPosts.push(blog);
        Promise.all([paddy,blog]).then(() => {

            done();
        })

    });

    it('users clean up dangling blogposts on remove', (done) => {


        paddy.remove()
        .then(() => BlogPost.count())
        .then((count) => {
            
            assert(count===0);
            done();
        });
    })
})