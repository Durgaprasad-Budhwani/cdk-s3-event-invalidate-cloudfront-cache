# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3EventInvalidateCloudFrontCache <a name="S3EventInvalidateCloudFrontCache" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache"></a>

#### Initializers <a name="Initializers" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer"></a>

```typescript
import { S3EventInvalidateCloudFrontCache } from 'cdk-s3-event-invalidate-cloudfront-cache'

new S3EventInvalidateCloudFrontCache(scope: Construct, id: string, props: S3EventInvalidateCloudFrontCacheProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps">S3EventInvalidateCloudFrontCacheProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps">S3EventInvalidateCloudFrontCacheProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.isConstruct"></a>

```typescript
import { S3EventInvalidateCloudFrontCache } from 'cdk-s3-event-invalidate-cloudfront-cache'

S3EventInvalidateCloudFrontCache.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### S3EventInvalidateCloudFrontCacheProps <a name="S3EventInvalidateCloudFrontCacheProps" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps"></a>

#### Initializer <a name="Initializer" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps.Initializer"></a>

```typescript
import { S3EventInvalidateCloudFrontCacheProps } from 'cdk-s3-event-invalidate-cloudfront-cache'

const s3EventInvalidateCloudFrontCacheProps: S3EventInvalidateCloudFrontCacheProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdk-s3-event-invalidate-cloudfront-cache.S3EventInvalidateCloudFrontCacheProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---



