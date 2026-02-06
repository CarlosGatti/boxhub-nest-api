import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutTemplateInput } from './review-card-project-create-without-template.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutTemplateInput } from './review-card-project-create-or-connect-without-template.input';
import { ReviewCardProjectCreateManyTemplateInputEnvelope } from './review-card-project-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@InputType()
export class ReviewCardProjectUncheckedCreateNestedManyWithoutTemplateInput {

    @Field(() => [ReviewCardProjectCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutTemplateInput)
    create?: Array<ReviewCardProjectCreateWithoutTemplateInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutTemplateInput>;

    @Field(() => ReviewCardProjectCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyTemplateInputEnvelope)
    createMany?: ReviewCardProjectCreateManyTemplateInputEnvelope;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;
}
