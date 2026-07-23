import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileOrderByWithAggregationInput } from './defined-academy-user-career-profile-order-by-with-aggregation.input';
import { DefinedAcademyUserCareerProfileScalarFieldEnum } from './defined-academy-user-career-profile-scalar-field.enum';
import { DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput } from './defined-academy-user-career-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCountAggregateInput } from './defined-academy-user-career-profile-count-aggregate.input';
import { DefinedAcademyUserCareerProfileAvgAggregateInput } from './defined-academy-user-career-profile-avg-aggregate.input';
import { DefinedAcademyUserCareerProfileSumAggregateInput } from './defined-academy-user-career-profile-sum-aggregate.input';
import { DefinedAcademyUserCareerProfileMinAggregateInput } from './defined-academy-user-career-profile-min-aggregate.input';
import { DefinedAcademyUserCareerProfileMaxAggregateInput } from './defined-academy-user-career-profile-max-aggregate.input';

@ArgsType()
export class DefinedAcademyUserCareerProfileGroupByArgs {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => [DefinedAcademyUserCareerProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerProfileOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyUserCareerProfileScalarFieldEnum>;

    @Field(() => DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyUserCareerProfileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyUserCareerProfileCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyUserCareerProfileCountAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyUserCareerProfileAvgAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyUserCareerProfileSumAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyUserCareerProfileMinAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyUserCareerProfileMaxAggregateInput;
}
