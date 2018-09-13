function increment(selector){

    let container = $(selector);
    let fragment = $('div');
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');


    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    fragment.appendTo(container);


    //test area foamation
    textArea
        .addClass('counter')
        .val(0)
        .attr('disabled', true);

    //Butons foramtion
    incrementBtn
        .addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment');

    addBtn
        .addClass('btn')
        .attr('id', 'addBtn');

    //list fomation

    list.addClass('resulut');

    //Events
    $(incrementBtn).on("click", function () {
        textArea.val(+textArea.val() + 2)
        
    });

    $(addBtn).on("click", function () {

        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);

    })



}

increment('#wrapper');