import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemWhereInput } from './discart-item-where.input';
import { Type } from 'class-transformer';
import { DiscartItemUpdateWithoutCommentsInput } from './discart-item-update-without-comments.input';

@InputType()
export class DiscartItemUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;

    @Field(() => DiscartItemUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => DiscartItemUpdateWithoutCommentsInput)
    data!: DiscartItemUpdateWithoutCommentsInput;
}
