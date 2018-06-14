var UserProfile = (function() {
    var getName = function() {
        return localStorage.getItem('name');
    };

    var getUsername = function () {
        return localStorage.getItem('username');
    };

    var getDate = function () {
        return localStorage.getItem('date');
    };

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
        setName: setName,
        setUsername: setUsername,
        setDate: setDate,
    }

})();

export default UserProfile;