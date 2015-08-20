$(document).ready(function() {
    $('.listItemInput').focus();

    // Adds to list
      $('.addToList').on('click', function() {
        var itemToAdd = $('input[name="listItemInput"]').val().trim();
        if (itemToAdd) {
            $('.listItems').append('<div class="input"><input type="checkbox" name="item" class="item" value="' + itemToAdd + '" /> '+ itemToAdd +'</div>');
        }
        $('.listItemInput').val('').focus();
    });

    // Removes from list
      $('.item').on('change', function() {
        if($(this).is(':checked') ){
            var parentElem = $(this).parent();
            parentElem.effect('puff', 500, function() {
                parentElem.remove();
            });
        }
    });

      $('.addToListForm').submit(function(e) {
        e.preventDefault();

        return false;
    });

    // $('.listItems').sortable();

});
