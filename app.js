//I need to create a function that lets me move the colored divs, but first I need to identify objects to manipulate

$(fuction() {
    let $stacks = $('[data-stock');
    let $blocks = $('[data-block]');
    //the game only allows the last child of every stack to make the move, so I need to make them "moveable"
    let $moveableBlocks = $(['data-block]:last-child');

    //Any block should be made moveable, but return to it's preveious position if the condition isn't met
    $blocks.draggable({
        revert:true
    });

    $stacks.droppable({
        accept: ".moveable", drop: function(event, ui) {
            
        }
    })
})