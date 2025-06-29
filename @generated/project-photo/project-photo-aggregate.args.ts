import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoWhereInput } from './project-photo-where.input';
import { Type } from 'class-transformer';
import { ProjectPhotoOrderByWithRelationInput } from './project-photo-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectPhotoWhereUniqueInput } from './project-photo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectPhotoCountAggregateInput } from './project-photo-count-aggregate.input';
import { ProjectPhotoAvgAggregateInput } from './project-photo-avg-aggregate.input';
import { ProjectPhotoSumAggregateInput } from './project-photo-sum-aggregate.input';
import { ProjectPhotoMinAggregateInput } from './project-photo-min-aggregate.input';
import { ProjectPhotoMaxAggregateInput } from './project-photo-max-aggregate.input';

@ArgsType()
export class ProjectPhotoAggregateArgs {

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    @Type(() => ProjectPhotoWhereInput)
    where?: ProjectPhotoWhereInput;

    @Field(() => [ProjectPhotoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectPhotoOrderByWithRelationInput>;

    @Field(() => ProjectPhotoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectPhotoWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProjectPhotoCountAggregateInput, {nullable:true})
    _count?: ProjectPhotoCountAggregateInput;

    @Field(() => ProjectPhotoAvgAggregateInput, {nullable:true})
    _avg?: ProjectPhotoAvgAggregateInput;

    @Field(() => ProjectPhotoSumAggregateInput, {nullable:true})
    _sum?: ProjectPhotoSumAggregateInput;

    @Field(() => ProjectPhotoMinAggregateInput, {nullable:true})
    _min?: ProjectPhotoMinAggregateInput;

    @Field(() => ProjectPhotoMaxAggregateInput, {nullable:true})
    _max?: ProjectPhotoMaxAggregateInput;
}
