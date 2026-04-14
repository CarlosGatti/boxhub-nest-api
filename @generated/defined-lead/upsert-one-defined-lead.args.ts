import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedLeadWhereUniqueInput } from './defined-lead-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedLeadCreateInput } from './defined-lead-create.input';
import { DefinedLeadUpdateInput } from './defined-lead-update.input';

@ArgsType()
export class UpsertOneDefinedLeadArgs {

    @Field(() => DefinedLeadWhereUniqueInput, {nullable:false})
    @Type(() => DefinedLeadWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedLeadWhereUniqueInput, 'id'>;

    @Field(() => DefinedLeadCreateInput, {nullable:false})
    @Type(() => DefinedLeadCreateInput)
    create!: DefinedLeadCreateInput;

    @Field(() => DefinedLeadUpdateInput, {nullable:false})
    @Type(() => DefinedLeadUpdateInput)
    update!: DefinedLeadUpdateInput;
}
