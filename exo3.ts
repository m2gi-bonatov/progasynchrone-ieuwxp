import {
  searchImagesP,
  getDataP,
  composeMozaicP,
  sendToServerP,
} from './cbPromesse';
import { log } from './cbAPI';

async function exo3(descr: string): Promise<void> {
  try {
    const val = await searchImagesP(descr);
    const val2 = await Promise.all(val.map(getDataP));
    const val3 = await composeMozaicP(val2);
    log(await sendToServerP(val3));
  } catch (err) {
    log('Erreur');
  }
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => {
  log("avant l'appelle à exo3");
  exo3('chats');
  log("après l'appelle à exo3");
};
