import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumStorageRoleFilter } from '../prisma/enum-storage-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StorageMemberScalarWhereInput {

    @Field(() => [StorageMemberScalarWhereInput], {nullable:true})
    AND?: Array<StorageMemberScalarWhereInput>;

    @Field(() => [StorageMemberScalarWhereInput], {nullable:true})
    OR?: Array<StorageMemberScalarWhereInput>;

    @Field(() => [StorageMemberScalarWhereInput], {nullable:true})
    NOT?: Array<StorageMemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    storageId?: IntFilter;

    @Field(() => EnumStorageRoleFilter, {nullable:true})
    role?: EnumStorageRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
