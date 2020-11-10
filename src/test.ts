const jsdom = require('jsdom');
const { JSDOM } = jsdom;
global.document = new JSDOM('<!DOCTYPE html>').window.document;
import { IInputJSON } from './interfaces';
import { HTMLElementType } from './enums';
import { Template } from '.';

const input: IInputJSON = {
  type: 'Dummy',
  template: {
    type: HTMLElementType.DIV,
    styles: {
      color: 'RED',
    },
    children: [
      {
        type: HTMLElementType.SPAN,
        styles: {
          color: 'GREEN',
          'font-weight': 'bold',
          display: 'block',
        },
        children: [
          {
            type: HTMLElementType.DIV,
            styles: {
              color: 'BLUE',
            },
            text: 'CHILD DIV',
          },
        ],
      },
      {
        type: HTMLElementType.DIV,
        text: 'DIV',
      },
    ],
  },
};

console.log(Template.getHTMLString(input));
