import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Type } from 'class-transformer';
import { InsuranceCreateInput } from './insurance-create.input';
import { InsuranceUpdateInput } from './insurance-update.input';

@ArgsType()
export class UpsertOneInsuranceArgs {

    @Field(() => InsuranceWhereUniqueInput, {nullable:false})
    @Type(() => InsuranceWhereUniqueInput)
    where!: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;

    @Field(() => InsuranceCreateInput, {nullable:false})
    @Type(() => InsuranceCreateInput)
    create!: InsuranceCreateInput;

    @Field(() => InsuranceUpdateInput, {nullable:false})
    @Type(() => InsuranceUpdateInput)
    update!: InsuranceUpdateInput;
}
