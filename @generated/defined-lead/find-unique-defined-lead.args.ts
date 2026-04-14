import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedLeadWhereUniqueInput } from './defined-lead-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedLeadArgs {

    @Field(() => DefinedLeadWhereUniqueInput, {nullable:false})
    @Type(() => DefinedLeadWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedLeadWhereUniqueInput, 'id'>;
}
