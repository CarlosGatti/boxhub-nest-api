import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedInternalNoteCountAggregate } from './defined-internal-note-count-aggregate.output';
import { DefinedInternalNoteAvgAggregate } from './defined-internal-note-avg-aggregate.output';
import { DefinedInternalNoteSumAggregate } from './defined-internal-note-sum-aggregate.output';
import { DefinedInternalNoteMinAggregate } from './defined-internal-note-min-aggregate.output';
import { DefinedInternalNoteMaxAggregate } from './defined-internal-note-max-aggregate.output';

@ObjectType()
export class AggregateDefinedInternalNote {

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
