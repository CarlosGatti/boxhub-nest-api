import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutCategoriesInput } from './container-create-without-categories.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutCategoriesInput } from './container-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';

@InputType()
export class ContainerUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [ContainerCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerCreateWithoutCategoriesInput)
    create?: Array<ContainerCreateWithoutCategoriesInput>;

    @Field(() => [ContainerCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;
}
