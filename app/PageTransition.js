import Highway from '/node_modules/@dogstudio/highway/src/core.js';
import Fade from './Transition';

const h = new Highway.Core({
    transitions: {
        default: Fade
    }
})