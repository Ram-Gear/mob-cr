// Verifies every formula cell of mob-to-cr.xls Sheet1 (cached values read from the original .xls) against calc.js.
const {calc,EXAMPLE}=require('./calc.js');const exp=require('./expected.json');const c=calc(EXAMPLE);
let bad=0,maxRel=0;
for(const[k,xl]of Object.entries(exp)){const js=c[k];const rel=Math.abs(js-xl)/Math.max(1e-12,Math.abs(xl));maxRel=Math.max(maxRel,rel);const ok=rel<1e-9;if(!ok)bad++;
 console.log(k.padEnd(4),String(js).padStart(22),String(xl).padStart(22),ok?'OK':'FAIL',rel.toExponential(1));}
console.log(`${Object.keys(exp).length} cells, ${bad} failures, max rel err ${maxRel.toExponential(2)}`);process.exit(bad?1:0);
