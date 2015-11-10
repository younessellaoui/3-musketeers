var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it('should return false if passed parameter type is not arguments', function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
});
describe('is.array', function(){
  it('should return true if passed argument type is array', function(){
    expect(is.array(['value1','value2'])).to.be.true;
  });
  it('should return false if passes argument type is not Array', function(){
    expect(is.array('blabla')).to.be.false;
  });
});

describe('is.boolean', function(){
  it('should return true if passed arugument type is boolean', function(){
    expect(is.boolean(true)).to.be.true;
  });
  it('should return false if passed arugument type is not boolean', function(){
    expect(is.boolean('hello')).to.be.false;
  });
});

describe('is.date', function(){
    it('should return true if passed arugument type is date', function(){
       var myDate=new Date();
       expect(is.date(myDate)).to.be.true;
    });
    it('should return false if passed arugument type is not date', function(){
        expect(is.date('Not a date')).to.be.false;
    });
});
describe('is.error', function(){
    it('should return true if passed arugument type is error', function(){
       var value=new Error();
       expect(is.error(value)).to.be.true;
        });
    it('should return false if passed arugument type is not error', function(){
        expect(is.error('Not a error')).to.be.false;
    });
});
describe('is.function', function(){
    it('should return true if passed arugument type is function', function(){
        var value=new Function();
        expect(is.function(value)).to.be.true;
    });
    it('should return false if passed arugument type is not function', function(){
        expect(is.function('Not a function')).to.be.false;
    });
});
describe('is.nan', function(){
    it('should return true if passed arugument type is NaN', function(){
        var value = NaN;
        expect(is.nan(value)).to.be.true;
    });
    it('should return false if passed arugument type is not NaN', function(){
        expect(is.nan('Not a NaN')).to.be.false;
    });
});
describe('is.null', function(){
    it('should return true if passed arugument type is null', function(){
       expect(is.null(null)).to.be.true;
    });
    it('should return false if passed arugument type is not null', function(){
        expect(is.null('Not a null')).to.be.false;
    });
});
describe('is.object', function(){
    it('should return true if passed arugument type is object', function(){
        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        expect(is.object(person)).to.be.true;
    });
    it('should return false if passed arugument type is not object', function(){
        expect(is.object('Not a object')).to.be.false;
    });
});
describe('is.regexp', function(){
    it('should return true if passed arugument type is regexp', function(){
       var value= new RegExp('ab+c', 'i');
       expect(is.regexp(value)).to.be.true;
    });
    it('should return false if passed arugument type is not regexp', function(){
        expect(is.regexp('Not a regexp')).to.be.false;
    });
});
describe('is.string', function(){
    it('should return true if passed arugument type is string', function(){
       var value= "alireza";
        expect(is.string(value)).to.be.true;
    });
    it('should return false if passed arugument type is not string', function(){
        expect(is.string(null)).to.be.false;
    });
});
describe('is.undefined', function(){
    it('should return true if passed arugument type is undefined', function(){
        var value;
        expect(is.undefined(value)).to.be.true;
    });
    it('should return false if passed arugument type is not undefined', function(){
        expect(is.undefined('Not a undefined')).to.be.false;
    });
});
describe('is.existy', function(){
    it('should return true if passed arugument type is existy', function(){
       var value=3;
        expect(is.existy(value)).to.be.true;
    });
    it('should return false if passed arugument type is not existy', function(){
       expect(is.existy(null)).to.be.false;
    });
});
describe('is.truthy', function(){
    it('should return true if passed arugument type is truthy', function(){
       var value=3;
       expect(is.truthy(value)).to.be.true;
       var value2=true;
       expect(is.truthy(value2)).to.be.true;
       var value3="a";
       expect(is.truthy(value3)).to.be.true;
       var value4=3;
       expect(is.truthy(value4)).to.be.true;
    });
    it('should return false if passed arugument type is not truthy', function(){
       expect(is.truthy(null)).to.be.false;
       expect(is.truthy(false)).to.be.false;
       expect(is.truthy("")).to.be.false;
       expect(is.truthy(0)).to.be.false;
       expect(is.truthy(NaN)).to.be.false;
    });
});
describe('is.falsy', function(){
    it('should return true if passed arugument type is falsy', function(){
       expect(is.falsy(null)).to.be.true;
       expect(is.falsy(false)).to.be.true;
       expect(is.falsy("")).to.be.true;
       expect(is.falsy(0)).to.be.true;
       expect(is.falsy(NaN)).to.be.true;
    });
    it('should return false if passed arugument type is not falsy', function(){
       var value=3;
       expect(is.falsy(value)).to.be.false;
       var value2=true;
       expect(is.falsy(value2)).to.be.false;
       var value3="a";
       expect(is.falsy(value3)).to.be.false;
       var value4=3;
       expect(is.falsy(value4)).to.be.false;
    });
});
describe('is.odd', function(){
    it('should return true if passed arugument type is odd', function(){
       expect(is.odd(3)).to.be.true;
    });
    it('should return false if passed arugument type is not odd', function(){
       expect(is.odd(2)).to.be.false;
    });
});
//is equal
describe('is.negative', function(){
    it('should return true if passed arugument type is negative', function(){
        expect(is.negative(-3)).to.be.true;
    });
    it('should return false if passed arugument type is not negative', function(){
        expect(is.negative(2)).to.be.false;
    });
});
describe('is.under', function(){
    it('should return true if passed arugument type is under', function(){
       var value1=2;
       var value2=3;
       expect(is.under(value1,value2)).to.be.true;
    });
    it('should return false if passed arugument type is not under', function(){
       var value1=2;
       var value2=3;
        expect(is.under(value2,value1)).to.be.false;
    });
});
describe('is.decimal', function(){
    it('should return true if passed arugument type is decimal', function(){
        var value1=5.56789;
        expect(is.decimal(value1)).to.be.true;
    });
    it('should return false if passed arugument type is not decimal', function(){
        var value1=2;
        expect(is.decimal(value1)).to.be.false;
    });
});
describe('is.finite', function(){
    it('should return true if passed arugument type is finite', function(){
        var value1=5;
        expect(is.finite(value1)).to.be.true;
    });
    it('should return false if passed arugument type is not finite', function(){
        var value1=1.7976931348623157E+10308 + "<br>" + -1.7976931348623157E+10308;
        expect(is.finite(value1)).to.be.false;
    });
});
describe('is.infinite', function(){
    it('should return true if passed arugument type is infinite', function(){
       var value1=1.7976931348623157E+10308 + "<br>" + -1.7976931348623157E+10308;
        expect(is.infinite(value1)).to.be.true;
    });
    it('should return false if passed arugument type is not infinite', function(){
        var value1=5;
        expect(is.infinite(value1)).to.be.false;
    });
});
describe('is.upperCase', function(){
    it('should return true if passed arugument type is upperCase', function(){
       var value="ALI";
       expect(is.upperCase(value)).to.be.true;
    });
    it('should return false if passed arugument type is not upperCase', function(){
        var value1="aLI";
        expect(is.upperCase(value1)).to.be.false;
    });
});
describe('is.lowerCase', function(){
    it('should return true if passed arugument type is lowerCase', function(){
        var value="ali";
        expect(is.lowerCase(value)).to.be.true;
    });
    it('should return false if passed arugument type is not lowerCase', function(){
        var value1="ALI";
        expect(is.lowerCase(value1)).to.be.false;
    });
});
//elsa

describe('is.number',function(){
         it('should return true if passed argument type is number', function(){
            argument = 3;
            expect(is.number(argument)).to.be.true;
            });
         it('should return false if passed argument type is not number', function(){
            expect(is.number('pas une nombre')).to.be.false;
            });
         });
describe('is.json',function(){
         it('should return true if passed argument type is json', function(){
            var  argument = {
            "employees":[
                         {"firstName":"John", "lastName":"Doe"},
                         {"firstName":"Anna",  "lastName":"Smith"},
                         {"firstName":"Peter", "lastName":"Jones"}
                         ]
            };
            expect(is.json(argument)).to.be.true;
            });
         it('should return false if passed argument type is not json', function(){
            expect(is.json('pas une date')).to.be.false;
            });
         });
describe('is.sameType',function(){
         it('should return true if passed argument type is the sameType', function(){
            var  argument = 3;
            var argument2 = 4;
            
            expect(is.sameType(argument,argument2)).to.be.true;
            });
         it('should return false if passed argument type is not json', function(){
            expect(is.sameType(argument,'pas le meme type')).to.be.false;
            });
         });
describe('is.char',function(){
         it('should return true if passed argument type is json', function(){
            var  argument = 'a';
            expect(is.char(argument)).to.be.true;
            });
         it('should return false if passed argument type is not json', function(){
            expect(is.char('pas une date')).to.be.false;
            });
         });
describe('is.empty',function(){
         it('should return true if passed argument type is empty', function(){
            var  argument = '';
            expect(is.empty(argument)).to.be.true;
            });
         it('should return true if passed argument type is empty', function(){
            var  argument = '';
            expect(is.empty(argument)).to.be.true;
            });
         
         
         
         
         it('should return false if passed argument type is not empty', function(){
            expect(is.empty('pas une date')).to.be.false;
            });
         });
describe('is.space',function(){
         it('should return true if passed argument type is space', function(){
            var  argument = ' ';
            expect(is.space(argument)).to.be.true;
            });
         it('should return false if passed argument type is not space', function(){
            expect(is.space('pas une date')).to.be.false;
            });
         });
describe('is.even',function(){
         it('should return true if passed argument type is even', function(){
            var  argument = 8;
            expect(is.even(argument)).to.be.true;
            });
         it('should return false if passed argument type is not even', function(){
            expect(is.space('pas une date')).to.be.false;
            });
         });
describe('is.positive',function(){
         it('should return true if passed argument type is positive', function(){
            var  argument = 8;
            expect(is.positive(argument)).to.be.true;
            });
         it('should return false if passed argument type is not positive', function(){
            expect(is.positive('pas une date')).to.be.false;
            });
         });
describe('is.above',function(){
         it('should return true if passed argument type is above', function(){
            var  argument = 8;
            var argument2 = 10
            expect(is.above(argument2,argument)).to.be.true;
            });
         it('should return false if passed argument type is not above', function(){
            expect(is.above('pas une date')).to.be.false;
            });
         
         });
describe('is.within',function(){
         it('should return true if passed argument type is within', function(){
            var  argument = 8;
            var  argument1 = 12;
            var argument2 = 10
            expect(is.within(argument2, argument,argument1)).to.be.true;
            });
         it('should return false if passed argument type is not within', function(){
            expect(is.within('pas une date')).to.be.false;
            });
         });
describe('is.integer',function(){
         it('should return true if passed argument type is integer', function(){
            var  argument = 8;
            
            expect(is.integer(argument)).to.be.true;
            });
         it('should return false if passed argument type is not integer', function(){
            expect(is.integer('pas une date')).to.be.false;
            });
         });
describe('is.include',function(){
         it('should return true if passed argument type is include', function(){
            var  argument ="blablabla";
            var argument2 = "bla";
            
            expect(is.include(argument, argument2)).to.be.true;
            });
         it('should return false if passed argument type is not include', function(){
            expect(is.include('pas une date')).to.be.false;
            });
         });
describe('is.upperCase',function(){
         it('should return true if passed argument type is upperCase', function(){
            var  argument = "BLA";
            
            expect(is.upperCase(argument)).to.be.true;
            });
         it('should return false if passed argument type is not upperCase', function(){
            expect(is.upperCase('pas une date')).to.be.false;
            });
         });