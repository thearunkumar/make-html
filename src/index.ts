import { IInputJSON, ITemplate } from './interfaces';
import { HTMLElementType } from './enums';

export class Template {
  static getHTML(json: IInputJSON) {
    return Template.formHTML(json.template);
  }

  static assignStyles(
    element: HTMLElement,
    styles: Record<string, string>
  ): void {
    let stylesString = '';
    for (let key in styles) {
      if (styles.hasOwnProperty(key)) {
        stylesString += `${key}: ${styles[key]}; `;
      }
    }
    element.style.cssText = stylesString;
  }

  static getHTMLString(json: IInputJSON): string {
    const html = Template.getDOM(HTMLElementType.DIV);
    html.appendChild(Template.getHTML(json));
    return html.innerHTML;
  }

  static getDOM(
    type: HTMLElementType,
    styles?: Record<string, string>,
    text?: string
  ): HTMLElement {
    const element = document.createElement(type);
    if (styles) {
      Template.assignStyles(element, styles);
    }
    if (text) {
      element.innerHTML = text;
    }
    return element;
  }

  static formHTML(template: ITemplate) {
    let html: HTMLElement;
    html = Template.getDOM(template.type, template.styles, template.text);

    if (template.children && template.children.length) {
      for (let i = 0; i < template.children.length; ++i) {
        const child = template.children[i];
        html.appendChild(Template.formHTML(child));
      }
    }

    return html;
  }
}

export * from './interfaces';
export * from './enums';
