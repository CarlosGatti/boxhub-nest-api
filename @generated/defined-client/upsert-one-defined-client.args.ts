import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateInput } from './defined-client-create.input';
import { DefinedClientUpdateInput } from './defined-client-update.input';

@ArgsType()
export class UpsertOneDefinedClientArgs {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateInput, {nullable:false})
    @Type(() => DefinedClientCreateInput)
    create!: DefinedClientCreateInput;

    @Field(() => DefinedClientUpdateInput, {nullable:false})
    @Type(() => DefinedClientUpdateInput)
    update!: DefinedClientUpdateInput;
}
