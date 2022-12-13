import fetch from "node-fetch";

const userAction = async () => {
    let category = 'society_and_culture'
    let difficulty = 'hard'
    const response = await fetch('https://the-trivia-api.com/api/questions?categories=' + category + '&limit=1&difficulty=' + difficulty);
    const myJson = await response.json(); 
    console.log("QUESTION:")
    console.log(myJson[0]['question'].toString())
      console.log("CORRECT ANSWER:")
    console.log(myJson[0]['correctAnswer'].toString())
      console.log("OTHER OPTIONS:")
    console.log(myJson[0]['incorrectAnswers'].toString())
  }
userAction()

/*
CATEGORIES | KEYWORD:
Arts & Literature | arts_and_literature
Film & TV | film_and_tv
Food & Drink | food_and_drink
General Knowledge | general_knowledge
Geography | geography
History | history
Music | music
Science | science
Society & Culture | society_and_culture
Sports | sports

- retrieve category + difficulty from selection -> call to api [handle failed calls/q has already been answered] -> store q in ds/update score accordingly -> push score to firebase
- "insert" correct answer into incorrect answer arr + compare user answer to correct answer
- need an arr/hashtable/ds to store questions the user has answered this round (temp)
*/