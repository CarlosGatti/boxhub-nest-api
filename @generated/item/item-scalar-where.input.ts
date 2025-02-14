import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ItemScalarWhereInput {

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    AND?: Array<ItemScalarWhereInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    OR?: Array<ItemScalarWhereInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    NOT?: Array<ItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    containerId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
