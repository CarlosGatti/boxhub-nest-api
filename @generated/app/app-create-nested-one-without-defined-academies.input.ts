import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutDefinedAcademiesInput } from './app-create-without-defined-academies.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutDefinedAcademiesInput } from './app-create-or-connect-without-defined-academies.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutDefinedAcademiesInput {

    @Field(() => AppCreateWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppCreateWithoutDefinedAcademiesInput)
    create?: AppCreateWithoutDefinedAcademiesInput;

    @Field(() => AppCreateOrConnectWithoutDefinedAcademiesInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutDefinedAcademiesInput)
    connectOrCreate?: AppCreateOrConnectWithoutDefinedAcademiesInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;
}
