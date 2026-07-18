import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerOrderByWithAggregationInput } from './defined-academy-partner-order-by-with-aggregation.input';
import { DefinedAcademyPartnerScalarFieldEnum } from './defined-academy-partner-scalar-field.enum';
import { DefinedAcademyPartnerScalarWhereWithAggregatesInput } from './defined-academy-partner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCountAggregateInput } from './defined-academy-partner-count-aggregate.input';
import { DefinedAcademyPartnerAvgAggregateInput } from './defined-academy-partner-avg-aggregate.input';
import { DefinedAcademyPartnerSumAggregateInput } from './defined-academy-partner-sum-aggregate.input';
import { DefinedAcademyPartnerMinAggregateInput } from './defined-academy-partner-min-aggregate.input';
import { DefinedAcademyPartnerMaxAggregateInput } from './defined-academy-partner-max-aggregate.input';

@ArgsType()
export class DefinedAcademyPartnerGroupByArgs {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    where?: DefinedAcademyPartnerWhereInput;

    @Field(() => [DefinedAcademyPartnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyPartnerOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyPartnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyPartnerScalarFieldEnum>;

    @Field(() => DefinedAcademyPartnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyPartnerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyPartnerCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyPartnerCountAggregateInput;

    @Field(() => DefinedAcademyPartnerAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyPartnerAvgAggregateInput;

    @Field(() => DefinedAcademyPartnerSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyPartnerSumAggregateInput;

    @Field(() => DefinedAcademyPartnerMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyPartnerMinAggregateInput;

    @Field(() => DefinedAcademyPartnerMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyPartnerMaxAggregateInput;
}
