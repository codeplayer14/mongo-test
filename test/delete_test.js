const assert = require('assert');
const User = require('../src/user');


describe('Deleting a user',() => {
    let paddy;
    

    beforeEach((done) => {

        paddy = new User({name:'Paddy'});
        paddy.save()
            .then(() =>{

                done();
            })
    })

    it('model instance removed',(done) => {

        paddy.remove()
            .then(() => {

                User.findOne({name:'Paddy'})
                    .then((user) => {

                        assert(user===null);
                        done();
                    })
            })

    });

    it('class method remove',(done) => {

        User.remove({name:'Paddy'})
            .then(() => {

                User.findOne({name:'Paddy'})
                    .then((user) => {
                        assert(user===null);
                        done();
                    })
            });

    });

   
})