import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ContainerScalarWhereInput {
    AND?: Array<ContainerScalarWhereInput>;
    OR?: Array<ContainerScalarWhereInput>;
    NOT?: Array<ContainerScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringFilter;
    qrCode?: StringFilter;
    code?: StringFilter;
    storageId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
