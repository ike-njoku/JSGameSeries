// Tetris game app written by ike-njoku david in april 2021
const totalGrids = 300;
const gridContainer = document.querySelector('[data-gridContainer]');
class Tetris {

    // ------------Game Environment ----------

    // build game environment
    buildGameEnvironment() {
        // create small grids

        let i = 0;
        while (i < totalGrids) {
            let createGrid = document.createElement('div');
            gridContainer.appendChild(createGrid);
            console.log(i);
            i++;
        }

    }

    // start game

    // pause game

    // resume game

    // restart game

    // change game speed

    // score a point

    // -------- Tetraminoes ------------

    // select tetramino

    // erase tetramino

    // draw tetramino

    // move trtramino left

    // move tetramino right

    // move tetramino down

    // rotate tetramino





}


const tetris = new Tetris();
tetris.buildGameEnvironment();