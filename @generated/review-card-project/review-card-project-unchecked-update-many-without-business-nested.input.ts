import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutBusinessInput } from './review-card-project-create-without-business.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutBusinessInput } from './review-card-project-create-or-connect-without-business.input';
import { ReviewCardProjectUpsertWithWhereUniqueWithoutBusinessInput } from './review-card-project-upsert-with-where-unique-without-business.input';
import { ReviewCardProjectCreateManyBusinessInputEnvelope } from './review-card-project-create-many-business-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateWithWhereUniqueWithoutBusinessInput } from './review-card-project-update-with-where-unique-without-business.input';
import { ReviewCardProjectUpdateManyWithWhereWithoutBusinessInput } from './review-card-project-update-many-with-where-without-business.input';
import { ReviewCardProjectScalarWhereInput } from './review-card-project-scalar-where.input';

@InputType()
export class ReviewCardProjectUncheckedUpdateManyWithoutBusinessNestedInput {

    @Field(() => [ReviewCardProjectCreateWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutBusinessInput)
    create?: Array<ReviewCardProjectCreateWithoutBusinessInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutBusinessInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutBusinessInput>;

    @Field(() => [ReviewCardProjectUpsertWithWhereUniqueWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithWhereUniqueWithoutBusinessInput)
    upsert?: Array<ReviewCardProjectUpsertWithWhereUniqueWithoutBusinessInput>;

    @Field(() => ReviewCardProjectCreateManyBusinessInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyBusinessInputEnvelope)
    createMany?: ReviewCardProjectCreateManyBusinessInputEnvelope;

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

    @Field(() => [ReviewCardProjectUpdateWithWhereUniqueWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateWithWhereUniqueWithoutBusinessInput)
    update?: Array<ReviewCardProjectUpdateWithWhereUniqueWithoutBusinessInput>;

    @Field(() => [ReviewCardProjectUpdateManyWithWhereWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateManyWithWhereWithoutBusinessInput)
    updateMany?: Array<ReviewCardProjectUpdateManyWithWhereWithoutBusinessInput>;

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardProjectScalarWhereInput)
    deleteMany?: Array<ReviewCardProjectScalarWhereInput>;
}
