import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithoutReceivedByInput } from './material-entry-update-without-received-by.input';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
export declare class MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    update: MaterialEntryUpdateWithoutReceivedByInput;
    create: MaterialEntryCreateWithoutReceivedByInput;
}
