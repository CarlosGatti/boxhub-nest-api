import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerWhereInput } from './container-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StorageRelationFilter } from '../storage/storage-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { ItemListRelationFilter } from '../item/item-list-relation-filter.input';

@InputType()
export class ContainerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => [ContainerWhereInput], {nullable:true})
    AND?: Array<ContainerWhereInput>;

    @Field(() => [ContainerWhereInput], {nullable:true})
    OR?: Array<ContainerWhereInput>;

    @Field(() => [ContainerWhereInput], {nullable:true})
    NOT?: Array<ContainerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    qrCode?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    storageId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StorageRelationFilter, {nullable:true})
    storage?: StorageRelationFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: CategoryListRelationFilter;

    @Field(() => ItemListRelationFilter, {nullable:true})
    items?: ItemListRelationFilter;
}
