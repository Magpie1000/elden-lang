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

export { translateELtoBF };
