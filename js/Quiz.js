class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();

    
    //write code to change the background color here
     background("magenta")
  
    //write code to show a heading for showing the result of Quiz
    fill("red")
    textSize(40)
    text("Results for the Quiz",400,40);


    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined)
     {
       fill("blue")
       textSize(20)
       text("*Note: Contestant who answered correct are highlighted in green colour ",200,250)
     
  
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
    var correctAns = "3";
    if(correctAns === allContestants[plr].answer)
    {
      fill("Green")
      textSize(20)
      text(allContestants[plr].name,400,350)
    }
    else
    {
       fill("Red")
       textSize(20)
      text(allContestants[plr].name,300,350)
    }
  }
  }

} 

}
