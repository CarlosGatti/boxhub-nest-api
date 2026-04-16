import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientOrderByWithRelationInput } from './defined-client-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedClientScalarFieldEnum } from './defined-client-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedClientArgs {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => [DefinedClientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedClientOrderByWithRelationInput>;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedClientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedClientScalarFieldEnum>;
}
