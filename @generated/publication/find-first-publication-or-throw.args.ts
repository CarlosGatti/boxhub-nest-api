import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { Type } from 'class-transformer';
import { PublicationOrderByWithRelationInput } from './publication-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublicationScalarFieldEnum } from './publication-scalar-field.enum';

@ArgsType()
export class FindFirstPublicationOrThrowArgs {

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;

    @Field(() => [PublicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublicationOrderByWithRelationInput>;

    @Field(() => PublicationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PublicationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PublicationScalarFieldEnum>;
}
