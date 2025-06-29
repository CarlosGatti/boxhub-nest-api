import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';
import { Type } from 'class-transformer';
import { InsuranceCreateOrConnectWithoutSubcontractorInput } from './insurance-create-or-connect-without-subcontractor.input';
import { InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput } from './insurance-upsert-with-where-unique-without-subcontractor.input';
import { InsuranceCreateManySubcontractorInputEnvelope } from './insurance-create-many-subcontractor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput } from './insurance-update-with-where-unique-without-subcontractor.input';
import { InsuranceUpdateManyWithWhereWithoutSubcontractorInput } from './insurance-update-many-with-where-without-subcontractor.input';
import { InsuranceScalarWhereInput } from './insurance-scalar-where.input';

@InputType()
export class InsuranceUpdateManyWithoutSubcontractorNestedInput {

    @Field(() => [InsuranceCreateWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceCreateWithoutSubcontractorInput)
    create?: Array<InsuranceCreateWithoutSubcontractorInput>;

    @Field(() => [InsuranceCreateOrConnectWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceCreateOrConnectWithoutSubcontractorInput)
    connectOrCreate?: Array<InsuranceCreateOrConnectWithoutSubcontractorInput>;

    @Field(() => [InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput)
    upsert?: Array<InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput>;

    @Field(() => InsuranceCreateManySubcontractorInputEnvelope, {nullable:true})
    @Type(() => InsuranceCreateManySubcontractorInputEnvelope)
    createMany?: InsuranceCreateManySubcontractorInputEnvelope;

    @Field(() => [InsuranceWhereUniqueInput], {nullable:true})
    @Type(() => InsuranceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;

    @Field(() => [InsuranceWhereUniqueInput], {nullable:true})
    @Type(() => InsuranceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;

    @Field(() => [InsuranceWhereUniqueInput], {nullable:true})
    @Type(() => InsuranceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;

    @Field(() => [InsuranceWhereUniqueInput], {nullable:true})
    @Type(() => InsuranceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>>;

    @Field(() => [InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput)
    update?: Array<InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput>;

    @Field(() => [InsuranceUpdateManyWithWhereWithoutSubcontractorInput], {nullable:true})
    @Type(() => InsuranceUpdateManyWithWhereWithoutSubcontractorInput)
    updateMany?: Array<InsuranceUpdateManyWithWhereWithoutSubcontractorInput>;

    @Field(() => [InsuranceScalarWhereInput], {nullable:true})
    @Type(() => InsuranceScalarWhereInput)
    deleteMany?: Array<InsuranceScalarWhereInput>;
}
