var UserProfile = (function() {
    var full_name = "";
    var department = "";
    var id = "";    
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };

    var getDepartment = function() {
        return department;    // Or pull this from cookie/localStorage
      };
    
      var setDepartment = function(department) {
        fulldepartment = department;     
        // Also set this in cookie/localStorage
      };
      var getId = function() {
        return id;    // Or pull this from cookie/localStorage
      };
    
      var setId = function(id) {
        id = id;     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      setName: setName,
      getDepartment:getDepartment,
      setDepartment:setDepartment,
      getId:getId,
      setId:setId
    }
  
  })();
  
  export default UserProfile;