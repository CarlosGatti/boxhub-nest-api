import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumStorageRoleWithAggregatesFilter } from '../prisma/enum-storage-role-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class StorageMemberScalarWhereWithAggregatesInput {

    @Field(() => [StorageMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StorageMemberScalarWhereWithAggregatesInput>;

    @Field(() => [StorageMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StorageMemberScalarWhereWithAggregatesInput>;

    @Field(() => [StorageMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StorageMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    storageId?: IntWithAggregatesFilter;

    @Field(() => EnumStorageRoleWithAggregatesFilter, {nullable:true})
    role?: EnumStorageRoleWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
