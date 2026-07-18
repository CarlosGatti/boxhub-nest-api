import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyOrderByWithAggregationInput } from './defined-academy-order-by-with-aggregation.input';
import { DefinedAcademyScalarFieldEnum } from './defined-academy-scalar-field.enum';
import { DefinedAcademyScalarWhereWithAggregatesInput } from './defined-academy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCountAggregateInput } from './defined-academy-count-aggregate.input';
import { DefinedAcademyAvgAggregateInput } from './defined-academy-avg-aggregate.input';
import { DefinedAcademySumAggregateInput } from './defined-academy-sum-aggregate.input';
import { DefinedAcademyMinAggregateInput } from './defined-academy-min-aggregate.input';
import { DefinedAcademyMaxAggregateInput } from './defined-academy-max-aggregate.input';

@ArgsType()
export class DefinedAcademyGroupByArgs {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => [DefinedAcademyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyScalarFieldEnum>;

    @Field(() => DefinedAcademyScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyCountAggregateInput;

    @Field(() => DefinedAcademyAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyAvgAggregateInput;

    @Field(() => DefinedAcademySumAggregateInput, {nullable:true})
    _sum?: DefinedAcademySumAggregateInput;

    @Field(() => DefinedAcademyMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyMinAggregateInput;

    @Field(() => DefinedAcademyMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyMaxAggregateInput;
}
