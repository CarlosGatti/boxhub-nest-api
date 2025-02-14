import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationUpdateWithoutCommentsInput } from './publication-update-without-comments.input';
import { Type } from 'class-transformer';
import { PublicationCreateWithoutCommentsInput } from './publication-create-without-comments.input';
import { PublicationWhereInput } from './publication-where.input';

@InputType()
export class PublicationUpsertWithoutCommentsInput {

    @Field(() => PublicationUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutCommentsInput)
    update!: PublicationUpdateWithoutCommentsInput;

    @Field(() => PublicationCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PublicationCreateWithoutCommentsInput)
    create!: PublicationCreateWithoutCommentsInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;
}
