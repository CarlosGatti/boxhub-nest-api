import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';
import { MaterialEntryCreateOrConnectWithoutReceivedByInput } from './material-entry-create-or-connect-without-received-by.input';
import { MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput } from './material-entry-upsert-with-where-unique-without-received-by.input';
import { MaterialEntryCreateManyReceivedByInputEnvelope } from './material-entry-create-many-received-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput } from './material-entry-update-with-where-unique-without-received-by.input';
import { MaterialEntryUpdateManyWithWhereWithoutReceivedByInput } from './material-entry-update-many-with-where-without-received-by.input';
import { MaterialEntryScalarWhereInput } from './material-entry-scalar-where.input';
export declare class MaterialEntryUpdateManyWithoutReceivedByNestedInput {
    create?: Array<MaterialEntryCreateWithoutReceivedByInput>;
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutReceivedByInput>;
    upsert?: Array<MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput>;
    createMany?: MaterialEntryCreateManyReceivedByInputEnvelope;
    set?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    update?: Array<MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput>;
    updateMany?: Array<MaterialEntryUpdateManyWithWhereWithoutReceivedByInput>;
    deleteMany?: Array<MaterialEntryScalarWhereInput>;
}
