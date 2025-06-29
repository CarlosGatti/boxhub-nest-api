import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';
import { Type } from 'class-transformer';
import { SubcontractorCreateOrConnectWithoutInsurancesInput } from './subcontractor-create-or-connect-without-insurances.input';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';

@InputType()
export class SubcontractorCreateNestedOneWithoutInsurancesInput {

    @Field(() => SubcontractorCreateWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorCreateWithoutInsurancesInput)
    create?: SubcontractorCreateWithoutInsurancesInput;

    @Field(() => SubcontractorCreateOrConnectWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorCreateOrConnectWithoutInsurancesInput)
    connectOrCreate?: SubcontractorCreateOrConnectWithoutInsurancesInput;

    @Field(() => SubcontractorWhereUniqueInput, {nullable:true})
    @Type(() => SubcontractorWhereUniqueInput)
    connect?: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
