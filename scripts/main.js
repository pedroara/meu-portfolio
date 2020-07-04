let dark = false;

function darkMode(){        
    dark = !dark;
    if(dark === true){
        document.body.style.background = "#333333";    
        document.body.style.color = "#fff";                    
    }else{
        document.body.style.background = "#fff";    
        document.body.style.color = "#4a566e";        
    }
}