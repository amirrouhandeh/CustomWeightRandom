export const Diagnostics = require('Diagnostics');
const Patches = require("Patches");
(async ()=>{
let genRandom = Patches.outputs.getPulse('genRandom');
let  W0 = await Patches.outputs.getScalar('W0');
let  W1 = await Patches.outputs.getScalar('W1');
let  W2 = await Patches.outputs.getScalar('W2');
let  W3 = await Patches.outputs.getScalar('W3');
let  W4 = await Patches.outputs.getScalar('W4');
let  W5 = await Patches.outputs.getScalar('W5');
let  W6 = await Patches.outputs.getScalar('W6');
let  W7 = await Patches.outputs.getScalar('W7');
let  W8 = await Patches.outputs.getScalar('W8');
let  W9 = await Patches.outputs.getScalar('W9');
function dodo(){
  let arr = [0,1,2,3,4,5,6,7,8,9];
  let freq = Array(W0,W1,W2,W3,W4,W5,W6,W7,W8,W9);
  let n = arr.length;
  let prefix= [];
      prefix[0] = freq[0];
      for (let i = 1; i < n; i++){
        prefix[i] = prefix[i-1].add(freq[i]);
      }
      let X=prefix[9].pinLastValue();
      let r1 = Math.floor((Math.random() * X )) + 1;
      let r2 = Math.floor((Math.random() * X )) + 1;

      //findCeil(prefix, r, 0, n - 1);
      let l1=0;
      let l2=0;
      while (r1>prefix[l1].pinLastValue())
      {
         l1++;
        }
      while (r2>prefix[l2].pinLastValue())
        {
           l2++;
          }
      //let val1= (prefix[l].pinLastValue >= r.valueOf) ? l : -1;
      let RndNum1 = arr[l1];
      let RndNum2 = arr[l2]; 
      Patches.inputs.setScalar('RndNum1',RndNum1);
      Patches.inputs.setScalar('RndNum2',RndNum2);
}
  
  //Calc();
  genRandom.then(e=>{
      e.subscribe(value=>{
          dodo();

          
      });
  });
})();