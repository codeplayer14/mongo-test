const assert = require('assert');
const User = require('../src/user');

describe('Updating records ', () => {

    let Paddy;

    beforeEach((done) => {

        Paddy = new User({name:'Paddy',likes:0});

        Paddy.save()
            .then(() => {
                done();
            })
    });

    it('instance type using set and save',(done) => {

        Paddy.set('name','Padmanabh');

        Paddy.save()
            .then(() =>  User.find({}))
            .then( (users) => {

                        assert(users.length==1);
                        assert(users[0].name==='Padmanabh');
                        done();

            })
            .catch((error) => {
                console.log(error);
            });
           
        });
    
    it('A user can have their likes increased by 10',(done) => {

        User.update({name:'Paddy'},{$inc:{likes:10}})
            .then(() => {
                User.findOne({name:'Paddy'})
                    .then( (user) => {

                        // console.log(user);
                        assert(user.likes === 10)
                        done();
                    })
                }).catch((err)=>{
                    console.log("Error: " + err);
                });
    })
        
    
});