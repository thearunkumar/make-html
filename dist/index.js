"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var enums_1 = require("./enums");
var Template = /** @class */ (function () {
    function Template() {
    }
    Template.getHTML = function (json) {
        return Template.formHTML(json.template);
    };
    Template.assignStyles = function (element, styles) {
        var stylesString = '';
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                stylesString += key + ": " + styles[key] + "; ";
            }
        }
        element.style.cssText = stylesString;
    };
    Template.getHTMLString = function (json) {
        var html = Template.getDOM(enums_1.HTMLElementType.DIV);
        html.appendChild(Template.getHTML(json));
        return html.innerHTML;
    };
    Template.getDOM = function (type, styles, text) {
        var element = document.createElement(type);
        if (styles) {
            Template.assignStyles(element, styles);
        }
        if (text) {
            element.innerHTML = text;
        }
        return element;
    };
    Template.formHTML = function (template) {
        var html;
        html = Template.getDOM(template.type, template.styles, template.text);
        if (template.children && template.children.length) {
            for (var i = 0; i < template.children.length; ++i) {
                var child = template.children[i];
                html.appendChild(Template.formHTML(child));
            }
        }
        return html;
    };
    return Template;
}());
exports.Template = Template;
__exportStar(require("./interfaces"), exports);
__exportStar(require("./enums"), exports);
