import { HTMLElementType } from '../enums';

export interface ITemplate {
  type: HTMLElementType;
  text?: string;
  styles?: Record<string, string>;
  children?: Array<ITemplate>;
}

export interface IInputJSON {
  type: string;
  template: ITemplate;
}
