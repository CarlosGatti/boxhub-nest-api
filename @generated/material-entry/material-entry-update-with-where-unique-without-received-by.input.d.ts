import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithoutReceivedByInput } from './material-entry-update-without-received-by.input';
export declare class MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    data: MaterialEntryUpdateWithoutReceivedByInput;
}
