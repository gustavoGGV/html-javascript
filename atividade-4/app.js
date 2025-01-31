function loadArchive(container, arc) {

    fetch(arc).
    then(archive => archive.text()).
    then(element => {
        document.getElementById(container).innerHTML = element;
    }).
    catch(error=>console.log("Erro ao carregar o arquivo " + arc));

};

loadArchive("container-sidebar", "sidebar.html");
loadArchive("container-navbar", "navbar.html");
