import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceUpdateInput } from './insurance-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';

@ArgsType()
export class UpdateOneInsuranceArgs {

    @Field(() => InsuranceUpdateInput, {nullable:false})
    @Type(() => InsuranceUpdateInput)
    data!: InsuranceUpdateInput;

    @Field(() => InsuranceWhereUniqueInput, {nullable:false})
    @Type(() => InsuranceWhereUniqueInput)
    where!: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;
}
