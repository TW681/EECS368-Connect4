let playerTurn=1;
let whoWins="";
let winCondit=false;
let isDraw=false;
let foundLeft=false;
let foundRight=false;
let foundDown=false;
let foundNW=false;
let foundNE=false;
let foundSW=false;
let foundSE=false;
//creates a NULL 2D array


  let grid=new Array(6);
  for(let i=0;i<6;i++)
  {
    grid[i]=new Array(7);
  }

//Makes an empty grid.
function initialize()
{
  for(let i=0;i<6;i++)
  {
    for(let k=0;k<7;k++)
    {
      grid[i][k]="E";
    }
  }
}
//check if winconition is met in the left direction
function checkLeft(row,col,color,count)
{
  if(count==4)
  {
    foundLeft=true;
  }
  else
  {
    if(grid[row][col-1]== color && col-1>=0)
    {

      count++;
      return(checkLeft(row,col-1,color,count));
    }
  }
}
//check if win condition is in the right direction
function checkRight(row,col,color,count)
{

  if(count==4)
  {
    foundRight=true;
  }
  else
  {
    if(grid[row][parseInt(col)+1]== color && parseInt(col)+1<7)
    {
      count++;
      return(checkRight(row,parseInt(col)+1,color,count));
    }
  }
}
//check if win condition is in the down direction
function checkDown(row,col,color,count)
{
  if(count==4)
  {
    foundDown=true;
  }
  else
  {
    if(parseInt(row)+1>5)
    {
      if(grid[row][col]==color)
      {
        count++;
        if(count==4)
        {
          foundDown=true;
        }
      }
    }
    else if(grid[parseInt(row)+1][col]==color && parseInt(row)+1<5)
    {
      count++;
      return(checkDown(parseInt(row)+1,col,color,count))
    }
  }
}
//check if win condition is in the NorthWest direction
function checkNW(row,col,color,count)
{
  if(count==4)
  {
    foundNW=true;

  }
  else
  {
    if(parseInt(row)-1==5 || parseInt(col)-1==0)
    {
      if(grid[parseInt(row)-1][parseInt(col)-1]==color)
      {
        count++;
        if(count==4)
        {
          foundNW=true;
        }
      }
    }
    else if(parseInt(col)-1<0 || parseInt(row)-1<0)
    {
      if(grid[row][col]==color)
      {
        count++;
        if(count==4)
        {
          foundNW=true;
        }
      }
    }
    else if(grid[row-1][col-1]== color && (parseInt(row)-1>0 && parseInt(col)-1>0))
    {
      count++;
      return(checkNW(row-1,col-1,color,count));
    }
  }
}
//check if win condition is in the NorthEast direction
function checkNE(row,col,color,count)
{
  if(count==4)
  {
    foundNE=true;
  }
  else
  {
    if(parseInt(row)-1==5 && parseInt(col)+1==6)
    {
      if(grid[parseInt(row)-1][parseInt(col)+1]==color)
      {
        count++;
        if(count==4)
        {
          foundNE=true;
        }
      }
    }
    else if(parseInt(row)-1<0 || parseInt(col)+1>6)
    {
      if(grid[row][col]==color)
      {
        //count++;
        if(count==4)
        {
          foundNE=true;
        }
      }
    }
    else if(grid[row-1][parseInt(col)+1]== color && (row-1>=0 && parseInt(col)+1<=7))
    {
      count++;
      return(checkNE(row-1,parseInt(col)+1,color,count));
    }
  }
}
//check if win condition is in the SouthWest direction
function checkSW(row,col,color,count)
{
  if(count==4)
  {
    foundSW=true;
  }
  else
  {
    if(parseInt(row)+1==5 || parseInt(col)-1==0)
    {
      if(grid[parseInt(row)+1][parseInt(col)-1]==color)
      {
        count++;
        if(count==4)
        {
          foundSW=true;
        }
      }
    }
    else if(parseInt(row)+1>5 || parseInt(col)-1<0)
    {
      if(grid[row][col]==color)
      {
        count++;
        if(count==4)
        {
          foundSW=true;
        }
      }
    }
    else if(grid[parseInt(row)+1][parseInt(col)-1]== color && (parseInt(row)+1<5 && parseInt(col)-1>0))
    {
      count++;
      return(checkSW(parseInt(row)+1,parseInt(col)-1,color,count));
    }
  }
}
//check if win condition is in the SouthEast direction
function checkSE(row,col,color,count)
{
  if(count==4)
  {
    foundSE=true;
  }
  else
  {
    if(parseInt(row)+1==5 && parseInt(col)+1==6)
    {
      if(grid[parseInt(row)+1][parseInt(col)+1]==color)
      {
        count++;
        if(count==4)
        {
          foundSE=true;
        }
      }
    }
    else if(parseInt(row)+1>5 || parseInt(col)+1>6)
    {

      if(grid[row][col]==color)
      {
        count++;
        if(count==4)
        {
          foundSE=true;
        }
      }
    }
    else if(grid[parseInt(row)+1][parseInt(col)+1]==color && (parseInt(row)+1<5 && parseInt(col)+1<6))
    {
      count++;
      return(checkSE(parseInt(row)+1,parseInt(col)+1,color,count));
    }
  }
}

function checkWin(row,col,color)
{
      if(row==5)
      {
        checkLeft(row,col,color,1);
        checkRight(row,col,color,1);
        checkNW(row,col,color,1);
        checkNE(row,col,color,1);
      }
      else if(row==0)
      {
        checkLeft(row,col,color,1);
        checkRight(row,col,color,1);
        checkDown(row,col,color,1);
        checkSW(row,col,color,1);
        checkSE(row,col,color,1);
      }
      else
      {
        checkLeft(row,col,color,1);
        checkRight(row,col,color,1);
        checkNW(row,col,color,1);
        checkNE(row,col,color,1);
        checkDown(row,col,color,1);
        checkSW(row,col,color,1);
        checkSE(row,col,color,1);
      //checks left
     }
      if(foundLeft==true)
      {
        return(true);
      }
      //checks right
      else if(foundRight==true)
      {
        return(true);
      }
      //check down
      else if(foundDown==true)
      {
        return(true);
      }
      //check NorthWest direction
      else if(foundNW==true)
      {
        return(true);
      }
      //check NorthEast direction
      else if(foundNE==true)
      {
        return(true);
      }
      //check SouthWest direction
      else if(foundSW==true)
      {
        return(true);
      }
      //check SouthEast direction
      else if(foundSE==true)
      {
        return(true);
      }
}

function placeChip(uInput,bottom)
{
      if(bottom==-1)
      {
        window.alert("The column is full! Try a different column");
        //Prevents player turn from switching
        if(playerTurn==1)
        {
          document.querySelector("#Turn").innerHTML="Player Turn: Player 2(Blue)."
          playerTurn=2;
        }
        else if(playerTurn==2)
        {
          document.querySelector("#Turn").innerHTML="Player Turn: Player 1(Red)."
          playerTurn=1;
        }
      }
      else if(grid[bottom][uInput]!="E")
      {
        return placeChip(uInput,bottom-1);
      }
      else if(grid[bottom][uInput]=="E")
      {
          if(playerTurn==1)
          {
            grid[bottom][uInput]="R";
            if(checkWin(bottom,uInput,"R")==true)
            {
              winCondit=true;
              window.alert("Player 1 Wins!");
            }
          }
          else if(playerTurn==2)
          {
            grid[bottom][uInput]="B";
            if(checkWin(bottom,uInput,"B")==true)
            {
              winCondit=true;
              window.alert("Player 2 Wins!");

            }
          }
        }
}

function checkDraw()
{
  let drawcount=0;
  for(let i=0;i<7;i++)
  {
    if(grid[0][i]=="E")
    {
      drawcount++;
    }
  }
  if(drawcount>0)
  {
    isDraw=false;
  }
  else
  {
    isDraw=true;
  }
}
//prints Boardgame
function printGame()
{
  document.querySelector("#Grid").innerHTML ="";
  for(let i=0;i<6;i++)
  {
    for(let k=0;k<7;k++)
    {
      document.querySelector("#Grid").innerHTML += grid[i][k]+" ";
      document.querySelector("#Grid").innerHTML+=" ";
    }
    document.querySelector("#Grid").innerHTML += "<br>";

  }
}

//Fills Board with E's
initialize();
//Prints the game onto the webpage
printGame();
//lets the user know which turn and color begins the game.
document.querySelector("#Turn").innerHTML="Player Turn: Player 1(Red)."

function game()
{
  if(winCondit==true)
  {

  }
  else
  {
      placeChip(userInput,5);
      printGame();
      checkDraw();
      if(isDraw==true)
      {
        winCondit=true;
        window.alert("Draw!");
      }

      //Switches Player Turns
      if(playerTurn==1)
      {
        document.querySelector("#Turn").innerHTML="Player Turn: Player 2(Blue)."
        playerTurn=2;
      }
      else if(playerTurn==2)
      {
        document.querySelector("#Turn").innerHTML="Player Turn: Player 1(Red)."
        playerTurn=1;
      }
  }
}
  document.querySelector("#Column1").addEventListener("click",()=>{
    userInput=0;
    game();
  })
  document.querySelector("#Column2").addEventListener("click",()=>{
    userInput=1;
    game();
  })
  document.querySelector("#Column3").addEventListener("click",()=>{
    userInput=2;
    game();
  })
  document.querySelector("#Column4").addEventListener("click",()=>{
    userInput=3;
    game();
  })
  document.querySelector("#Column5").addEventListener("click",()=>{
    userInput=4;
    game();
  })
  document.querySelector("#Column6").addEventListener("click",()=>{
    userInput=5;
    game();
  })
  document.querySelector("#Column7").addEventListener("click",()=>{
    userInput=6;
    game();
  })
