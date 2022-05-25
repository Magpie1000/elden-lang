import Brainfuck from "./brainfuck";

const EldenlangToBF = {
  roll: ">",
  r1: "<",
  r2: "+",
  jump: "-",
  guard: ".",
  parry: ",",
  spam: "[",
  panic: "]",
};

const BFtoEldenLang = {};
for (let key in EldenlangToBF) {
  BFtoEldenLang[EldenlangToBF[key]] = key;
}

function run(code) {
  let is_written = false;
  let program = new Brainfuck(code);
  let output_text = "";
  program.write = function (charCode) {
    if (!is_written) {
      output.innerText = "";
      is_written = true;
    }
    output_text = output_text + String.fromCharCode(charCode);
    try {
      output.innerText = decodeURIComponent(escape(output_text));
    } catch (e) {
      if (e instanceof URIError) {
      } else {
        throw e;
      }
    }
  };
  program.read = function () {
    return parseInt(prompt("입력 (UTF-8 인코딩하여 1byte씩 16진수로)"), 16);
  };
  program.run();
  if (output.innerText == "") {
    set_output_off();
  }
}
