import { Subcontractor } from '../subcontractor/subcontractor.model';
export declare class Insurance {
    id: number;
    subcontractorId: number;
    company: string;
    expiration: Date;
    documentUrl: string;
    createdAt: Date;
    subcontractor?: Subcontractor;
}
