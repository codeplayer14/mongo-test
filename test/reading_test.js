const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database', () => {

    let paddy;

    beforeEach((done) => {
         paddy = new User({name:'paddy'});
         paddy.save()
         .then(()=> {
             done();
         })
    })

    it('finds all users with name of Paddy',(done) => {

        User.find({name:'paddy'})
            .then((users) => {
               
                assert(users[0]._id.toString()===paddy._id.toString())
                done();
            })
            .catch((error) =>{
                console.log(error);
                done();
            });

    });

    it('find a user with a given id ', (done)=>{

        User.findOne({_id:paddy.id})
            .then((user) => {

                assert(user.name==='paddy');
                done();
            })
    });
})