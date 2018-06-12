var UserProfile = (function() {
    var full_name = "";

    var getName = function() {
        return localStorage.getItem('name');
    };

    var setName = function(name) {
        full_name = name;
        localStorage.setItem('name',name);
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;