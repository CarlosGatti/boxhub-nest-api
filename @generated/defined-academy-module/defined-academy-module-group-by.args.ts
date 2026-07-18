import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleOrderByWithAggregationInput } from './defined-academy-module-order-by-with-aggregation.input';
import { DefinedAcademyModuleScalarFieldEnum } from './defined-academy-module-scalar-field.enum';
import { DefinedAcademyModuleScalarWhereWithAggregatesInput } from './defined-academy-module-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyModuleCountAggregateInput } from './defined-academy-module-count-aggregate.input';
import { DefinedAcademyModuleAvgAggregateInput } from './defined-academy-module-avg-aggregate.input';
import { DefinedAcademyModuleSumAggregateInput } from './defined-academy-module-sum-aggregate.input';
import { DefinedAcademyModuleMinAggregateInput } from './defined-academy-module-min-aggregate.input';
import { DefinedAcademyModuleMaxAggregateInput } from './defined-academy-module-max-aggregate.input';

@ArgsType()
export class DefinedAcademyModuleGroupByArgs {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;

    @Field(() => [DefinedAcademyModuleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyModuleOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyModuleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyModuleScalarFieldEnum>;

    @Field(() => DefinedAcademyModuleScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyModuleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyModuleCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyModuleCountAggregateInput;

    @Field(() => DefinedAcademyModuleAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyModuleAvgAggregateInput;

    @Field(() => DefinedAcademyModuleSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyModuleSumAggregateInput;

    @Field(() => DefinedAcademyModuleMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyModuleMinAggregateInput;

    @Field(() => DefinedAcademyModuleMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyModuleMaxAggregateInput;
}
