import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
export declare class MaterialEntryCreateOrConnectWithoutReceivedByInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    create: MaterialEntryCreateWithoutReceivedByInput;
}
