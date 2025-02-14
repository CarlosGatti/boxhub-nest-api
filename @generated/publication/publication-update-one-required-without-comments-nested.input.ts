import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationCreateWithoutCommentsInput } from './publication-create-without-comments.input';
import { Type } from 'class-transformer';
import { PublicationCreateOrConnectWithoutCommentsInput } from './publication-create-or-connect-without-comments.input';
import { PublicationUpsertWithoutCommentsInput } from './publication-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { PublicationWhereUniqueInput } from './publication-where-unique.input';
import { PublicationUpdateToOneWithWhereWithoutCommentsInput } from './publication-update-to-one-with-where-without-comments.input';

@InputType()
export class PublicationUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => PublicationCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationCreateWithoutCommentsInput)
    create?: PublicationCreateWithoutCommentsInput;

    @Field(() => PublicationCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: PublicationCreateOrConnectWithoutCommentsInput;

    @Field(() => PublicationUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationUpsertWithoutCommentsInput)
    upsert?: PublicationUpsertWithoutCommentsInput;

    @Field(() => PublicationWhereUniqueInput, {nullable:true})
    @Type(() => PublicationWhereUniqueInput)
    connect?: Prisma.AtLeast<PublicationWhereUniqueInput, 'id'>;

    @Field(() => PublicationUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => PublicationUpdateToOneWithWhereWithoutCommentsInput)
    update?: PublicationUpdateToOneWithWhereWithoutCommentsInput;
}
