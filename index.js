// add solution here
function theBeatlesPlay(musicians, instruments){
var musicianString;
var musicianInstrument=[];
for(var i=0; i<musicians.length; i++){
musicianString= musicians[i] + " plays " + instruments[i];
musicianInstrument[i]=musicianString;
}
return musicianInstrument;
}

function johnLennonFacts(facts) {
var newArray = []; 
let i = 0;

while (i<facts.length) {
newArray.push(`${facts[i]}!!!`);
i++;
}
 return newArray 
}

