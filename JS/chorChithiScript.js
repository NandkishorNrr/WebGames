class ChorChitthi
{
     static character = ["Raja", "Mantri", "Sipai", "Chor"];
     static value = [1000, 500, 300, 0];
     static players = Array(4).fill(null);
     static match = 0;
     static score = [];
     static totalScore = Array(4).fill(0);
     static sc = java.util.Scanner(java.io.BufferedInputStream@639c2c1d);
    static main(args)
    {
        var flag = 1;
        console.log("Welcome to ChorChitthi");
        console.log("Enter name of players:-");
        for (i; i < 4; i++)
        {
            console.log("Player " + (i + 1) + ": ");
            com.terminal.ChorChitthi.players[i] = com.terminal.ChorChitthi.sc.next();
        }
        console.log("\n---***---\n");
        com.terminal.ChorChitthi.match = 3;
        com.terminal.ChorChitthi.score = Array(com.terminal.ChorChitthi.match).fill(0).map(()=>new Array(4).fill(0));
        var remainMatch = com.terminal.ChorChitthi.match;
        while (remainMatch > 0)
        {
            console.log("\n-----------\n");
            console.log("You have " + remainMatch + " chance(s).");
            console.log("Draw(Enter any key): ");
            flag = com.terminal.ChorChitthi.sc.next().charAt(0);
            if (flag > 0)
            {
                com.terminal.ChorChitthi.#play(com.terminal.ChorChitthi.match - remainMatch);
            }
            else
            {
                continue;
            }
            remainMatch--;
        }
        com.terminal.ChorChitthi.#resultBoard();
    }
    static resultBoard()
    {
        console.log("\n---***---\n");
        console.log("SCORE BOARD\n");
        console.log("__________________________________________________________");
        console.info("|%12s |%9s |%9s |%9s |%9s |\n","|Game",com.terminal.ChorChitthi.players[0],com.terminal.ChorChitthi.players[1],com.terminal.ChorChitthi.players[2],com.terminal.ChorChitthi.players[3]);
        console.log("|_________________________________________________________|");
        for (i; i < com.terminal.ChorChitthi.match; i++)
        {
            console.info("|%s |%5d |%9d |%9d |%9d |%9d |\n","Score",(i + 1),com.terminal.ChorChitthi.score[i][0],com.terminal.ChorChitthi.score[i][1],com.terminal.ChorChitthi.score[i][2],com.terminal.ChorChitthi.score[i][3]);
        }
        for (i; i < 4; i++)
        {
            for (j; j < com.terminal.ChorChitthi.match; j++)
            {
                com.terminal.ChorChitthi.totalScore[i] += com.terminal.ChorChitthi.score[j][i];
            }
        }
        console.log("|_________________________________________________________|");
        console.info("|%s |%5s |%9d |%9d |%9d |%9d |\n","Total","=",com.terminal.ChorChitthi.totalScore[0],com.terminal.ChorChitthi.totalScore[1],com.terminal.ChorChitthi.totalScore[2],com.terminal.ChorChitthi.totalScore[3]);
        console.log("|_________________________________________________________|");
    }
    static play(game)
    {
        var chit = [];
        var random = java.util.Random();
        var set = new Set();
        var n = 0;
        var chorIndex = 0;
        var mantriIndex = 0;
        var rajaIndex = 0;
        var chorPata = 0;
        var characterSequence = Array(4).fill(null);
        for (i; i < 4; i++)
        {
            n = random.nextInt(4);
            while (set.has(n))
            {
                n = random.nextInt(4);
            }
            set.add(n);
            chit = com.terminal.ChorChitthi.#getChith(n);
            com.terminal.ChorChitthi.score[this.game][i] += Integer.parseInt(chit[1]);
            for (j; j < 4; j++)
            {
                if (com.terminal.ChorChitthi.score[this.game][j] == 0)
                {
                    chorIndex = j;
                }
                else if (com.terminal.ChorChitthi.score[this.game][j] == 500)
                {
                    mantriIndex = j;
                }
                else if (com.terminal.ChorChitthi.score[this.game][j] == 1000)
                {
                    rajaIndex = j;
                }
            }
            if (com.terminal.ChorChitthi.score[this.game][i] == 0 || com.terminal.ChorChitthi.score[this.game][i] == 300)
            {
                console.log((i + 1) + ": " + com.terminal.ChorChitthi.players[i] + ": *** = ***");
            }
            else
            {
                console.log((i + 1) + ": " + com.terminal.ChorChitthi.players[i] + ": " + chit[0] + " = " + com.terminal.ChorChitthi.score[this.game][i]);
            }
            characterSequence[i] = chit[0];
        }
        console.log("\n " + com.terminal.ChorChitthi.players[rajaIndex] + ": Chor/Sipai ka patalagao");
        chorPata = com.terminal.ChorChitthi.sc.nextInt() - 1;
        console.log(com.terminal.ChorChitthi.players[mantriIndex] + ": " + com.terminal.ChorChitthi.players[chorPata] + " he.");
        if ((chorIndex == chorPata))
        {
            console.log("\nSahi jawab!");
            for (i; i < 4; i++)
            {
                console.log((i + 1) + ": " + com.terminal.ChorChitthi.players[i] + ": " + characterSequence[i] + " = " + com.terminal.ChorChitthi.score[this.game][i]);
            }
        }
        else
        {
            console.log("\nGalat jawab!");
            com.terminal.ChorChitthi.#swap(mantriIndex, chorIndex, this.game);
            for (i; i < 4; i++)
            {
                console.log((i + 1) + ": " + com.terminal.ChorChitthi.players[i] + ": " + characterSequence[i] + " = " + com.terminal.ChorChitthi.score[this.game][i]);
            }
        }
    }
    static swap(mantriIndex, chorIndex, game)
    {
        var temp = com.terminal.ChorChitthi.score[this.game][this.mantriIndex];
        com.terminal.ChorChitthi.score[this.game][this.mantriIndex] = com.terminal.ChorChitthi.score[this.game][this.chorIndex];
        com.terminal.ChorChitthi.score[this.game][this.chorIndex] = temp;
    }
    static getChith(index)
    {
        return [com.terminal.ChorChitthi.character[this.index], new String(com.terminal.ChorChitthi.value[this.index]).toString()];
    }
    play()
    {
        var flag = 1;
        console.log("Welcome to ChorChitthi");
        console.log("Enter name of players:-");
        for (i; i < 4; i++)
        {
            console.log("Player " + (i + 1) + ": ");
            com.terminal.ChorChitthi.players[i] = com.terminal.ChorChitthi.sc.next();
        }
        console.log("\n---***---\n");
        console.log("Enter number of rounds you wont play.");
        com.terminal.ChorChitthi.match = com.terminal.ChorChitthi.sc.nextInt();
        com.terminal.ChorChitthi.score = Array(com.terminal.ChorChitthi.match).fill(0).map(()=>new Array(4).fill(0));
        var remainMatch = com.terminal.ChorChitthi.match;
        while (remainMatch > 0)
        {
            console.log("\n-----------\n");
            console.log("You have " + remainMatch + " chance(s).");
            console.log("Draw(Enter any key): ");
            flag = com.terminal.ChorChitthi.sc.next().charAt(0);
            if (flag > 0)
            {
                com.terminal.ChorChitthi.#play(com.terminal.ChorChitthi.match - remainMatch);
            }
            else
            {
                continue;
            }
            remainMatch--;
        }
        com.terminal.ChorChitthi.#resultBoard();
    }
}
ChorChitthi.main([]);