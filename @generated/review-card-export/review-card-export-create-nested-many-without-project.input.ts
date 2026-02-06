import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportCreateWithoutProjectInput } from './review-card-export-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardExportCreateOrConnectWithoutProjectInput } from './review-card-export-create-or-connect-without-project.input';
import { ReviewCardExportCreateManyProjectInputEnvelope } from './review-card-export-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';

@InputType()
export class ReviewCardExportCreateNestedManyWithoutProjectInput {

    @Field(() => [ReviewCardExportCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportCreateWithoutProjectInput)
    create?: Array<ReviewCardExportCreateWithoutProjectInput>;

    @Field(() => [ReviewCardExportCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardExportCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardExportCreateOrConnectWithoutProjectInput>;

    @Field(() => ReviewCardExportCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardExportCreateManyProjectInputEnvelope)
    createMany?: ReviewCardExportCreateManyProjectInputEnvelope;

    @Field(() => [ReviewCardExportWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardExportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>>;
}
