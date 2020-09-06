import '../styles/styles.css';
import InputHandler from './modules/InputHandling';
import Chemical from './modules/handleJSON';
import HandleXML from './modules/handleXML'
import { data } from 'autoprefixer';

new InputHandler();
new HandleXML();



if (module.hot) {
    module.hot.accept();
}