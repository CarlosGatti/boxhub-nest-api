import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserAppAccessWhereInput } from './user-app-access-where.input';
import { Type } from 'class-transformer';
import { UserAppAccessOrderByWithRelationInput } from './user-app-access-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserAppAccessWhereUniqueInput } from './user-app-access-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserAppAccessScalarFieldEnum } from './user-app-access-scalar-field.enum';

@ArgsType()
export class FindFirstUserAppAccessArgs {

    @Field(() => UserAppAccessWhereInput, {nullable:true})
    @Type(() => UserAppAccessWhereInput)
    where?: UserAppAccessWhereInput;

    @Field(() => [UserAppAccessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserAppAccessOrderByWithRelationInput>;

    @Field(() => UserAppAccessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserAppAccessWhereUniqueInput, 'id' | 'userId_appId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserAppAccessScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserAppAccessScalarFieldEnum>;
}
