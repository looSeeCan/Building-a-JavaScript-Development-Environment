//We'll begin by creating a file that will configure our tests
//This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before our tests run
require('@babel/register')();//require babel register. This will tell Mocha that first Babel should transipile our tests before Mocha runs those tests.

//Disable webpack features that Mocha doesn't understand.
require.extensions[".css"] = function() {};//disable any webpacks that Mocha does not understand, in this case the CSS extension
//something about webpack understands the index.css file that is being imported in the index.js file, but Mocha does not
// if it sees the .css then treat is as an empty function
