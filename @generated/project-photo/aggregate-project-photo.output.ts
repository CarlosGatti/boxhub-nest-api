import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectPhotoCountAggregate } from './project-photo-count-aggregate.output';
import { ProjectPhotoAvgAggregate } from './project-photo-avg-aggregate.output';
import { ProjectPhotoSumAggregate } from './project-photo-sum-aggregate.output';
import { ProjectPhotoMinAggregate } from './project-photo-min-aggregate.output';
import { ProjectPhotoMaxAggregate } from './project-photo-max-aggregate.output';

@ObjectType()
export class AggregateProjectPhoto {

    @Field(() => ProjectPhotoCountAggregate, {nullable:true})
    _count?: ProjectPhotoCountAggregate;

    @Field(() => ProjectPhotoAvgAggregate, {nullable:true})
    _avg?: ProjectPhotoAvgAggregate;

    @Field(() => ProjectPhotoSumAggregate, {nullable:true})
    _sum?: ProjectPhotoSumAggregate;

    @Field(() => ProjectPhotoMinAggregate, {nullable:true})
    _min?: ProjectPhotoMinAggregate;

    @Field(() => ProjectPhotoMaxAggregate, {nullable:true})
    _max?: ProjectPhotoMaxAggregate;
}
