import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationUpdateWithoutLikesInput } from './publication-update-without-likes.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutLikesInput } from './publication-create-without-likes.input';
import { PublicationWhereInput } from './publication-where.input';

@InputType()
export class PublicationUpsertWithoutLikesInput {

    @Field(() => PublicationUpdateWithoutLikesInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutLikesInput)
    update!: PublicationUpdateWithoutLikesInput;

    @Field(() => PublicationCreateWithoutLikesInput, {nullable:false})
    @Type(() => PublicationCreateWithoutLikesInput)
    create!: PublicationCreateWithoutLikesInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;
}
