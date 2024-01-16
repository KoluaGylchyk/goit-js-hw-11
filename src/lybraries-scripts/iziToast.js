import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function showMessage(textMessage) {
  iziToast.show({
    close: false,
    closeOnClick: true,
    message: textMessage,
    messageColor: 'white',
    timeout: 3000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight',
    backgroundColor: 'red',
    progressBar: false,
  });
}