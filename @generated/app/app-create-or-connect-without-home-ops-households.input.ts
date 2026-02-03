import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutHomeOpsHouseholdsInput } from './app-create-without-home-ops-households.input';

@InputType()
export class AppCreateOrConnectWithoutHomeOpsHouseholdsInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppCreateWithoutHomeOpsHouseholdsInput, {nullable:false})
    @Type(() => AppCreateWithoutHomeOpsHouseholdsInput)
    create!: AppCreateWithoutHomeOpsHouseholdsInput;
}
