import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { Float } from '@nestjs/graphql';
import { DiscartItemCategory } from '../prisma/discart-item-category.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';
import { DiscartItemCreateimageUrlsInput } from './discart-item-createimage-urls.input';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutDiscartItemsInput } from '../user/user-create-nested-one-without-discart-items.input';
import { CommentCreateNestedManyWithoutDiscartItemInput } from '../comment/comment-create-nested-many-without-discart-item.input';

@InputType()
export class DiscartItemCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => DiscartItemType, {nullable:false})
    type!: keyof typeof DiscartItemType;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => DiscartItemCategory, {nullable:true})
    category?: keyof typeof DiscartItemCategory;

    @Field(() => DiscartItemCondition, {nullable:false})
    condition!: keyof typeof DiscartItemCondition;

    @Field(() => DiscartItemStatus, {nullable:true})
    status?: keyof typeof DiscartItemStatus;

    @Field(() => DiscartItemCreateimageUrlsInput, {nullable:true})
    imageUrls?: DiscartItemCreateimageUrlsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    pickupAddress?: any;

    @Field(() => String, {nullable:true})
    contactPhone?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutDiscartItemsInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutDiscartItemsInput;

    @Field(() => CommentCreateNestedManyWithoutDiscartItemInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutDiscartItemInput;
}
