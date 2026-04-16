import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientUpdateInput } from './defined-client-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@ArgsType()
export class UpdateOneDefinedClientArgs {

    @Field(() => DefinedClientUpdateInput, {nullable:false})
    @Type(() => DefinedClientUpdateInput)
    data!: DefinedClientUpdateInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
