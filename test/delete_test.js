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

    it('model instance removed',() => {

    });

    it('class method remove',() => {

    });

    it('class method findAndRemove',() =>{

    })

    it('class method findAndRemoveById',() =>{

        
    })
})