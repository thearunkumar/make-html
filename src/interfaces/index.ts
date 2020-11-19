import { HTMLElementType } from '../enums';

export interface ITemplate {
  type: string;
  text?: string;
  styles?: Record<string, string | number>;
  children?: Array<ITemplate>;
}

export interface IInputJSON {
  type: string;
  template: ITemplate;
}
