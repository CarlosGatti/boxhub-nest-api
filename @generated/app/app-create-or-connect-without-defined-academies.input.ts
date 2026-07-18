import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutDefinedAcademiesInput } from './app-create-without-defined-academies.input';

@InputType()
export class AppCreateOrConnectWithoutDefinedAcademiesInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppCreateWithoutDefinedAcademiesInput, {nullable:false})
    @Type(() => AppCreateWithoutDefinedAcademiesInput)
    create!: AppCreateWithoutDefinedAcademiesInput;
}
