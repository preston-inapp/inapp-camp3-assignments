import {MDCList} from "@material/list";
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDialog} from '@material/dialog';

import {MDCSlider} from '@material/slider';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

import {MDCRadio} from '@material/radio';

import {MDCSwitch} from '@material/switch';
import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;
for (const el of document.querySelectorAll('.mdc-switch')) {
  const switchControl = new MDCSwitch(el);
}

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
const formField2 = new MDCFormField(document.querySelector('.mdc-form-field'));
formField2.input = radio;

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;

const slider = new MDCSlider(document.querySelector('.mdc-slider'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
dialog.listen('MDCDialog:opened', () => {
    list.layout();
});
