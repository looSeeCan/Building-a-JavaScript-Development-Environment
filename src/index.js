import './index.css';
import numeral from "numeral";//this numeral package was installed at the begining of the course with all our other dependencies that listed in package.json.
//this is a handy library for formatiing numbrers.

/*eslint-disable no-console*/

const courseValue = numeral(1000).format("$0,0.00");
// debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
//we need to reference this bunle in our html file