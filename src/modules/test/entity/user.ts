import {EntityModel} from "@midwayjs/orm";
import {BaseEntity} from "@cool-midway/core";
import {Column, OneToMany} from "typeorm";

import {GoodsTestEntity} from "./goods";

/**
 * 用户实体类：
 *  字段：
 *    name 用户名称
 *    age 用户年龄
 *    goods 用户所拥有的商品
 */
@EntityModel("user")
export class UserTestEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  age: number;

  /*
   * 一对多，OneToMany 必须与 ManyToMany 搭配使用，
   *   参数一：返回 副表 的 实体类（GoodsTestEntity）
   *   参数二：返回 副表 对应的 ManyToOne 字段
   */
  @OneToMany(() => GoodsTestEntity, (good) => good.user)
  goods: GoodsTestEntity[];
}
