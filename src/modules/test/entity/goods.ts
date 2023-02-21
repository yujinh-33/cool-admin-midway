import {EntityModel} from "@midwayjs/orm";
import {BaseEntity} from "@cool-midway/core";
import {Column, ManyToOne, JoinColumn} from "typeorm";

import {UserTestEntity} from "./user";

/**
 * 商品实体类：
 *  字段：
 *    good_name 商品名称
 *    user_id 拥有者ID（主键）
 *    user 拥有者的信息
 */
@EntityModel("goods")
export class GoodsTestEntity extends BaseEntity {
  @Column()
  good_name: string;

  @Column()
  user_id: number;

  /**
   * ManyToOne：商品与用户的多对一关系
   *  参数一：返回用户实体类
   *  参数二：返回主表实体类上定义的副表(即当前表)的属性
   *
   * @JoinColumn：用于标注在一对一或者多对一的关系中配置关联关系
   *  name：主表中的主键列所对应的该表中的关联的列的列名称
   *
   * 链接关系：user.id === goods.user_id
   */
  @ManyToOne(() => UserTestEntity, (user) => user.goods)
  @JoinColumn({name: "user_id"})

  // 当对商品查询时，附带用户的信息
  user: UserTestEntity;
}
