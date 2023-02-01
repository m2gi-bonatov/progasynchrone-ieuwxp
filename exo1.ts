import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer,
} from './cbAPI';

function exo1(req: string) {
  searchImages(req, (urls) => {
    //log('On a reçut les urls ', urls);
    //Obtenir les données des urls
    //Une fois qu'on les a toutes obtenues, alors on compose la mozaïque
    //Et on renvoie l'image au serveur.
    const datas: ImageData[] = [];
    for (var url of urls) {
      getData(url, (data) => {
        datas.push(data);
        if (datas.length == urls.length) {
          composeMozaic(datas, (data) => {
            sendToServer(data, (res) => log(res));
          });
        }
      });
    }
  });
}

const bt1 = document.querySelector('#bt1') as HTMLElement;
bt1.onclick = () => exo1('chats');
