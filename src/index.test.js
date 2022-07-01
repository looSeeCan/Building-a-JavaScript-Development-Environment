//mocha does not come with an assertion library, so we are going to use Chai
import {expect} from "chai"//named reference
import jsdom from "jsdom";
import fs from "fs";//which comes bundled with node so we can interact with the file system 

describe("Our first test",() => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

//lets add a second test that puts jsdom to use. import jsdom and fs
describe("index.html", () => {//we are testing index.html
    it("should say hello", () => {
        const index = fs.readFileSync("./src/index.html", "utf-8");//this variable index is going to hold the results of reading our index.html. use fs to call readFileSync, then pass it the path to our file. This will read our file and store it in index
        // console.log("index:", index);
        const {JSDOM} = jsdom;//call jsdom to get an instance of it. Destructure the jsdom object that we get from jsdom {}
        // console.log("JSDO:", {JSDOM});
        const dom = new JSDOM(index);//instantiate the DOM and pass it the content of the index file tha we read up above
        // console.log(dom);
        const h1 = dom.window.document.getElementsByTagName("h1")[0];//declare a constant that holds our h1 tag on the page. Since we are only looking for the first one. The 0 is for the first index in the arrray
        console.log(h1);
        expect(h1.innerHTML).to.equal("Building a JavaScript Development Environment");//
        dom.window.close();//finally clean up by closing our window
    })
});

