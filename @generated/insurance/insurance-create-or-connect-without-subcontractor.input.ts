import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Type } from 'class-transformer';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';

@InputType()
export class InsuranceCreateOrConnectWithoutSubcontractorInput {

    @Field(() => InsuranceWhereUniqueInput, {nullable:false})
    @Type(() => InsuranceWhereUniqueInput)
    where!: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;

    @Field(() => InsuranceCreateWithoutSubcontractorInput, {nullable:false})
    @Type(() => InsuranceCreateWithoutSubcontractorInput)
    create!: InsuranceCreateWithoutSubcontractorInput;
}
