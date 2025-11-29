import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemUpdateWithoutCommentsInput } from './discart-item-update-without-comments.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateWithoutCommentsInput } from './discart-item-create-without-comments.input';
import { DiscartItemWhereInput } from './discart-item-where.input';

@InputType()
export class DiscartItemUpsertWithoutCommentsInput {

    @Field(() => DiscartItemUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => DiscartItemUpdateWithoutCommentsInput)
    update!: DiscartItemUpdateWithoutCommentsInput;

    @Field(() => DiscartItemCreateWithoutCommentsInput, {nullable:false})
    @Type(() => DiscartItemCreateWithoutCommentsInput)
    create!: DiscartItemCreateWithoutCommentsInput;

    @Field(() => DiscartItemWhereInput, {nullable:true})
    @Type(() => DiscartItemWhereInput)
    where?: DiscartItemWhereInput;
}
