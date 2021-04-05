// Tetris game app written by ike-njoku david in april 2021
const totalGrids = 300;
// if the total columns is changed, make complementary changes in tetris.style.css
const totalColumns = 15;
const gridContainer = document.querySelector('[data-gridContainer]');
// define the array of tetraminoes
const tetraminoes = [
    ["T-tetramino", [1, 15, 16, 17]],

    ["L-tetramino", [7, 22, 37, 38],
        [1, 2, 3, 18],
        [8, 23, 24, 25]
    ],

]



class Tetris {

    // current tetramino
    currentTetramino;

    // current position

    // game score
    score;

    // ------------Game Environment ----------

    // build game environment
    buildGameEnvironment() {
        // create small grids

        let i = 0;
        // initialize the rows (starting at -1 because the row value increments and it's meant to be zero based)
        let row = -1;
        while (i < totalGrids) {
            // create grids
            let createGrid = document.createElement('div');
            // --- add attrubutes to the grids
            // add grid numbers
            createGrid.setAttribute('data-grid', i);
            // add column nuners
            let column = i % totalColumns;
            createGrid.setAttribute('column', column);
            // add rows to the grids
            if (column == 0) row += 1;
            createGrid.setAttribute('row', row);
            // append the grids to the grid container
            gridContainer.appendChild(createGrid);
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
    drawTetramino() {
        // find a starting point
        const grids = document.querySelectorAll('[data-grid]');
        // reference point to start drawing from
        let referencePoint = 12;
        // loop through the grids to find which grids would become coordinates by adding the reference point to them
        grids.forEach((grid) => {
            // loop through the predefined tetramino coordinates and add the reference point to them to figure where they should be drawn
            tetraminoes[0][1].forEach((tetraminoCoordinate) => {
                // if the grid number matches the ones returned after adding the reference point, colour it;
                if (grid.getAttribute('data-grid') == tetraminoCoordinate + referencePoint)
                    grid.classList.add(tetraminoes[0][0]);
            })
        });


    }

    // move trtramino left

    // move tetramino right

    // move tetramino down

    // rotate tetramino





}


const tetris = new Tetris();
tetris.buildGameEnvironment();
tetris.drawTetramino();