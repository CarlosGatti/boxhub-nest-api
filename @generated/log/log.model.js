"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const log_action_enum_1 = require("../prisma/log-action.enum");
const graphql_4 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const user_model_1 = require("../user/user.model");
let Log = class Log {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_action_enum_1.LogAction, { nullable: false }),
    __metadata("design:type", Object)
], Log.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Log.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Log.prototype, "user", void 0);
Log = __decorate([
    (0, graphql_2.ObjectType)()
], Log);
exports.Log = Log;
//# sourceMappingURL=log.model.js.map