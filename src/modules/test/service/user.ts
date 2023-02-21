import {Provide} from "@midwayjs/decorator";
import {BaseService} from "@cool-midway/core";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";

import {UserTestEntity} from "../entity/user";

/**
 * 定义用户Service用于扩展默认的list接口，增加一对多的查询
 */
@Provide()
export class UserTestService extends BaseService {
  @InjectEntityModel(UserTestEntity)
  userTestEntity: Repository<UserTestEntity>;

  async list() {
    return this.userTestEntity.find({
      relations: ["goods"],
    });
  }
}
