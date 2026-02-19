import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutSectionsInput } from './bucket-vision-board-create-without-sections.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutSectionsInput } from './bucket-vision-board-create-or-connect-without-sections.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@InputType()
export class BucketVisionBoardCreateNestedOneWithoutSectionsInput {

    @Field(() => BucketVisionBoardCreateWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutSectionsInput)
    create?: BucketVisionBoardCreateWithoutSectionsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutSectionsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
