import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { PublicationCountAggregate } from './publication-count-aggregate.output';
import { PublicationAvgAggregate } from './publication-avg-aggregate.output';
import { PublicationSumAggregate } from './publication-sum-aggregate.output';
import { PublicationMinAggregate } from './publication-min-aggregate.output';
import { PublicationMaxAggregate } from './publication-max-aggregate.output';

@ObjectType()
export class PublicationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => Int, {nullable:true})
    eventId?: number;

    @Field(() => Int, {nullable:true})
    communityId?: number;

    @Field(() => PublicationCountAggregate, {nullable:true})
    _count?: PublicationCountAggregate;

    @Field(() => PublicationAvgAggregate, {nullable:true})
    _avg?: PublicationAvgAggregate;

    @Field(() => PublicationSumAggregate, {nullable:true})
    _sum?: PublicationSumAggregate;

    @Field(() => PublicationMinAggregate, {nullable:true})
    _min?: PublicationMinAggregate;

    @Field(() => PublicationMaxAggregate, {nullable:true})
    _max?: PublicationMaxAggregate;
}
