

var expect = require('chai').expect;
//alternate way to do this
//var chai = require('chai');
//var expect = chai.expect;

// practice sexpect(true).to.be.true;

function titleCase (title){
    return title;
};

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');