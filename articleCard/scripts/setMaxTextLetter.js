export default () => {
    $('.articlelBlock_card_text').each(function(card) {
        const fullText = $(this).text();
        const textLength = $(this).text().length;
        if(textLength > 350) {
            $(this).next().show();
            $(this).text((i, text) => {
                
                text = text.slice(0, 350);
                $(this).text(text + '...');
                             
            });     
            $(this).next().click(function(e){
                $(e.currentTarget).hide();
                $(e.currentTarget).prev().text(fullText);
               
            });
        }

        

        
    });
    
};