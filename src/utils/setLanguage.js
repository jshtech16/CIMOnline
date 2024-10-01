import { Nederland, English, French, Spanish, Germeny } from '../utils/languages';
import Cookies from 'js-cookie';

const setLanguage = () => {
    if (Cookies.get('lang') === "en") {
        return English;
    } else if (Cookies.get('lang') === 'fr') {
        return French;
    } else if (Cookies.get('lang') === 'sp') {
        return Spanish;
    } else if (Cookies.get('lang') === 'du') {
        return Germeny;
    } else {
        return Nederland;
    }
}

export default setLanguage;