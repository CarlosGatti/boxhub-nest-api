import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadUpdateInput } from './defined-lead-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedLeadWhereUniqueInput } from './defined-lead-where-unique.input';

@ArgsType()
export class UpdateOneDefinedLeadArgs {

    @Field(() => DefinedLeadUpdateInput, {nullable:false})
    @Type(() => DefinedLeadUpdateInput)
    data!: DefinedLeadUpdateInput;

    @Field(() => DefinedLeadWhereUniqueInput, {nullable:false})
    @Type(() => DefinedLeadWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedLeadWhereUniqueInput, 'id'>;
}
