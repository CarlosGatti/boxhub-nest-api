import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutDiscartItemInput } from './comment-create-without-discart-item.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutDiscartItemInput } from './comment-create-or-connect-without-discart-item.input';
import { CommentCreateManyDiscartItemInputEnvelope } from './comment-create-many-discart-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutDiscartItemInput {

    @Field(() => [CommentCreateWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentCreateWithoutDiscartItemInput)
    create?: Array<CommentCreateWithoutDiscartItemInput>;

    @Field(() => [CommentCreateOrConnectWithoutDiscartItemInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutDiscartItemInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutDiscartItemInput>;

    @Field(() => CommentCreateManyDiscartItemInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyDiscartItemInputEnvelope)
    createMany?: CommentCreateManyDiscartItemInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
