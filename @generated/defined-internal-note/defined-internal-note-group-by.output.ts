import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInternalNoteCountAggregate } from './defined-internal-note-count-aggregate.output';
import { DefinedInternalNoteAvgAggregate } from './defined-internal-note-avg-aggregate.output';
import { DefinedInternalNoteSumAggregate } from './defined-internal-note-sum-aggregate.output';
import { DefinedInternalNoteMinAggregate } from './defined-internal-note-min-aggregate.output';
import { DefinedInternalNoteMaxAggregate } from './defined-internal-note-max-aggregate.output';

@ObjectType()
export class DefinedInternalNoteGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedInternalNoteCountAggregate, {nullable:true})
    _count?: DefinedInternalNoteCountAggregate;

    @Field(() => DefinedInternalNoteAvgAggregate, {nullable:true})
    _avg?: DefinedInternalNoteAvgAggregate;

    @Field(() => DefinedInternalNoteSumAggregate, {nullable:true})
    _sum?: DefinedInternalNoteSumAggregate;

    @Field(() => DefinedInternalNoteMinAggregate, {nullable:true})
    _min?: DefinedInternalNoteMinAggregate;

    @Field(() => DefinedInternalNoteMaxAggregate, {nullable:true})
    _max?: DefinedInternalNoteMaxAggregate;
}
