import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateWithoutLogInput } from './bucket-goal-media-create-without-log.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateOrConnectWithoutLogInput } from './bucket-goal-media-create-or-connect-without-log.input';
import { BucketGoalMediaCreateManyLogInputEnvelope } from './bucket-goal-media-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';

@InputType()
export class BucketGoalMediaCreateNestedManyWithoutLogInput {

    @Field(() => [BucketGoalMediaCreateWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateWithoutLogInput)
    create?: Array<BucketGoalMediaCreateWithoutLogInput>;

    @Field(() => [BucketGoalMediaCreateOrConnectWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateOrConnectWithoutLogInput)
    connectOrCreate?: Array<BucketGoalMediaCreateOrConnectWithoutLogInput>;

    @Field(() => BucketGoalMediaCreateManyLogInputEnvelope, {nullable:true})
    @Type(() => BucketGoalMediaCreateManyLogInputEnvelope)
    createMany?: BucketGoalMediaCreateManyLogInputEnvelope;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;
}
