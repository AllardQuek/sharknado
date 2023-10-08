// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class GroupAdminUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GroupAdminUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type GroupAdminUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GroupAdminUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): GroupAdminUpdated | null {
    return changetype<GroupAdminUpdated | null>(
      store.get_in_block("GroupAdminUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): GroupAdminUpdated | null {
    return changetype<GroupAdminUpdated | null>(
      store.get("GroupAdminUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get oldAdmin(): Bytes {
    let value = this.get("oldAdmin");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set oldAdmin(value: Bytes) {
    this.set("oldAdmin", Value.fromBytes(value));
  }

  get newAdmin(): Bytes {
    let value = this.get("newAdmin");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set newAdmin(value: Bytes) {
    this.set("newAdmin", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class GroupCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GroupCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type GroupCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GroupCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): GroupCreated | null {
    return changetype<GroupCreated | null>(
      store.get_in_block("GroupCreated", id.toHexString())
    );
  }

  static load(id: Bytes): GroupCreated | null {
    return changetype<GroupCreated | null>(
      store.get("GroupCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get merkleTreeDepth(): BigInt {
    let value = this.get("merkleTreeDepth");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleTreeDepth(value: BigInt) {
    this.set("merkleTreeDepth", Value.fromBigInt(value));
  }

  get zeroValue(): BigInt {
    let value = this.get("zeroValue");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set zeroValue(value: BigInt) {
    this.set("zeroValue", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class GroupMerkleTreeDurationUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save GroupMerkleTreeDurationUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type GroupMerkleTreeDurationUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set(
        "GroupMerkleTreeDurationUpdated",
        id.toBytes().toHexString(),
        this
      );
    }
  }

  static loadInBlock(id: Bytes): GroupMerkleTreeDurationUpdated | null {
    return changetype<GroupMerkleTreeDurationUpdated | null>(
      store.get_in_block("GroupMerkleTreeDurationUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): GroupMerkleTreeDurationUpdated | null {
    return changetype<GroupMerkleTreeDurationUpdated | null>(
      store.get("GroupMerkleTreeDurationUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get oldMerkleTreeDuration(): BigInt {
    let value = this.get("oldMerkleTreeDuration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set oldMerkleTreeDuration(value: BigInt) {
    this.set("oldMerkleTreeDuration", Value.fromBigInt(value));
  }

  get newMerkleTreeDuration(): BigInt {
    let value = this.get("newMerkleTreeDuration");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newMerkleTreeDuration(value: BigInt) {
    this.set("newMerkleTreeDuration", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class MemberAdded extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type MemberAdded must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberAdded", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): MemberAdded | null {
    return changetype<MemberAdded | null>(
      store.get_in_block("MemberAdded", id.toHexString())
    );
  }

  static load(id: Bytes): MemberAdded | null {
    return changetype<MemberAdded | null>(
      store.get("MemberAdded", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get identityCommitment(): BigInt {
    let value = this.get("identityCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set identityCommitment(value: BigInt) {
    this.set("identityCommitment", Value.fromBigInt(value));
  }

  get merkleTreeRoot(): BigInt {
    let value = this.get("merkleTreeRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleTreeRoot(value: BigInt) {
    this.set("merkleTreeRoot", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class MemberRemoved extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberRemoved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type MemberRemoved must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberRemoved", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): MemberRemoved | null {
    return changetype<MemberRemoved | null>(
      store.get_in_block("MemberRemoved", id.toHexString())
    );
  }

  static load(id: Bytes): MemberRemoved | null {
    return changetype<MemberRemoved | null>(
      store.get("MemberRemoved", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get identityCommitment(): BigInt {
    let value = this.get("identityCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set identityCommitment(value: BigInt) {
    this.set("identityCommitment", Value.fromBigInt(value));
  }

  get merkleTreeRoot(): BigInt {
    let value = this.get("merkleTreeRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleTreeRoot(value: BigInt) {
    this.set("merkleTreeRoot", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class MemberUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MemberUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type MemberUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MemberUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): MemberUpdated | null {
    return changetype<MemberUpdated | null>(
      store.get_in_block("MemberUpdated", id.toHexString())
    );
  }

  static load(id: Bytes): MemberUpdated | null {
    return changetype<MemberUpdated | null>(
      store.get("MemberUpdated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get identityCommitment(): BigInt {
    let value = this.get("identityCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set identityCommitment(value: BigInt) {
    this.set("identityCommitment", Value.fromBigInt(value));
  }

  get newIdentityCommitment(): BigInt {
    let value = this.get("newIdentityCommitment");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newIdentityCommitment(value: BigInt) {
    this.set("newIdentityCommitment", Value.fromBigInt(value));
  }

  get merkleTreeRoot(): BigInt {
    let value = this.get("merkleTreeRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleTreeRoot(value: BigInt) {
    this.set("merkleTreeRoot", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ProofVerified extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProofVerified entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ProofVerified must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ProofVerified", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ProofVerified | null {
    return changetype<ProofVerified | null>(
      store.get_in_block("ProofVerified", id.toHexString())
    );
  }

  static load(id: Bytes): ProofVerified | null {
    return changetype<ProofVerified | null>(
      store.get("ProofVerified", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get groupId(): BigInt {
    let value = this.get("groupId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set groupId(value: BigInt) {
    this.set("groupId", Value.fromBigInt(value));
  }

  get merkleTreeRoot(): BigInt {
    let value = this.get("merkleTreeRoot");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set merkleTreeRoot(value: BigInt) {
    this.set("merkleTreeRoot", Value.fromBigInt(value));
  }

  get nullifierHash(): BigInt {
    let value = this.get("nullifierHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nullifierHash(value: BigInt) {
    this.set("nullifierHash", Value.fromBigInt(value));
  }

  get externalNullifier(): BigInt {
    let value = this.get("externalNullifier");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set externalNullifier(value: BigInt) {
    this.set("externalNullifier", Value.fromBigInt(value));
  }

  get signal(): BigInt {
    let value = this.get("signal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set signal(value: BigInt) {
    this.set("signal", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}