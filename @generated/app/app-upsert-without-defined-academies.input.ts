import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutDefinedAcademiesInput } from './app-update-without-defined-academies.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutDefinedAcademiesInput } from './app-create-without-defined-academies.input';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppUpsertWithoutDefinedAcademiesInput {

    @Field(() => AppUpdateWithoutDefinedAcademiesInput, {nullable:false})
    @Type(() => AppUpdateWithoutDefinedAcademiesInput)
    update!: AppUpdateWithoutDefinedAcademiesInput;

    @Field(() => AppCreateWithoutDefinedAcademiesInput, {nullable:false})
    @Type(() => AppCreateWithoutDefinedAcademiesInput)
    create!: AppCreateWithoutDefinedAcademiesInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
