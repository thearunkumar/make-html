"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM('<!DOCTYPE html>').window.document;
var enums_1 = require("./enums");
var _1 = require(".");
var input = {
    type: 'Dummy',
    template: {
        type: enums_1.HTMLElementType.DIV,
        styles: {
            color: 'RED',
        },
        children: [
            {
                type: enums_1.HTMLElementType.SPAN,
                styles: {
                    color: 'GREEN',
                    'font-weight': 'bold',
                    display: 'block',
                },
                children: [
                    {
                        type: enums_1.HTMLElementType.DIV,
                        styles: {
                            color: 'BLUE',
                        },
                        text: 'CHILD DIV',
                    },
                ],
            },
            {
                type: enums_1.HTMLElementType.DIV,
                text: 'DIV',
            },
        ],
    },
};
console.log(_1.Template.getHTMLString(input));
