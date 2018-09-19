const assert = require('assert');

const User = require('../src/user');


describe('Validating records',() => {

    it('requires a username' , (done) => {

        const unknown = new User({name:undefined});

        const validationResult = unknown.validateSync();

        const {message} = validationResult.errors.name;
        // console.log(message);

        assert(message==='Name is required.')

        done();
    });
    it ('requires user name longer than 2 chars', (done) => {

        const user =  new User({name:'Al'});
        const validationResult  = user.validateSync();
        const {message} =  validationResult.errors.name;

        assert(message === 'Name should be longer than 2 characters');
        done();
    });

    it('disallows invalid record to be saved',(done) => {

        const user = new User({name:'Al'});

        user.save()
        .catch((validationResult) => {
            
            const {message} = validationResult.errors.name;
            assert(message === 'Name should be longer than 2 characters');
            done();
        })
    })

});