var UserProfile = (function() {
    var getRun = function(){
        return localStorage.getItem('run');
    }

    var getName = function() {
        return localStorage.getItem('name');
    };

    var getUsername = function () {
        return localStorage.getItem('username');
    };

    var getDate = function () {
        return localStorage.getItem('date');
    };

    var setRun = function(run){
        let Run = run;
        localStorage.setItem('run',Run);
    }

    var setName = function(name) {
        let Name = name;
        localStorage.setItem('name',Name);
    };

    var setUsername = function (username) {
        let Username = username;
        localStorage.setItem('username',Username);
    };

    var setDate = function (date) {
        let Date = date;
        localStorage.setItem('date',Date);
    };

    return {
        getName: getName,
        getUsername: getUsername,
        getDate: getDate,
        getRun:getRun,
        setName: setName,
        setUsername: setUsername,
        setDate: setDate,
        setRun:setRun
    }

})();

export default UserProfile;