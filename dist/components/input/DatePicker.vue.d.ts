declare const _default: import("vue").DefineComponent<{}, {}, {
    year: number;
    month: number;
    day: number;
    date: Date;
}, {}, {
    getCountOfDays: (_month?: number | null, _year?: number | null) => number;
    isSelected: (_day: number) => boolean;
    setDay: (_day: number) => void;
    calculateDate: () => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onchange: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onOnchange?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
