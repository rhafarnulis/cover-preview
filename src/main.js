// Vice Cover Studio — bootstrap.
//
// Builds the editor, then hands the URL to the screenshot mode: with
// ?shot= in the address the page renders one deterministic shot instead of
// the empty editor. Without it, the editor opens ready for the user's photos.

import { buildEditor } from './editor.js';
import { handleShot } from './shots.js';

const editorApi = buildEditor(document.querySelector('#app'), () => {
  handleShot(editorApi).catch((error) => {
    const status = document.querySelector('#status');
    if (status) status.textContent = String(error.message || error);
  });
});
