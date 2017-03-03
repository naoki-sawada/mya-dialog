export default function combination(max, count) {
  var generated = new Array();
  var generatedCount = generated.length;
  for(var i = 0 ; i < count; i++){
    var candidate = Math.floor(Math.random() * max);
    for(var j = 0; j < generatedCount; j++) {
      if(candidate == generated[j]){
        candidate = Math.floor(Math.random() * max);
        j= -1;
      }
    }
    generated[i] = candidate;
    generatedCount++;
  }
  return generated;
}
