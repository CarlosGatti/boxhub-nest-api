import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutDiscartItemInput } from './comment-create-without-discart-item.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutDiscartItemInput } from './comment-create-or-connect-without-discart-item.input';
import { CommentUpsertWithWhereUniqueWithoutDiscartItemInput } from './comment-upsert-with-where-unique-without-discart-item.input';
import { CommentCreateManyDiscartItemInputEnvelope } from './comment-create-many-discart-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutDiscartItemInput } from './comment-update-with-where-unique-without-discart-item.input';
import { CommentUpdateManyWithWhereWithoutDiscartItemInput } from './comment-update-many-with-where-without-discart-item.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutDiscartItemNestedInput {

    @Field(() => [CommentCreateWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentCreateWithoutDiscartItemInput)
    create?: Array<CommentCreateWithoutDiscartItemInput>;

    @Field(() => [CommentCreateOrConnectWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutDiscartItemInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutDiscartItemInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutDiscartItemInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutDiscartItemInput>;

    @Field(() => CommentCreateManyDiscartItemInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyDiscartItemInputEnvelope)
    createMany?: CommentCreateManyDiscartItemInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutDiscartItemInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutDiscartItemInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutDiscartItemInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutDiscartItemInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
