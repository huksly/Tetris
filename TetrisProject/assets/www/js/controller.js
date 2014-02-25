document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

function up(){
    keyPress( 'rotate');
    render();
}

function left(){
    keyPress( 'left');
    render();
}
function right(){
    keyPress( 'right');
    render();
}
function down(){
    keyPress( 'down');
    render();
}