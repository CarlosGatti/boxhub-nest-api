import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserAppAccessScalarWhereInput {

    @Field(() => [UserAppAccessScalarWhereInput], {nullable:true})
    AND?: Array<UserAppAccessScalarWhereInput>;

    @Field(() => [UserAppAccessScalarWhereInput], {nullable:true})
    OR?: Array<UserAppAccessScalarWhereInput>;

    @Field(() => [UserAppAccessScalarWhereInput], {nullable:true})
    NOT?: Array<UserAppAccessScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    appId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
