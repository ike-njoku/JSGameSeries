class Game {
    // total number of grids 
    totalGrids = 300;
    // total number of rows
    totalColumns = 15;
    // the container holding all the grids
    gridsContainer = document.querySelector('[data-gridsContainer]');


    // build environment;
    build() {
        // ---------create 300gridBoxes and append them to the gridsContainer to serve as the game environment
        // initiate grid number
        let gridNumber = 0;
        let gridRow = 0;
        while (gridNumber < this.totalGrids) {
            // create grid (div)
            let grid = document.createElement('div');
            // add some values to it to determine the rows and columns and grid number ( coordinates )
            // assign a grid number to the created grid
            grid.setAttribute('data-gridNumber', gridNumber);
            // define the columns of the grid being created
            let gridColumn = gridNumber % this.totalColumns;
            // attach the grid column as an attribute to the grid
            grid.setAttribute('data-gridColumn', gridColumn);
            // define the rows on the grids
            // set attribute (grid rows)
            grid.setAttribute('data-gridRow', gridRow);
            if (gridNumber % this.totalColumns == 0) {
                gridRow += 1
            };
            // append the grid to the gridsContainer
            this.gridsContainer.appendChild(grid);
            // increment the gridNumber
            gridNumber++;
        }
    }

    // start game
    start() {}

    // pause game
    pause() {}

    //end game 
    end() {}

}

// export class game 
export { Game };