import { StorageMember } from '../storage-member/storage-member.model';
import { Container } from '../container/container.model';
import { StorageCount } from './storage-count.output';
export declare class Storage {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    members?: Array<StorageMember>;
    containers?: Array<Container>;
    _count?: StorageCount;
}
