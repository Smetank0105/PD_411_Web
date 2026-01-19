// JavaScript source code
function createFigures() {
    let n = document.getElementById("figure-size").value;
    let result = document.getElementById("figure-result");

    let figure = '';
    //square
    for (let i = 0; i < n; i++) {
        figure += '* '.repeat(n).trim() + '\n';
    }
    figure += '\n';

    //triangle 1
    for (let i = 1; i <= n; i++) {
        figure += '* '.repeat(i).trim() + '\n';
    }
    figure += '\n';

    //traingel 2
    for (let i = n; i >= 1; i--) {
        figure += '* '.repeat(i).trim() + '\n';
    }
    figure += '\n';

    //traingel 3
    for (let i = n; i >= 1; i--) {
        figure += '  '.repeat(n - i) + '* '.repeat(i).trim() + '\n';
    }
    figure += '\n';

    //traingel 4
    for (let i = 1; i <= n; i++) {
        figure += '  '.repeat(n - i) + '* '.repeat(i).trim() + '\n';
    }
    figure += '\n';

    //rombus
    for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        figure += spaces + '/'.padEnd(i * 2, ' ') + '\\\n';
    }
    for (let i = n; i >= 1; i--) {
        const spaces = ' '.repeat(n - i);
        figure += spaces + '\\'.padEnd(i * 2, ' ') + '/\n';
    }
    figure += '\n';

    //square -+
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += (i + j) % 2 === 0 ? '+ ' : '- ';
        }
        figure += row.trim() + '\n';
    }

    result.textContent = figure;
}

function createChess() {
    let n = document.getElementById('chess-size').value;
    let result = document.getElementById('chess-result');

    let chessboard = '';

    for (let row = 0; row < 8; row++) {
        for (let cellRow = 0; cellRow < n; cellRow++) {
            let line = '';
            for (let col = 0; col < 8; col++) {
                const isWhite = (row + col) % 2 === 0;
                if (isWhite) {
                    line += '* '.repeat(n);
                } else {
                    line += '  '.repeat(n);
                }
            }
            chessboard += line + '\n';
        }
    }
    result.textContent = chessboard;
}