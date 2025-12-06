import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AppRelationFilter } from '../app/app-relation-filter.input';

@InputType()
export class UserAppAccessWhereInput {

    @Field(() => [UserAppAccessWhereInput], {nullable:true})
    AND?: Array<UserAppAccessWhereInput>;

    @Field(() => [UserAppAccessWhereInput], {nullable:true})
    OR?: Array<UserAppAccessWhereInput>;

    @Field(() => [UserAppAccessWhereInput], {nullable:true})
    NOT?: Array<UserAppAccessWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AppRelationFilter, {nullable:true})
    app?: AppRelationFilter;
}
