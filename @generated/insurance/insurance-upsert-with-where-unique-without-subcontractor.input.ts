import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Type } from 'class-transformer';
import { InsuranceUpdateWithoutSubcontractorInput } from './insurance-update-without-subcontractor.input';
import { InsuranceCreateWithoutSubcontractorInput } from './insurance-create-without-subcontractor.input';

@InputType()
export class InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput {

    @Field(() => InsuranceWhereUniqueInput, {nullable:false})
    @Type(() => InsuranceWhereUniqueInput)
    where!: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;

    @Field(() => InsuranceUpdateWithoutSubcontractorInput, {nullable:false})
    @Type(() => InsuranceUpdateWithoutSubcontractorInput)
    update!: InsuranceUpdateWithoutSubcontractorInput;

    @Field(() => InsuranceCreateWithoutSubcontractorInput, {nullable:false})
    @Type(() => InsuranceCreateWithoutSubcontractorInput)
    create!: InsuranceCreateWithoutSubcontractorInput;
}
