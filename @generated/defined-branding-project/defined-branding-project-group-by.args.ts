import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectOrderByWithAggregationInput } from './defined-branding-project-order-by-with-aggregation.input';
import { DefinedBrandingProjectScalarFieldEnum } from './defined-branding-project-scalar-field.enum';
import { DefinedBrandingProjectScalarWhereWithAggregatesInput } from './defined-branding-project-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingProjectCountAggregateInput } from './defined-branding-project-count-aggregate.input';
import { DefinedBrandingProjectAvgAggregateInput } from './defined-branding-project-avg-aggregate.input';
import { DefinedBrandingProjectSumAggregateInput } from './defined-branding-project-sum-aggregate.input';
import { DefinedBrandingProjectMinAggregateInput } from './defined-branding-project-min-aggregate.input';
import { DefinedBrandingProjectMaxAggregateInput } from './defined-branding-project-max-aggregate.input';

@ArgsType()
export class DefinedBrandingProjectGroupByArgs {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;

    @Field(() => [DefinedBrandingProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingProjectOrderByWithAggregationInput>;

    @Field(() => [DefinedBrandingProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedBrandingProjectScalarFieldEnum>;

    @Field(() => DefinedBrandingProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedBrandingProjectScalarWhereWithAggregatesInput;

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
