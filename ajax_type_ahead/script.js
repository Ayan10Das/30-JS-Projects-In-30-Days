/*  ****** IMPORTANT *****
What is a Regular Expression (RegExp)?
Ans.-->A regular expression is a pattern used to match text.

It can check:
1) if a string contains something

2) extract parts of a string

3) replace patterns in strings

4) validate formats (like email, password)

            ****   Syntax   ****   Traditional Regex Syntax (a.k.a. Regex Literal)
            /pattern/flags

1) / — start and end of the regex pattern

2) pattern — the rules of what you want to match

3) flags — optional letters to change behavior (g, i, m, etc.)

                📍 Common Flags:
    Flag	Description
   1) g	(Global – match all, not just first)
   2) i	(Case-insensitive)
   3) m	(Multi-line match)

                ** patterns **
  ^	 Start of string
  $	 End of string
  .	 Any character
  \d Digit (0–9)

*/  

//    Traditional Regex Syntax (a.k.a. Regex Literal)

const reggExp= /dog/gi  //  Creating the Regular Expression, pattern:-> /dog/, flag:-> g , i
let exp="A dog is a DOG"; // Input 
console.log(reggExp.test(exp))// true

//    But if the pattern is dynamic (coming from a variable), you cannot use /.../.

//   new RegExp() is a way to create a regular expression object dynamically, instead of using the usual
//  /pattern/ syntax.

function createRegExpCheck(patternStr,test){
    const newRegexp=new RegExp(patternStr,"gi");
    console.log(test.match(newRegexp));// [ 'dog', 'DOG' ]
}
createRegExpCheck("dog","a dog is is a DOG")