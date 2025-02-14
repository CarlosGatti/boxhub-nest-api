import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutPublicationInput } from './post-create-without-publication.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutPublicationInput } from './post-create-or-connect-without-publication.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutPublicationInput {

    @Field(() => PostCreateWithoutPublicationInput, {nullable:true})
    @Type(() => PostCreateWithoutPublicationInput)
    create?: PostCreateWithoutPublicationInput;

    @Field(() => PostCreateOrConnectWithoutPublicationInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutPublicationInput)
    connectOrCreate?: PostCreateOrConnectWithoutPublicationInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
