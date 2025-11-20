import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
import { MaterialEntryCreateOrConnectWithoutReceivedByInput } from './material-entry-create-or-connect-without-received-by.input';
import { MaterialEntryCreateManyReceivedByInputEnvelope } from './material-entry-create-many-received-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
export declare class MaterialEntryCreateNestedManyWithoutReceivedByInput {
    create?: Array<MaterialEntryCreateWithoutReceivedByInput>;
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>;
    createMany?: MaterialEntryCreateManyReceivedByInputEnvelope;
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
}
