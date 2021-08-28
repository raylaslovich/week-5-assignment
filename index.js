class Runs {
    constructor(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }

    describe()  {
        return `${this.name} is a ${this.difficulty}.`;
    }
}

class Resort {
    constructor(name) {
        this.name = name;
        this.slope = [];
    }
    addDifficulty(difficulty) {
        if(difficulty instanceof Runs) {
            this.slope.push(difficulty);
        } else {
            throw new Error(`You can only add an instance of difficulty. Argument is not a difficulty: ${difficulty}`);
        }
    }
    describe() {
        return `${this.name} is a ${this.slope.length}.`;
    }
}

class Menu {
    constructor () {
        this.skiRuns = [];
        this.selectedSkiRuns = null;
    }

    start() {
        let selection = this.showMainMenuOptions ();
        
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createSkiRun();
                    break;
                case '2':
                    this.viewSkiRun();
                    break;
                case '3':
                    this.deleteSkiRun();
                    break;
                case '4':
                    this.displayAllRuns();
                    break;
                default:
                    selection = 0;
            } 
            selection = this.showMainMenuOptions();
        }
        alert('Later Bro!');
    }

    showMainMenuOptions() {
        return prompt(`
         0) exit
         1) create Ski Run
         2) view Ski Run
         3) delete Ski Run
         4) display all runs
        `)
    }

    showSkiRunOptions(skiRunInfo) {
        return prompt(`
         0) back
         Powder to the People.
    
         --------------------
         ${skiRunInfo};
        `)
    }

    displayAllRuns () {
        let allRunsString = '';
        for (let i = 0; i < this.skiRuns.length; i++) {
            allRunsString += i + ') ' + this.skiRuns[i].name + '\n';
        }
        alert(allRunsString);
    }

    createSkiRun () {
        let name = prompt('Enter name for new Ski Run:');
        this.skiRuns.push(new Runs(name));
    }

    viewSkiRun () {
        let index = prompt('Enter the index of the Ski Run you wish to view.');
        if (index > -1 && index < this.skiRuns.length) { //validate user input. 
            this.selectedSkiRun = this.skiRuns[index];
            let description = 'Ski Run Name: ' + this.selectedSkiRun.name + '\n';

            for (let i = 0; i < this.selectedSkiRun.length; i++) {
                description += i + ') ' + this.selectedSkiRuns.slope[i].name 
                + ' - ' + this.selectedSkiRun.slope[i].difficulty + '\n';
            }

            let selection = this.showSkiRunOptions(description);
            // switch (selection) {
            //     case '1':
            //         this.addDifficulty();
            //         break;
            // }

        
        }
    }
    deleteSkiRun() {
        let index = prompt('Enter the index of the Ski run you wish to delete:');
        if (index > -1 && index < this.skiRuns.length) {
            this.skiRuns.splice(index, 1);
        }

    }


}

let menu = new Menu();
menu.start();