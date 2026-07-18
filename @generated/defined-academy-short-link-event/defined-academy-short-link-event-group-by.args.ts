import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventWhereInput } from './defined-academy-short-link-event-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventOrderByWithAggregationInput } from './defined-academy-short-link-event-order-by-with-aggregation.input';
import { DefinedAcademyShortLinkEventScalarFieldEnum } from './defined-academy-short-link-event-scalar-field.enum';
import { DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput } from './defined-academy-short-link-event-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventCountAggregateInput } from './defined-academy-short-link-event-count-aggregate.input';
import { DefinedAcademyShortLinkEventAvgAggregateInput } from './defined-academy-short-link-event-avg-aggregate.input';
import { DefinedAcademyShortLinkEventSumAggregateInput } from './defined-academy-short-link-event-sum-aggregate.input';
import { DefinedAcademyShortLinkEventMinAggregateInput } from './defined-academy-short-link-event-min-aggregate.input';
import { DefinedAcademyShortLinkEventMaxAggregateInput } from './defined-academy-short-link-event-max-aggregate.input';

@ArgsType()
export class DefinedAcademyShortLinkEventGroupByArgs {

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    @Type(() => DefinedAcademyShortLinkEventWhereInput)
    where?: DefinedAcademyShortLinkEventWhereInput;

    @Field(() => [DefinedAcademyShortLinkEventOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyShortLinkEventOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyShortLinkEventScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyShortLinkEventScalarFieldEnum>;

    @Field(() => DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyShortLinkEventCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyShortLinkEventCountAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyShortLinkEventAvgAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyShortLinkEventSumAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyShortLinkEventMinAggregateInput;

    @Field(() => DefinedAcademyShortLinkEventMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyShortLinkEventMaxAggregateInput;
}
