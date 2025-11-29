import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DiscartItem } from '../discart-item/discart-item.model';
import { User } from '../user/user.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    discartItemId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DiscartItem, {nullable:false})
    discartItem?: DiscartItem;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Comment, {nullable:true})
    parent?: Comment | null;

    @Field(() => [Comment], {nullable:true})
    replies?: Array<Comment>;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
