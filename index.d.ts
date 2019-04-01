import { IButton, IInput, ISVG, ITextarea, ICheckbox, ITabs, ITab, ISidemenu, ICalendarInput, IParagraph, ICurrency, INumber, IAccordion } from './src/interfaces';

export function SVG(props: ISVG): any;
export function Button(props: IButton): any;
export function Input(props: IInput): any;
export function Textarea(props: ITextarea): any;
export function Checkbox(props: ICheckbox): any;
export function Switch(props: ICheckbox): any;
export function Tabs(props: ITabs): any;
export function Tab(props: ITab): any;
export function Sidemenu(props: ISidemenu): any;
export function CalendarInput(props: ICalendarInput): any;
export function Paragraph(props: IParagraph): any;
export function Currency(props: ICurrency): any;
export function Number(props: INumber): any;
export function useForm(validate: (values: object) => object): any;
export function validate(value: any, type: any, required?: boolean, options?: {}): string;
export function Accordion(props: IAccordion): any;
