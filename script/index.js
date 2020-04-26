var GetTheJack = {
    selectJack : function() {
        let players = ["player1", "player2", "player3", "player4"];
        let assignCard = players[Math.floor(Math.random() * players.length)];
        this.assignJack(players, assignCard);
    },

    assignJack : function(players, setCard) {
        
        this.highlightJack(setCard);

        // players.forEach(element => {
        //     if(setCard === "player1") {
        //         let assignAttributes = document.querySelector("#player1").appendChild(generateAssignmentBlock);
        //         assignAttributes.setAttribute({"class": "selected-jack", "id" : "selectedJack"});
        //     } else if(setCard === "player2") {
        //         let assignAttributes = document.querySelector("#player1").appendChild(generateAssignmentBlock);
        //         assignAttributes.setAttribute({"class": "selected-jack", "id" : "selectedJack"});
        //     } else if(setCard === "player3") {
        //         let assignAttributes = document.querySelector("#player1").appendChild(generateAssignmentBlock);
        //         assignAttributes.setAttribute({"class": "selected-jack", "id" : "selectedJack"});
        //     } else if(setCard === "player4") {
        //         let assignAttributes = document.querySelector("#player1").appendChild(generateAssignmentBlock);
        //         assignAttributes.setAttribute({"class": "selected-jack", "id" : "selectedJack"});
        //     }
        // });
    },
    
    highlightJack : function(getPlayer) {
        let setPlayer = "#"+getPlayer;
        let generateAssignmentBlock = document.createElement("span");
        let assignAttributes = document.querySelector(setPlayer).appendChild(generateAssignmentBlock);
        assignAttributes.setAttribute("class", "selected-jack");
        assignAttributes.setAttribute("id" ,"selectedJack");
        let highlightPlayer = document.querySelector("#selectedJack").parentElement;
        highlightPlayer.childNodes[1].classList.remove("card-img-bdr");
        highlightPlayer.setAttribute("class", "this-is-jack");
    },
}

