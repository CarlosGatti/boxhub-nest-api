import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutTemplateInput } from './review-card-project-create-without-template.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutTemplateInput } from './review-card-project-create-or-connect-without-template.input';
import { ReviewCardProjectUpsertWithWhereUniqueWithoutTemplateInput } from './review-card-project-upsert-with-where-unique-without-template.input';
import { ReviewCardProjectCreateManyTemplateInputEnvelope } from './review-card-project-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateWithWhereUniqueWithoutTemplateInput } from './review-card-project-update-with-where-unique-without-template.input';
import { ReviewCardProjectUpdateManyWithWhereWithoutTemplateInput } from './review-card-project-update-many-with-where-without-template.input';
import { ReviewCardProjectScalarWhereInput } from './review-card-project-scalar-where.input';

@InputType()
export class ReviewCardProjectUpdateManyWithoutTemplateNestedInput {

    @Field(() => [ReviewCardProjectCreateWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutTemplateInput)
    create?: Array<ReviewCardProjectCreateWithoutTemplateInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutTemplateInput>;

    @Field(() => [ReviewCardProjectUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<ReviewCardProjectUpsertWithWhereUniqueWithoutTemplateInput>;

    @Field(() => ReviewCardProjectCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyTemplateInputEnvelope)
    createMany?: ReviewCardProjectCreateManyTemplateInputEnvelope;

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

    @Field(() => [ReviewCardProjectUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<ReviewCardProjectUpdateWithWhereUniqueWithoutTemplateInput>;

    @Field(() => [ReviewCardProjectUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => ReviewCardProjectUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<ReviewCardProjectUpdateManyWithWhereWithoutTemplateInput>;

    @Field(() => [ReviewCardProjectScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardProjectScalarWhereInput)
    deleteMany?: Array<ReviewCardProjectScalarWhereInput>;
}
