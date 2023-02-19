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
        await this.down(queryRunner);
        const userSeed = userRepository.create(user_seed_1.UserSeed);
        userSeed.password = await (0, bcrypt_1.hash)(userSeed.password, 10);
    }
    async down(_) {
        const userData = await (0, typeorm_1.getRepository)("user").query(`DELETE [users]; DBCC CHECKIDENT('user', RESEED, 0);`);
    }
}
exports.seedUser9644319170796 = seedUser9644319170796;
//# sourceMappingURL=seed-user.js.map