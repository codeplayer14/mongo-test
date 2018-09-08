const assert = require('assert');
const User  = require('../src/user');



describe('Creating records', () => {
    

    it('Saves a user', (done) => {

        const paddy  = new User({name:'paddy'});
        paddy.save()
        .then(() => {
            
            assert(!paddy.isNew);
            done();
        });
    })
})