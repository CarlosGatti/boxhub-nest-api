import { Container } from '../container/container.model';
import { CategoryCount } from './category-count.output';
export declare class Category {
    id: number;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    containers?: Array<Container>;
    _count?: CategoryCount;
}
