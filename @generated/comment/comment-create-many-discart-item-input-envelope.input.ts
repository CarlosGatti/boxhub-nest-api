import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyDiscartItemInput } from './comment-create-many-discart-item.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyDiscartItemInputEnvelope {

    @Field(() => [CommentCreateManyDiscartItemInput], {nullable:false})
    @Type(() => CommentCreateManyDiscartItemInput)
    data!: Array<CommentCreateManyDiscartItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
