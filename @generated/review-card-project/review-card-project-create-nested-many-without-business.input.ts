import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutBusinessInput } from './review-card-project-create-without-business.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutBusinessInput } from './review-card-project-create-or-connect-without-business.input';
import { ReviewCardProjectCreateManyBusinessInputEnvelope } from './review-card-project-create-many-business-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@InputType()
export class ReviewCardProjectCreateNestedManyWithoutBusinessInput {

    @Field(() => [ReviewCardProjectCreateWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutBusinessInput)
    create?: Array<ReviewCardProjectCreateWithoutBusinessInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutBusinessInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutBusinessInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutBusinessInput>;

    @Field(() => ReviewCardProjectCreateManyBusinessInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyBusinessInputEnvelope)
    createMany?: ReviewCardProjectCreateManyBusinessInputEnvelope;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;
}
