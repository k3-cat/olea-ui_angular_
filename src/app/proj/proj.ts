export class ProjOverview {
    id: string;
    title: string;
    cat: string;
    url: string;
    complexity: Map<string, number>;
    note: string[];
    booked: boolean;
}

export class Proj {
    id: string;
    title: string;
    cat: string;
    url: string;
    pub_date: string;
    complexity: Map<string, number>;
    note: string[];
    booking_user: string;
    leafs: LeafOverview[];
    free_roles: Array<string[2]>;
}

export class LeafOverview {
    id: string;
    proj_id: string;
    dep_: string;
    role: string;
    pink_id: string;
    state: string;

    constructor(dep_: string, role: string) {
        this.dep_ = dep_;
        this.role = role;
        this.state = 'waiting'
    }
}
