// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

$(function() {
    const table  = $(".app-screen");
	const pixels = 1024;

	for(let pixel = 1; pixel <= pixels; pixel++) {
		table.append('<div class="pixel"></div>');
	}

    // Sélection de la couleur
    let darkestgreen = $(".bg_darkestgreen");
    let darkgreen = $(".bg_darkgreen");
    let green = $(".bg_green");
    let lightgreen = $(".bg_lightgreen");
    
    
    darkestgreen.click(function() {
        lightgreen.removeClass("is-active");
        green.removeClass("is-active");
        darkgreen.removeClass("is-active"); 
        darkestgreen.addClass("is-active");
        $(".pixel").click(function() {
            $(this).css("backgroundColor", "black");
        });
    });

    darkgreen.click(function() {
        lightgreen.removeClass("is-active");
        green.removeClass("is-active");
        darkgreen.addClass("is-active"); 
        darkestgreen.removeClass("is-active");
        $(".pixel").click(function() {
            $(this).css("backgroundColor", "darkgreen");
        });
    });

    green.click(function() {
        lightgreen.removeClass("is-active");
        green.addClass("is-active");
        darkgreen.removeClass("is-active"); 
        darkestgreen.removeClass("is-active");
        $(".pixel").click(function() {
            $(this).css("backgroundColor", "green");
        });
    });

    lightgreen.click(function() {
        lightgreen.addClass("is-active");
        green.removeClass("is-active");
        darkgreen.removeClass("is-active"); 
        $(".pixel").click(function() {
            $(this).css("backgroundColor", "lightgreen");
        });

    });

    let reset = $(".reset");
    reset.click(function() {
        $(".pixel").remove();
    });  

});