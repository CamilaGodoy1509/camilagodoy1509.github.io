let xhr = new XMLHttpRequest();
let url = "https://api.github.com/users/CamilaGodoy1509/repos";

xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        for (let i = 0; i < obj.length; i++) {
            document.getElementById('div').innerHTML +=
                '<section>' + "<h1>" + "<center>" + obj[i].name + '</center>' + '</h1>' +
                '<center>' + '<span>' + obj[i].language + '</span>' + '</center>' +
                '<center>' + "<img src='images/" + obj[i].name + ".png'>" + '</center>' +
                '<center>' + "<a href='" + obj[i].html_url + "'>" + "Link para o Repositório" + "</a>" + '</center>' + "<br>" + "<br>" +
                "<center>" + "<center>" + "<a href='index2.html' onclick='salvar(this)' id='" + obj[i].name + "'>" + "Mais Detalhes" + "</a>" + "</center>" + "</section>"

        }

    }

    

}

xhr.send()

function salvar(name) {
    
    var json_nome = JSON.stringify(name.id);
    localStorage.setItem("nome", json_nome);
}