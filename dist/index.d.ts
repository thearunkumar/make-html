import { IInputJSON, ITemplate } from './interfaces';
import { HTMLElementType } from './enums';
export declare class Template {
    static getHTML(json: IInputJSON): HTMLElement;
    static assignStyles(element: HTMLElement, styles: Record<string, string | number>): void;
    static getHTMLString(json: IInputJSON): string;
    static getDOM(type: HTMLElementType, styles?: Record<string, string | number>, text?: string): HTMLElement;
    static formHTML(template: ITemplate): HTMLElement;
}
export * from './interfaces';
export * from './enums';
