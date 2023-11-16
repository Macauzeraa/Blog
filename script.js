let cantidadNoticias = 20;
let pageFinal = cantidadNoticias;
let pageInicial = 0;
let temaActual = "Tecnología";

let noticias = {
    "apiKey":"ab97b4f189f049daa0e08bd982a6d2b7",
    fetchNoticias:function(){
        // fetch(
        //     "https://newsapi.org/v2/top-headlines?sources=google-news-br&languaje=pt&apiKey="+this.apiKey
        // )
        // .then((response)=>response.json())
        // .then((data)=>
        
        this.displayNoticias({
            "status": "ok",
            "totalResults": 10,
            "articles": [
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "G1",
                    "title": "Justiça concede liberdade provisória para auxiliar e motorista da van escolar onde menino foi encontrado morto - G1",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiqQFodHRwczovL2cxLmdsb2JvLmNvbS9zcC9zYW8tcGF1bG8vbm90aWNpYS8yMDIzLzExLzE1L2p1c3RpY2EtY29uY2VkZS1saWJlcmRhZGUtcHJvdmlzb3JpYS1wYXJhLWF1eGlsaWFyLWUtbW90b3Jpc3RhLWRhLXZhbi1lc2NvbGFyLW9uZGUtbWVuaW5vLWZvaS1lbmNvbnRyYWRvLW1vcnRvLmdodG1s0gG0AWh0dHBzOi8vZzEuZ2xvYm8uY29tL2dvb2dsZS9hbXAvc3Avc2FvLXBhdWxvL25vdGljaWEvMjAyMy8xMS8xNS9qdXN0aWNhLWNvbmNlZGUtbGliZXJkYWRlLXByb3Zpc29yaWEtcGFyYS1hdXhpbGlhci1lLW1vdG9yaXN0YS1kYS12YW4tZXNjb2xhci1vbmRlLW1lbmluby1mb2ktZW5jb250cmFkby1tb3J0by5naHRtbA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T17:39:55+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Estado de Minas",
                    "title": "Bolsonaristas fazem 'buzinaço' e pedem impeachment de Lula em BH - Estado de Minas",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LmVtLmNvbS5ici9wb2xpdGljYS8yMDIzLzExLzY2NTU2MjUtYm9sc29uYXJpc3Rhcy1mYXplbS1idXppbmFjby1lLXBlZGVtLWltcGVhY2htZW50LWRlLWx1bGEtZW0tYmguaHRtbNIBdmh0dHBzOi8vd3d3LmVtLmNvbS5ici9wb2xpdGljYS8yMDIzLzExL2FtcC82NjU1NjI1LWJvbHNvbmFyaXN0YXMtZmF6ZW0tYnV6aW5hY28tZS1wZWRlbS1pbXBlYWNobWVudC1kZS1sdWxhLWVtLWJoLmh0bWw?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T15:09:00+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Poder360",
                    "title": "Ministério confirma que pagou viagem de \"dama do tráfico\" - Poder360",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnBvZGVyMzYwLmNvbS5ici9nb3Zlcm5vL21pbmlzdGVyaW8tY29uZmlybWEtY3VzdGVpby1kZS12aWFnZW0tZGUtZGFtYS1kby10cmFmaWNvL9IBAA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T15:00:00+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Gazeta do Povo",
                    "title": "Senadores criticam portaria de Lula que revoga acordo de Bolsonaro sobre trabalho aos feriados; centrais celebram - Gazeta do Povo",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMikAFodHRwczovL3d3dy5nYXpldGFkb3Bvdm8uY29tLmJyL2Vjb25vbWlhL3NlbmFkb3Jlcy1jcml0aWNhbS1tZWRpZGEtZGUtbHVsYS1xdWUtcmV2b2dhLXBvcnRhcmlhLWRvLWdvdmVybm8tYm9sc29uYXJvLXNvYnJlLXRyYWJhbGhvLWFvcy1mZXJpYWRvcy_SAZQBaHR0cHM6Ly93d3cuZ2F6ZXRhZG9wb3ZvLmNvbS5ici9lY29ub21pYS9zZW5hZG9yZXMtY3JpdGljYW0tbWVkaWRhLWRlLWx1bGEtcXVlLXJldm9nYS1wb3J0YXJpYS1kby1nb3Zlcm5vLWJvbHNvbmFyby1zb2JyZS10cmFiYWxoby1hb3MtZmVyaWFkb3MvYW1wLw?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T14:17:00+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Jovem Pan News",
                    "title": "Alan Ghani comenta plano de redução de preços das passagens aéreas - Jovem Pan News",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CCAiC2FsY2gtRU5MbmgwmAEB?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T13:03:17+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "MetSul.com",
                    "title": "Pantanal vive dias dramáticos com novembro de fogo recorde; veja fotos - MetSul.com",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiWWh0dHBzOi8vbWV0c3VsLmNvbS9wYW50YW5hbC12aXZlLWRpYXMtZHJhbWF0aWNvcy1jb20tbm92ZW1icm8tZGUtZm9nby1yZWNvcmRlLXZlamEtZm90b3Mv0gEA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T11:47:56+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "G1",
                    "title": "Tripulantes que disseram terem sido assaltados no Rio mentiram, diz delegada: ‘Passaram a noite inteira bebendo e usando drogas’ - G1",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vZzEuZ2xvYm8uY29tL3JqL3Jpby1kZS1qYW5laXJvL25vdGljaWEvMjAyMy8xMS8xNS90cmlwdWxhbnRlcy1hc3NhbHRhZG9zLWRlbGVnYWRhLmdodG1s0gFqaHR0cHM6Ly9nMS5nbG9iby5jb20vZ29vZ2xlL2FtcC9yai9yaW8tZGUtamFuZWlyby9ub3RpY2lhLzIwMjMvMTEvMTUvdHJpcHVsYW50ZXMtYXNzYWx0YWRvcy1kZWxlZ2FkYS5naHRtbA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T11:07:06+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Folha de S.Paulo",
                    "title": "Israel invade maior hospital de Gaza e faz ultimato ao Hamas - Folha de S.Paulo",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CCAiC0R4ZHBzMVc5QnowmAEB?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-15T10:49:37+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "MetSul.com",
                    "title": "Onda de calor faz consumo de luz atingir níveis jamais vistos no Brasil - MetSul.com",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vbWV0c3VsLmNvbS9vbmRhLWRlLWNhbG9yLWZhei1jb25zdW1vLWRlLWx1ei1hdGluZ2lyLW5pdmVpcy1qYW1haXMtdmlzdG9zLW5vLWJyYXNpbC_SAQA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-14T22:29:37+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": "Terra",
                    "title": "É falso que Bolsonaro recebeu antes de Lula brasileiros repatriados da Faixa de Gaza - Terra",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMirQFodHRwczovL3d3dy50ZXJyYS5jb20uYnIvbm90aWNpYXMvY2hlY2Ftb3MvZS1mYWxzby1xdWUtYm9sc29uYXJvLXJlY2ViZXUtYW50ZXMtZGUtbHVsYS1icmFzaWxlaXJvcy1yZXBhdHJpYWRvcy1kYS1mYWl4YS1kZS1nYXphLGYzN2I4MjUyNzcyZjc5ZDRhOGE5M2VkN2VmOTJkZDg1eW9qb3drNWguaHRtbNIBsQFodHRwczovL3d3dy50ZXJyYS5jb20uYnIvYW1wL25vdGljaWFzL2NoZWNhbW9zL2UtZmFsc28tcXVlLWJvbHNvbmFyby1yZWNlYmV1LWFudGVzLWRlLWx1bGEtYnJhc2lsZWlyb3MtcmVwYXRyaWFkb3MtZGEtZmFpeGEtZGUtZ2F6YSxmMzdiODI1Mjc3MmY3OWQ0YThhOTNlZDdlZjkyZGQ4NXlvam93azVoLmh0bWw?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-11-14T19:52:21+00:00",
                    "content": null
                }
            ]
        })
        
        // );
    },
    displayNoticias: function(data){
        //elimino todo si ha seleccionado un nuevo tema
        if(pageInicial==0){
            document.querySelector(".container-noticias").textContent ="";
        }


        for(i=pageInicial;i<=pageFinal;i++){
            const {title} = data.articles[i];
            let h2 = document.createElement("h2");
            h2.textContent = title;
    
            const {urlToImage} = data.articles[i];
            let img = document.createElement("img");
            img.setAttribute("src", urlToImage);

            let info_item = document.createElement("div");
            info_item.className = "info_item";
            const {publishedAt} = data.articles[i];
            let fecha = document.createElement("span");
            let date = publishedAt;
            date=date.split("T")[0].split("-").reverse().join("-");
            fecha.className = "fecha";
            fecha.textContent = date;

            const {name} = data.articles[i].source;
            let fuente = document.createElement("span");
            fuente.className = "fuente";
            fuente.textContent = name;

            info_item.appendChild(fecha);
            info_item.appendChild(fuente);

            const {url} = data.articles[i];

            let item = document.createElement("div");
            item.className = "item";
            item.appendChild(h2);
            item.appendChild(img);
            item.appendChild(info_item);
            item.setAttribute("onclick", "location.href='"+url+"'");
            document.querySelector(".container-noticias").appendChild(item);
        }

        let btnSiguiente = document.createElement("span");
        btnSiguiente.id = "btnSiguiente";
        btnSiguiente.textContent = "Ver más";
        btnSiguiente.setAttribute("onclick","siguiente()");
        document.querySelector(".container-noticias").appendChild(btnSiguiente);
    }
}

function buscar(cat){
    pageInicial = 0;
    pageFinal = cantidadNoticias;
    temaActual = cat;
    noticias.fetchNoticias(cat);
}

function buscarTema(){
    pageInicial = 0;
    pageFinal = cantidadNoticias;

    let tema = document.querySelector("#busqueda").value;
    temaActual = tema;
    noticias.fetchNoticias(temaActual);
}

function siguiente(){
    pageInicial = pageFinal + 1;
    pageFinal = pageFinal + cantidadNoticias + 1;
    //eliminamos el botón siguiente
    document.querySelector("#btnSiguiente").remove();
    noticias.fetchNoticias(temaActual);

}

noticias.fetchNoticias(temaActual);