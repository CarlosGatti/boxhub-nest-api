import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateWithoutLogInput } from './bucket-goal-media-create-without-log.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateOrConnectWithoutLogInput } from './bucket-goal-media-create-or-connect-without-log.input';
import { BucketGoalMediaUpsertWithWhereUniqueWithoutLogInput } from './bucket-goal-media-upsert-with-where-unique-without-log.input';
import { BucketGoalMediaCreateManyLogInputEnvelope } from './bucket-goal-media-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { BucketGoalMediaUpdateWithWhereUniqueWithoutLogInput } from './bucket-goal-media-update-with-where-unique-without-log.input';
import { BucketGoalMediaUpdateManyWithWhereWithoutLogInput } from './bucket-goal-media-update-many-with-where-without-log.input';
import { BucketGoalMediaScalarWhereInput } from './bucket-goal-media-scalar-where.input';

@InputType()
export class BucketGoalMediaUncheckedUpdateManyWithoutLogNestedInput {

    @Field(() => [BucketGoalMediaCreateWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateWithoutLogInput)
    create?: Array<BucketGoalMediaCreateWithoutLogInput>;

    @Field(() => [BucketGoalMediaCreateOrConnectWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaCreateOrConnectWithoutLogInput)
    connectOrCreate?: Array<BucketGoalMediaCreateOrConnectWithoutLogInput>;

    @Field(() => [BucketGoalMediaUpsertWithWhereUniqueWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaUpsertWithWhereUniqueWithoutLogInput)
    upsert?: Array<BucketGoalMediaUpsertWithWhereUniqueWithoutLogInput>;

    @Field(() => BucketGoalMediaCreateManyLogInputEnvelope, {nullable:true})
    @Type(() => BucketGoalMediaCreateManyLogInputEnvelope)
    createMany?: BucketGoalMediaCreateManyLogInputEnvelope;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaWhereUniqueInput], {nullable:true})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>>;

    @Field(() => [BucketGoalMediaUpdateWithWhereUniqueWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaUpdateWithWhereUniqueWithoutLogInput)
    update?: Array<BucketGoalMediaUpdateWithWhereUniqueWithoutLogInput>;

    @Field(() => [BucketGoalMediaUpdateManyWithWhereWithoutLogInput], {nullable:true})
    @Type(() => BucketGoalMediaUpdateManyWithWhereWithoutLogInput)
    updateMany?: Array<BucketGoalMediaUpdateManyWithWhereWithoutLogInput>;

    @Field(() => [BucketGoalMediaScalarWhereInput], {nullable:true})
    @Type(() => BucketGoalMediaScalarWhereInput)
    deleteMany?: Array<BucketGoalMediaScalarWhereInput>;
}
