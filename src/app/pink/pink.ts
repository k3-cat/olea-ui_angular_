import { LeafOverview } from '../proj/proj';

export class PinkOverview {
    id: string;
    name: string;
    qq: string;
    line: string;
    deps: Array<string>;
}

export class Pink {
    id: string;
    name: string;
    qq: string;
    line: string;
    deps: Array<string>;
    cc: number;
    la: string;
    leafs: LeafOverview[];
}
