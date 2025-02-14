import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutLikesInput } from './publication-update-without-likes.input';

@InputType()
export class PublicationUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;

    @Field(() => PublicationUpdateWithoutLikesInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutLikesInput)
    data!: PublicationUpdateWithoutLikesInput;
}
