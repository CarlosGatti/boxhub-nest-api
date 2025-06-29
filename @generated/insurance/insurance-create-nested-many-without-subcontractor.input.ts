import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
import { Type } from 'class-transformer';
import { InsuranceCreateOrConnectWithoutSubcontractorInput } from './insurance-create-or-connect-without-subcontractor.input';
import { InsuranceCreateManySubcontractorInputEnvelope } from './insurance-create-many-subcontractor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';

@InputType()
export class InsuranceCreateNestedManyWithoutSubcontractorInput {

    @Field(() => [InsuranceCreateWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceCreateWithoutSubcontractorInput)
    create?: Array<InsuranceCreateWithoutSubcontractorInput>;

    @Field(() => [InsuranceCreateOrConnectWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceCreateOrConnectWithoutSubcontractorInput)
    connectOrCreate?: Array<InsuranceCreateOrConnectWithoutSubcontractorInput>;

    @Field(() => InsuranceCreateManySubcontractorInputEnvelope, {nullable:true})
    @Type(() => InsuranceCreateManySubcontractorInputEnvelope)
    createMany?: InsuranceCreateManySubcontractorInputEnvelope;

    @Field(() => [InsuranceWhereUniqueInput], {nullable:true})
    @Type(() => InsuranceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;
}
