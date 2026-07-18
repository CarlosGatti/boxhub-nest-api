import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleOrderByWithRelationInput } from './defined-academy-module-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyModuleCountAggregateInput } from './defined-academy-module-count-aggregate.input';
import { DefinedAcademyModuleAvgAggregateInput } from './defined-academy-module-avg-aggregate.input';
import { DefinedAcademyModuleSumAggregateInput } from './defined-academy-module-sum-aggregate.input';
import { DefinedAcademyModuleMinAggregateInput } from './defined-academy-module-min-aggregate.input';
import { DefinedAcademyModuleMaxAggregateInput } from './defined-academy-module-max-aggregate.input';

@ArgsType()
export class DefinedAcademyModuleAggregateArgs {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;

    @Field(() => [DefinedAcademyModuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyModuleOrderByWithRelationInput>;

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

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
