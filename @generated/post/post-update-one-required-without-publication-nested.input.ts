import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutPublicationInput } from './post-create-without-publication.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutPublicationInput } from './post-create-or-connect-without-publication.input';
import { PostUpsertWithoutPublicationInput } from './post-upsert-without-publication.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutPublicationInput } from './post-update-to-one-with-where-without-publication.input';

@InputType()
export class PostUpdateOneRequiredWithoutPublicationNestedInput {

    @Field(() => PostCreateWithoutPublicationInput, {nullable:true})
    @Type(() => PostCreateWithoutPublicationInput)
    create?: PostCreateWithoutPublicationInput;

    @Field(() => PostCreateOrConnectWithoutPublicationInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: PostCreateOrConnectWithoutPublicationInput;

    @Field(() => PostUpsertWithoutPublicationInput, {nullable:true})
    @Type(() => PostUpsertWithoutPublicationInput)
    upsert?: PostUpsertWithoutPublicationInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateToOneWithWhereWithoutPublicationInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutPublicationInput)
    update?: PostUpdateToOneWithWhereWithoutPublicationInput;
}
