// ============================================
// Busca de Vídeo - YouTube Search Integration
// ============================================

// Sua chave de API (a mesma que funcionou no navegador)
const API_KEY = 'AIzaSyC3CckB3NNoB-Yd72yZk0qpKh4gkx07ncU';

// Elementos do DOM
const formPesquisa = document.getElementById('formPesquisa');
const inputPesquisa = document.getElementById('inputPesquisa');
const secaoResultado = document.getElementById('secaoResultado');
const imgThumbnail = document.getElementById('imgThumbnail');
const nomeVideo = document.getElementById('nomeVideo');
const canalVideo = document.getElementById('canalVideo');
const descricaoVideo = document.getElementById('descricaoVideo');
const iframeVideo = document.getElementById('iframeVideo');

// Oculta resultado inicialmente
if (secaoResultado) {
    secaoResultado.style.display = 'none';
}

// Event listener do formulário
formPesquisa.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const termo = inputPesquisa.value.trim();
    if (!termo) {
        alert('Digite um termo de pesquisa.');
        return;
    }
    
    buscarVideo(termo);
});

function buscarVideo(query) {
    mostrarCarregamento();
    
    const termoCodificado = encodeURIComponent(query);
    const urlCompleta =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
    termoCodificado +
    '&type=video&maxResults=1&key=' +
    API_KEY;
    
    fetch(urlCompleta)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Resposta da API:', data);
            
            if (data.error) {
                mostrarErro('Erro ' + data.error.code + ': ' + data.error.message);
                return;
            }
            
            if (data.items && data.items.length > 0) {
                exibirVideo(data.items[0]);
            } else {
                mostrarErro('Nenhum vídeo encontrado.');
            }
        })
        .catch(function(error) {
            console.error('Erro na requisição:', error);
            mostrarErro('Erro ao conectar com a API.');
        });
}

function exibirVideo(video) {
    const videoId = video.id.videoId;
    const snippet = video.snippet;
    
    let thumbUrl = '';
    if (snippet.thumbnails.high) {
        thumbUrl = snippet.thumbnails.high.url;
    } else if (snippet.thumbnails.medium) {
        thumbUrl = snippet.thumbnails.medium.url;
    } else if (snippet.thumbnails.default) {
        thumbUrl = snippet.thumbnails.default.url;
    }
    
    imgThumbnail.src = thumbUrl;
    imgThumbnail.alt = snippet.title;
    nomeVideo.textContent = snippet.title;
    canalVideo.textContent = snippet.channelTitle;
    descricaoVideo.textContent = snippet.description || 'Sem descrição disponível.';
    iframeVideo.src = 'https://www.youtube.com/embed/' + videoId;
    
    secaoResultado.style.display = 'block';
    secaoResultado.scrollIntoView({ behavior: 'smooth' });
}

function mostrarCarregamento() {
    secaoResultado.style.display = 'block';
    nomeVideo.textContent = 'Buscando...';
    canalVideo.textContent = '';
    descricaoVideo.textContent = 'Aguarde...';
    imgThumbnail.src = '';
    iframeVideo.src = '';
}

function mostrarErro(mensagem) {
    secaoResultado.style.display = 'block';
    nomeVideo.textContent = 'Erro';
    canalVideo.textContent = '';
    descricaoVideo.textContent = mensagem;
    imgThumbnail.src = '';
    iframeVideo.src = '';
}
