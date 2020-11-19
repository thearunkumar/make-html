"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM('<!DOCTYPE html>').window.document;
var _1 = require(".");
// const input: IInputJSON = {
//   type: 'Dummy',
//   template: {
//     type: HTMLElementType.DIV,
//     styles: {
//       color: 'RED',
//     },
//     children: [
//       {
//         type: HTMLElementType.SPAN,
//         styles: {
//           color: 'GREEN',
//           'font-weight': 'bold',
//           display: 'block',
//         },
//         children: [
//           {
//             type: HTMLElementType.DIV,
//             styles: {
//               color: 'BLUE',
//             },
//             text: 'CHILD DIV',
//           },
//         ],
//       },
//       {
//         type: HTMLElementType.DIV,
//         text: 'DIV',
//       },
//     ],
//   },
// };
var input = {
    type: 'resume',
    template: {
        type: 'DIV',
        children: [
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '30px',
                    left: '20px',
                    top: '15px',
                    position: 'absolute',
                },
                text: 'ARUNKUMAR SRISAILAPATHI',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '12px',
                    left: '21px',
                    top: '58px',
                    position: 'absolute',
                    color: '#0c797d',
                },
                text: 'USER INTERFACE ENGINEER &\nWEB DEVELOPER\n8 YEARS OF PROFESSIONAL EXPERIENCE',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '15px',
                    left: '19px',
                    top: '120px',
                    position: 'absolute',
                },
                text: 'EMPLOYMENT',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '12px',
                    left: '20px',
                    top: '147px',
                    position: 'absolute',
                    background: '#ffffff',
                    color: '#000000',
                },
                text: '2018 - Present',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '12px',
                    left: '195px',
                    top: '147px',
                    position: 'absolute',
                    color: '#0062b1',
                },
                text: 'Amazon - PrimeVideo',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '10px',
                    left: '195px',
                    top: '163px',
                    position: 'absolute',
                    color: '#808080',
                },
                text: 'Web Development Engineer II [Frontend Engineer ||]',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '10px',
                    left: '195px',
                    top: '182px',
                    position: 'absolute',
                    color: '#808080',
                },
                text: 'Built a scalable subtitle editor (video, audio, panels).\nOptimized the wavesurfer.js to render from 4s to 150ms.\nBuilt a scalable architecture to support multiple use cases.\nEnabled a busins worth in multiple million dollars.\nWorked on Serverless tech stack.',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '12px',
                    left: '24px',
                    top: '301px',
                    position: 'absolute',
                },
                text: '2017 - 2018',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '12px',
                    left: '197px',
                    top: '302px',
                    position: 'absolute',
                    color: '#009ce0',
                },
                text: 'Redhat India (R&D) - Devtools',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '10px',
                    left: '196px',
                    top: '317px',
                    position: 'absolute',
                    color: '#808080',
                },
                text: 'Software Engineer',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '10px',
                    left: '196px',
                    top: '339px',
                    position: 'absolute',
                    color: '#000000',
                },
                text: 'Primarily a Frontend Engineer, open source contributor',
            },
            {
                type: 'DIV',
                children: [],
                styles: {
                    'font-size': '10px',
                    left: '195px',
                    top: '359px',
                    position: 'absolute',
                    color: '#808080',
                },
                text: 'Built up the whole UI project from scratch. \nSuggested a better Mock UX design to represent Analytics report.\nWorked in setting up CI/CD for every push.\nWorked from the ground up in setting up frontend infrastructure.\nContributed heavily on open source on Github',
            },
        ],
        styles: {
            border: '1px solid GREY',
            position: 'absolute',
            background: '#ffffff',
            width: '595px',
            height: '842px',
            color: '#000000',
        },
        text: '',
    },
};
console.log(_1.Template.getHTMLString(input));
