import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';
import { Type } from 'class-transformer';
import { PublicationUpdateWithoutCommentsInput } from './publication-update-without-comments.input';

@InputType()
export class PublicationUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => PublicationWhereInput, {nullable:true})
    @Type(() => PublicationWhereInput)
    where?: PublicationWhereInput;

    @Field(() => PublicationUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PublicationUpdateWithoutCommentsInput)
    data!: PublicationUpdateWithoutCommentsInput;
}
