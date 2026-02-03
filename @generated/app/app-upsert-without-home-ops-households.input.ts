import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutHomeOpsHouseholdsInput } from './app-update-without-home-ops-households.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutHomeOpsHouseholdsInput } from './app-create-without-home-ops-households.input';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppUpsertWithoutHomeOpsHouseholdsInput {

    @Field(() => AppUpdateWithoutHomeOpsHouseholdsInput, {nullable:false})
    @Type(() => AppUpdateWithoutHomeOpsHouseholdsInput)
    update!: AppUpdateWithoutHomeOpsHouseholdsInput;

    @Field(() => AppCreateWithoutHomeOpsHouseholdsInput, {nullable:false})
    @Type(() => AppCreateWithoutHomeOpsHouseholdsInput)
    create!: AppCreateWithoutHomeOpsHouseholdsInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
