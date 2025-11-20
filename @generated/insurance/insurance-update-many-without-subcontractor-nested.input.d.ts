import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
import { InsuranceCreateOrConnectWithoutSubcontractorInput } from './insurance-create-or-connect-without-subcontractor.input';
import { InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput } from './insurance-upsert-with-where-unique-without-subcontractor.input';
import { InsuranceCreateManySubcontractorInputEnvelope } from './insurance-create-many-subcontractor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput } from './insurance-update-with-where-unique-without-subcontractor.input';
import { InsuranceUpdateManyWithWhereWithoutSubcontractorInput } from './insurance-update-many-with-where-without-subcontractor.input';
import { InsuranceScalarWhereInput } from './insurance-scalar-where.input';
export declare class InsuranceUpdateManyWithoutSubcontractorNestedInput {
    create?: Array<InsuranceCreateWithoutSubcontractorInput>;
    connectOrCreate?: Array<InsuranceCreateOrConnectWithoutSubcontractorInput>;
    upsert?: Array<InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput>;
    createMany?: InsuranceCreateManySubcontractorInputEnvelope;
    set?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
    update?: Array<InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput>;
    updateMany?: Array<InsuranceUpdateManyWithWhereWithoutSubcontractorInput>;
    deleteMany?: Array<InsuranceScalarWhereInput>;
}
