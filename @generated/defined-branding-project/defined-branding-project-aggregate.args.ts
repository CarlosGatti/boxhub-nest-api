import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectOrderByWithRelationInput } from './defined-branding-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectCountAggregateInput } from './defined-branding-project-count-aggregate.input';
import { DefinedBrandingProjectAvgAggregateInput } from './defined-branding-project-avg-aggregate.input';
import { DefinedBrandingProjectSumAggregateInput } from './defined-branding-project-sum-aggregate.input';
import { DefinedBrandingProjectMinAggregateInput } from './defined-branding-project-min-aggregate.input';
import { DefinedBrandingProjectMaxAggregateInput } from './defined-branding-project-max-aggregate.input';

@ArgsType()
export class DefinedBrandingProjectAggregateArgs {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;

    @Field(() => [DefinedBrandingProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingProjectOrderByWithRelationInput>;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedBrandingProjectCountAggregateInput, {nullable:true})
    _count?: DefinedBrandingProjectCountAggregateInput;

    @Field(() => DefinedBrandingProjectAvgAggregateInput, {nullable:true})
    _avg?: DefinedBrandingProjectAvgAggregateInput;

    @Field(() => DefinedBrandingProjectSumAggregateInput, {nullable:true})
    _sum?: DefinedBrandingProjectSumAggregateInput;

    @Field(() => DefinedBrandingProjectMinAggregateInput, {nullable:true})
    _min?: DefinedBrandingProjectMinAggregateInput;

    @Field(() => DefinedBrandingProjectMaxAggregateInput, {nullable:true})
    _max?: DefinedBrandingProjectMaxAggregateInput;
}
