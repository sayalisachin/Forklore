$(document).ready(function(){

    $('li').on('mouseover',function(){
        $('.ingredient-image').append("<img src='" + $(this).attr('data-image') + "'>");
    });
    
    $('li').on('mouseout',function(){
        $('.ingredient-image').empty();
    });
    
    var count = $("ul").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");    
        }
    
    $('.recipe-text .slidetoggle').on('click', function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-text').slideToggle();
    });
    
    $('.recipe-directions .slidetoggle').on('click',function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-directions').slideToggle();
    });
    
    $('.comments .slidetoggle').on('click',function(){
        $(this).toggleClass("fa-arrow-up fa-arrow-down");
        $(this).parent().siblings('.inner-comments').slideToggle();
    });
    
    $('.recipe-text ul.need').on('click','li i',function(){
        $(this).parent().appendTo(".ingredients-have .got");
        $(this).removeClass("fa-square-o");
        $(this).addClass("fa-check-square-o");
        var count = $(".recipe-text .need").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");  
        }
    });
    
    $('.ingredients-have ul.got').on('click','li i',function(){
        $(this).parent().appendTo(".recipe-text .need");
        $(this).removeClass("fa-check-square-o");
        $(this).addClass("fa-square-o");
        var count = $(".recipe-text .need").children().length;
        if(count == 0) {
            $('.recipe-text h3').text("You are ready to start cooking!");
        } else {
            $('.recipe-text h3').text("You have " + count + " items left to get!");  
        }
    });
    
    $('.inner-directions').on('click', 'ol li', function(){
        $(this).toggleClass('linethrough');
    });
    
    });
    $(document).ready(function(){
        // Function to format timestamp
        function formatDate(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
        }
    
        // Submit comment
        $('#comment-form').submit(function(event) {
            event.preventDefault();
            var name = $('#comment-name').val();
            var content = $('#comment-content').val();
            var timestamp = formatDate(new Date());
            $('#comment-thread').append('<div class="comment"><span class="comment-info">' + name + ' - ' + timestamp + '</span><p>' + content + '</p><span class="edit-comment">Edit</span><span class="delete-comment">Delete</span></div>');
            $('#comment-form')[0].reset(); // Reset form
        });
    
        // Edit comment
        $(document).on('click', '.edit-comment', function() {
            var comment = $(this).siblings('p').text();
            var name = $(this).siblings('.comment-info').text().split(' - ')[0];
            $('#comment-name').val(name);
            $('#comment-content').val(comment);
            $(this).closest('.comment').remove(); // Remove the comment
        });
    
        // Delete comment
        $(document).on('click', '.delete-comment', function() {
            $(this).closest('.comment').remove();
        });
    });
    $("#create").click(function() {
      $(this).before("<textarea></textarea>");
    });