import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInternalNoteWhereInput } from './defined-internal-note-where.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteOrderByWithRelationInput } from './defined-internal-note-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedInternalNoteCountAggregateInput } from './defined-internal-note-count-aggregate.input';
import { DefinedInternalNoteAvgAggregateInput } from './defined-internal-note-avg-aggregate.input';
import { DefinedInternalNoteSumAggregateInput } from './defined-internal-note-sum-aggregate.input';
import { DefinedInternalNoteMinAggregateInput } from './defined-internal-note-min-aggregate.input';
import { DefinedInternalNoteMaxAggregateInput } from './defined-internal-note-max-aggregate.input';

@ArgsType()
export class DefinedInternalNoteAggregateArgs {

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

    @Field(() => DefinedInternalNoteCountAggregateInput, {nullable:true})
    _count?: DefinedInternalNoteCountAggregateInput;

    @Field(() => DefinedInternalNoteAvgAggregateInput, {nullable:true})
    _avg?: DefinedInternalNoteAvgAggregateInput;

    @Field(() => DefinedInternalNoteSumAggregateInput, {nullable:true})
    _sum?: DefinedInternalNoteSumAggregateInput;

    @Field(() => DefinedInternalNoteMinAggregateInput, {nullable:true})
    _min?: DefinedInternalNoteMinAggregateInput;

    @Field(() => DefinedInternalNoteMaxAggregateInput, {nullable:true})
    _max?: DefinedInternalNoteMaxAggregateInput;
}
