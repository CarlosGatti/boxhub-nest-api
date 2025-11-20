import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
import { InsuranceCreateOrConnectWithoutSubcontractorInput } from './insurance-create-or-connect-without-subcontractor.input';
import { InsuranceCreateManySubcontractorInputEnvelope } from './insurance-create-many-subcontractor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
export declare class InsuranceCreateNestedManyWithoutSubcontractorInput {
    create?: Array<InsuranceCreateWithoutSubcontractorInput>;
    connectOrCreate?: Array<InsuranceCreateOrConnectWithoutSubcontractorInput>;
    createMany?: InsuranceCreateManySubcontractorInputEnvelope;
    connect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
}
