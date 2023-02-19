"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUser9644319170796 = void 0;
const typeorm_1 = require("typeorm");
const user_seed_1 = require("../seed/user.seed");
const bcrypt_1 = require("bcrypt");
class seedUser9644319170796 {
    constructor() {
        this.name = "seedUser9644319170796";
    }
    async up(queryRunner) {
        const userRepository = (0, typeorm_1.getRepository)("users");
        const userSeed = userRepository.create(user_seed_1.UserSeed);
        userSeed.password = await (0, bcrypt_1.hash)(userSeed.password, 10);
        await userRepository.save(userSeed);
    }
    async down(_) { }
}
exports.seedUser9644319170796 = seedUser9644319170796;
//# sourceMappingURL=9999999999900-seed-user.js.map