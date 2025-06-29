import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';
import { Type } from 'class-transformer';
import { MaterialEntryOrderByWithRelationInput } from './material-entry-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaterialEntryCountAggregateInput } from './material-entry-count-aggregate.input';
import { MaterialEntryAvgAggregateInput } from './material-entry-avg-aggregate.input';
import { MaterialEntrySumAggregateInput } from './material-entry-sum-aggregate.input';
import { MaterialEntryMinAggregateInput } from './material-entry-min-aggregate.input';
import { MaterialEntryMaxAggregateInput } from './material-entry-max-aggregate.input';

@ArgsType()
export class MaterialEntryAggregateArgs {

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    @Type(() => MaterialEntryWhereInput)
    where?: MaterialEntryWhereInput;

    @Field(() => [MaterialEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaterialEntryOrderByWithRelationInput>;

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MaterialEntryCountAggregateInput, {nullable:true})
    _count?: MaterialEntryCountAggregateInput;

    @Field(() => MaterialEntryAvgAggregateInput, {nullable:true})
    _avg?: MaterialEntryAvgAggregateInput;

    @Field(() => MaterialEntrySumAggregateInput, {nullable:true})
    _sum?: MaterialEntrySumAggregateInput;

    @Field(() => MaterialEntryMinAggregateInput, {nullable:true})
    _min?: MaterialEntryMinAggregateInput;

    @Field(() => MaterialEntryMaxAggregateInput, {nullable:true})
    _max?: MaterialEntryMaxAggregateInput;
}
