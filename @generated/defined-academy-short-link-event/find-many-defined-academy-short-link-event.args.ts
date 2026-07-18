import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventWhereInput } from './defined-academy-short-link-event-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventOrderByWithRelationInput } from './defined-academy-short-link-event-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkEventWhereUniqueInput } from './defined-academy-short-link-event-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventScalarFieldEnum } from './defined-academy-short-link-event-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyShortLinkEventArgs {

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereInput)
    where?: DefinedAcademyShortLinkEventWhereInput;

    @Field(() => [DefinedAcademyShortLinkEventOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyShortLinkEventOrderByWithRelationInput>;

    @Field(() => DefinedAcademyShortLinkEventWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyShortLinkEventWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyShortLinkEventScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyShortLinkEventScalarFieldEnum>;
}
