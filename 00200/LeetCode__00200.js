var numIslands = function(grid) {
    
    let result = 0;
    const Height = grid.length;
    const Width = Height && grid[0].length;

    for(let row = 0; row < Height; row++) {
        for(let col = 0; col < Width; col++ ) {
            if( grid[row][col] == '1' ) {
                result++;
                recursiveResetIsland(row, col);
            }
        }
    }

    function recursiveResetIsland(row,col){
        if (row < 0 || col < 0 || row === Height || col === Width) return;
        if (grid[row][col] == '0') return;
        grid[row][col] = '0';
        recursiveResetIsland(row + 1, col);
        recursiveResetIsland(row - 1, col);
        recursiveResetIsland(row, col + 1);
        recursiveResetIsland(row, col - 1);
    }

    return result;
};

// Test Data
const test01 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0],    
];
const test02 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1],    
];
const result = numIslands(test01);
console.log(result);