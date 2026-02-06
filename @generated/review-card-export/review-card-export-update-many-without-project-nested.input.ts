import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportCreateWithoutProjectInput } from './review-card-export-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardExportCreateOrConnectWithoutProjectInput } from './review-card-export-create-or-connect-without-project.input';
import { ReviewCardExportUpsertWithWhereUniqueWithoutProjectInput } from './review-card-export-upsert-with-where-unique-without-project.input';
import { ReviewCardExportCreateManyProjectInputEnvelope } from './review-card-export-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { ReviewCardExportUpdateWithWhereUniqueWithoutProjectInput } from './review-card-export-update-with-where-unique-without-project.input';
import { ReviewCardExportUpdateManyWithWhereWithoutProjectInput } from './review-card-export-update-many-with-where-without-project.input';
import { ReviewCardExportScalarWhereInput } from './review-card-export-scalar-where.input';

@InputType()
export class ReviewCardExportUpdateManyWithoutProjectNestedInput {

    @Field(() => [ReviewCardExportCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportCreateWithoutProjectInput)
    create?: Array<ReviewCardExportCreateWithoutProjectInput>;

    @Field(() => [ReviewCardExportCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardExportCreateOrConnectWithoutProjectInput>;

    @Field(() => [ReviewCardExportUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ReviewCardExportUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ReviewCardExportCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardExportCreateManyProjectInputEnvelope)
    createMany?: ReviewCardExportCreateManyProjectInputEnvelope;

    @Field(() => [ReviewCardExportWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardExportWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardExportWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardExportWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardExportWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardExportWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardExportWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardExportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardExportUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ReviewCardExportUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ReviewCardExportUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ReviewCardExportUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ReviewCardExportScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardExportScalarWhereInput)
    deleteMany?: Array<ReviewCardExportScalarWhereInput>;
}
