declare class Sparkly extends HTMLElement {
    container: HTMLElement;
    static register(tag?: string): void;
    constructor();
    get canclick(): boolean;
    set canclick(value: boolean);
    get color(): string;
    set color(value: string);
    get minsize(): string;
    set minsize(value: string);
    get maxsize(): string;
    set maxsize(value: string);
    connectedCallback(): void;
}
export default Sparkly;
