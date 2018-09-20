const mongoose = require('mongoose');
const assert = require('assert');
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

    it('Assosciates blogpost with user' ,(done) => {

        User.findOne({name:'paddy'})
            .populate('blogPosts')
            .then((user) => {

                // console.log(user.blogPosts[0]);
                done();
            })
    })

    it('saves a full relation graph', (done) => {

        User.findOne({name:'paddy'})
            .populate({
                path:'blogPosts',
                populate:{
                    path:'comments',
                    model:'comment',
                    populate:{
                        path:'user',
                        model:'user'
                    }
                }
            })
            .then((user) => {
                assert(user.name === 'paddy');
                assert(user.blogPosts[0].title === 'South Park');
                assert(user.blogPosts[0].comments[0].user.name==='paddy')
                done();
            })
    })
})