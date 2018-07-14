var connection = require( "./connection.js" );
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}
  
var orm = {
    selectAll: function ( tableInput, callback ) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query( queryString, function ( err, result ) {
            if ( err ) {
                throw err;
            }
            callback( result );
        } );
    },
    insertOne: function ( table, cols, vals, callback ) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks( vals.length );
        queryString += ") ";

        console.log( queryString );

        connection.query( queryString, vals, function ( err, result ) {
            if ( err ) {
                throw err;
            }

            callback( result );
        } );
    },
    updateOne: function ( table, objColVals, condition, callback ) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql( objColVals );
        queryString += " WHERE ";
        queryString += condition;

        console.log( queryString );
        connection.query( queryString, function ( err, result ) {
            if ( err ) {
                throw err;
            }

            callback( result );
        } );

    }
};

module.exports = orm;
