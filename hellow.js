const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function schoolClub(answer1,answer2) {
  if (answer1 === "はい" && answer2 === "はい") {
    return "生徒会";
  } else if (answer1 === "はい" && answer2 === "いいえ") {
    return "運動部";
  } else if (answer1 === "いいえ" && answer2 === "はい") {
    return "文化部";
  } else {
    return "帰宅部";
  }
}
function startPersonalityTest() {
  console.log("学校でどこに所属する？");

  rl.question("質問1: 走るのは好きですか？ (はい/いいえ) ", (answer1) => {
    rl.question("質問2: 読書は好きですか？ (はい/いいえ) ", (answer2) => {
         
      const personalityType = "あなたは" + schoolClub(answer1,answer2) + "です";

      console.log(`所属診断結果: ${personalityType}`);
      rl.close();
    });
  });
}

startPersonalityTest();