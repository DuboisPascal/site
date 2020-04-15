function changementAnimBoite(){
    if(boite.classList.contains("animBoite1")){
        boite.classList.remove("animBoite1");
        boite.classList.add("animBoite2");

        infosContact.classList.add("opaciteT1");
        infosContact.classList.remove("opaciteT2");


        intro.classList.add("opaciteT2");
        intro.classList.remove("opaciteT1");
    }else{
        boite.classList.add("animBoite1");
        boite.classList.remove("animBoite2");


        infosContact.classList.add("opaciteT2");
        infosContact.classList.remove("opaciteT1");


        intro.classList.add("opaciteT1");
        intro.classList.remove("opaciteT2");
    }
}



function changementAnimPropos(){
    if(propos.classList.contains("animPropos1")){
        propos.classList.remove("animPropos1");
        propos.classList.add("animPropos2");

        document.querySelector("ul").classList.remove("opaciteUl1");
        document.querySelector("ul").classList.add("opaciteUl2");
    }else{
        propos.classList.add("animPropos1");
        propos.classList.remove("animPropos2");

        projets.classList.remove("animProjets1");

        document.querySelector("ul").classList.add("opaciteUl1");
        document.querySelector("ul").classList.remove("opaciteUl2");
    }
}



function changementAnimProjets(){
    if(projets.classList.contains("animProjets1")){
        projets.classList.remove("animProjets1");
        projets.classList.add("animProjets2");

        document.querySelector("ul").classList.remove("opaciteUl1");
        document.querySelector("ul").classList.add("opaciteUl2");
    }else{
        projets.classList.add("animProjets1");
        projets.classList.remove("animProjets2");

        propos.classList.remove("animPropos1");

        document.querySelector("ul").classList.add("opaciteUl1");
        document.querySelector("ul").classList.remove("opaciteUl2");
    }
}