import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { Type } from 'class-transformer';
import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';

@InputType()
export class SubcontractorCreateOrConnectWithoutInsurancesInput {

    @Field(() => SubcontractorWhereUniqueInput, {nullable:false})
    @Type(() => SubcontractorWhereUniqueInput)
    where!: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;

    @Field(() => SubcontractorCreateWithoutInsurancesInput, {nullable:false})
    @Type(() => SubcontractorCreateWithoutInsurancesInput)
    create!: SubcontractorCreateWithoutInsurancesInput;
}
