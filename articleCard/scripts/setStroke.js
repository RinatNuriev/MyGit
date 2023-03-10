export default () => {
    
    $('.smollflag').mouseover(function(e){
        $(e.currentTarget.children).css('stroke', '#E09A78');
    })
    $('.smollflag').mouseleave(function(e){
        $(e.target.children).css('stroke', 'black');
    })
    $('.smollflag').click(function(e){
        $(e.target.children).css('stroke', '#E09A78');
    })

};