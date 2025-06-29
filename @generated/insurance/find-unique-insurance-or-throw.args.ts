import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueInsuranceOrThrowArgs {

    @Field(() => InsuranceWhereUniqueInput, {nullable:false})
    @Type(() => InsuranceWhereUniqueInput)
    where!: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;
}
