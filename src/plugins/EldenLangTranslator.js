const ELtoBF = {
  roll: ">",
  r1: "<",
  r2: "+",
  jump: "-",
  guard: ".",
  parry: ",",
  spam: "[",
  panic: "]",
};

const BFtoEL = {};
for (let key in ELtoBF) {
  BFtoEL[ELtoBF[key]] = key;
}

const translateELtoBF = function (code) {
  let re = /(?:roll|r1|r2|jump|guard|parry|spam|panic)/gi;
  let bfCode = "";
  let ELKeywords = "";
  while ((ELKeywords = re.exec(code)) !== null) {
    let ELKeyword = ELKeywords[0];
    let bfSyl = ELtoBF[ELKeyword];
    bfCode += bfSyl;
  }
  console.log(bfCode);
  return bfCode;
};

// const translateBFtoEL = function (code) {
//   let re = /[><+-.,\]]/gi;
//   let ELcode = "";
//   let bfKeywords = re.exec(code);
//   while (bfKeywords !== null) {
//     let bfKeyword = bfKeywords[0];
//     let ELmove = BFtoEL[bfKeyword];
//     ELcode += ELmove + " ";
//   }
//   return ELcode;
// };

// console.log(
//   translateBFtoEL(
//     "++++[++++>---<]>++.-[--->+<]>++.---------.++++++++.--[--->+<]>.-[---->+<]>++.++[->+++<]>.-.+++++++..-------.-.[->+++<]>++."
//   )
// );

// console.log(
//   translateELtoBF(
//     "r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 spam roll r2 r2 r2 r2 r2 r2 r2 roll r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 roll r2 r2 r2 roll r2 r1 r1 r1 r1 jump panic roll r2 r2 guard roll r2 guard r2 r2 r2 r2 r2 r2 r2 guard guard r2 r2 r2 guard roll r2 r2 guard r1 r1 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 r2 guard roll guard r2 r2 r2 guard jump jump jump jump jump jump guard jump jump jump jump jump jump jump jump guard roll r2 guard roll guard "
//   )
// );

export { translateELtoBF };
