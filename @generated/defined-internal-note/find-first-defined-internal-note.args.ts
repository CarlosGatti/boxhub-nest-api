import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteOrderByWithRelationInput } from './defined-internal-note-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedInternalNoteScalarFieldEnum } from './defined-internal-note-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedInternalNoteArgs {

    @Field(() => DefinedInternalNoteWhereInput, {nullable:true})
    @Type(() => DefinedInternalNoteWhereInput)
    where?: DefinedInternalNoteWhereInput;

    @Field(() => [DefinedInternalNoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedInternalNoteOrderByWithRelationInput>;

    @Field(() => DefinedInternalNoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedInternalNoteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedInternalNoteScalarFieldEnum>;
}
