using { com.user as cu } from '../models/schema-user';

@impl: 'srv/api/controller/user-controller.js'

service UserServiceRoute @(path: '/api/users'){
    entity UserSrv as projection on cu.user;

    @Core.Description:'get-all-users'
    @path:'getall'
    function getall()
    returns array of UserSrv;

    @Core.Description:'addOne-user'
    @path : 'addOne'
    action addOne(user : UserSrv)
    returns array of UserSrv;

    @Core.Description: 'deleteOne-user'
    @path : 'deleteOne'
    action deleteOne(user : UserSrv)
    returns array of UserSrv;

    @Core.Description: 'updateOne-user'
    @path : 'updateOne'
    action updateOne(user: UserSrv)
    returns array of UserSrv;
}
