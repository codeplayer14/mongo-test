const mongoose = require('mongoose');
const User = require('../src/user')
const Comment = require('../src/comment');
const BlogPost = require('../src/BlogPost');


describe('Assosciations', () => {

    
    beforeEach((done) => {
        
        let paddy = new User({name:'paddy'});
        let comment = new Comment({content:'Awesome bro!'});
        let blogPost = new BlogPost({title:'South Park',content:"An article on South Park!"}); 
        
        paddy.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = paddy;


        Promise.all([paddy.save(),blogPost.save(),comment.save()])
            .then( () => {

                done(); 
            })
    })

    it.only('Assosciates blogpost with user' ,(done) => {

        User.findOne({name:'paddy'})
            .then((user) => {

                console.log(user);
                done();
            })
    })
})