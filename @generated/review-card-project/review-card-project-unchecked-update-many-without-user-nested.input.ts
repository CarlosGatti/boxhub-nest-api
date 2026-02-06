import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutUserInput } from './review-card-project-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutUserInput } from './review-card-project-create-or-connect-without-user.input';
import { ReviewCardProjectUpsertWithWhereUniqueWithoutUserInput } from './review-card-project-upsert-with-where-unique-without-user.input';
import { ReviewCardProjectCreateManyUserInputEnvelope } from './review-card-project-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateWithWhereUniqueWithoutUserInput } from './review-card-project-update-with-where-unique-without-user.input';
import { ReviewCardProjectUpdateManyWithWhereWithoutUserInput } from './review-card-project-update-many-with-where-without-user.input';
import { ReviewCardProjectScalarWhereInput } from './review-card-project-scalar-where.input';

@InputType()
export class ReviewCardProjectUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCardProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutUserInput)
    create?: Array<ReviewCardProjectCreateWithoutUserInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewCardProjectUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewCardProjectUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCardProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyUserInputEnvelope)
    createMany?: ReviewCardProjectCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [ReviewCardProjectUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewCardProjectUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewCardProjectUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewCardProjectUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardProjectScalarWhereInput)
    deleteMany?: Array<ReviewCardProjectScalarWhereInput>;
}
