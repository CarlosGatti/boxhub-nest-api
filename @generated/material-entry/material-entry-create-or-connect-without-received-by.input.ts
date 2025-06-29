import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';

@InputType()
export class MaterialEntryCreateOrConnectWithoutReceivedByInput {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryCreateWithoutReceivedByInput, {nullable:false})
    @Type(() => MaterialEntryCreateWithoutReceivedByInput)
    create!: MaterialEntryCreateWithoutReceivedByInput;
}
