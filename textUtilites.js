

var expect = require('chai').expect;
//alternate way to do this
//var chai = require('chai');
//var expect = chai.expect;

// practice sexpect(true).to.be.true;

function titleCase (title){
    return title.split(' ')
                .map(function(word){
                    return word[0].toUpperCase() + word.substring(1);
                })
                .join(' ');
};

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');