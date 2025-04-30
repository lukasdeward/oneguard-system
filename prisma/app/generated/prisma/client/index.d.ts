
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model merchants
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type merchants = $Result.DefaultSelection<Prisma.$merchantsPayload>
/**
 * Model ongoing_verifications
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ongoing_verifications = $Result.DefaultSelection<Prisma.$ongoing_verificationsPayload>
/**
 * Model verifyed_customers
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type verifyed_customers = $Result.DefaultSelection<Prisma.$verifyed_customersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Merchants
 * const merchants = await prisma.merchants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Merchants
   * const merchants = await prisma.merchants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.merchants`: Exposes CRUD operations for the **merchants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchants.findMany()
    * ```
    */
  get merchants(): Prisma.merchantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ongoing_verifications`: Exposes CRUD operations for the **ongoing_verifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongoing_verifications
    * const ongoing_verifications = await prisma.ongoing_verifications.findMany()
    * ```
    */
  get ongoing_verifications(): Prisma.ongoing_verificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verifyed_customers`: Exposes CRUD operations for the **verifyed_customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifyed_customers
    * const verifyed_customers = await prisma.verifyed_customers.findMany()
    * ```
    */
  get verifyed_customers(): Prisma.verifyed_customersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    merchants: 'merchants',
    ongoing_verifications: 'ongoing_verifications',
    verifyed_customers: 'verifyed_customers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "merchants" | "ongoing_verifications" | "verifyed_customers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      merchants: {
        payload: Prisma.$merchantsPayload<ExtArgs>
        fields: Prisma.merchantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.merchantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.merchantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          findFirst: {
            args: Prisma.merchantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.merchantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          findMany: {
            args: Prisma.merchantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          create: {
            args: Prisma.merchantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          createMany: {
            args: Prisma.merchantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.merchantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          delete: {
            args: Prisma.merchantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          update: {
            args: Prisma.merchantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          deleteMany: {
            args: Prisma.merchantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.merchantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.merchantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>[]
          }
          upsert: {
            args: Prisma.merchantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$merchantsPayload>
          }
          aggregate: {
            args: Prisma.MerchantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchants>
          }
          groupBy: {
            args: Prisma.merchantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.merchantsCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantsCountAggregateOutputType> | number
          }
        }
      }
      ongoing_verifications: {
        payload: Prisma.$ongoing_verificationsPayload<ExtArgs>
        fields: Prisma.ongoing_verificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ongoing_verificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ongoing_verificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          findFirst: {
            args: Prisma.ongoing_verificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ongoing_verificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          findMany: {
            args: Prisma.ongoing_verificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>[]
          }
          create: {
            args: Prisma.ongoing_verificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          createMany: {
            args: Prisma.ongoing_verificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ongoing_verificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>[]
          }
          delete: {
            args: Prisma.ongoing_verificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          update: {
            args: Prisma.ongoing_verificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          deleteMany: {
            args: Prisma.ongoing_verificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ongoing_verificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ongoing_verificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>[]
          }
          upsert: {
            args: Prisma.ongoing_verificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongoing_verificationsPayload>
          }
          aggregate: {
            args: Prisma.Ongoing_verificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOngoing_verifications>
          }
          groupBy: {
            args: Prisma.ongoing_verificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ongoing_verificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ongoing_verificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Ongoing_verificationsCountAggregateOutputType> | number
          }
        }
      }
      verifyed_customers: {
        payload: Prisma.$verifyed_customersPayload<ExtArgs>
        fields: Prisma.verifyed_customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verifyed_customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verifyed_customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          findFirst: {
            args: Prisma.verifyed_customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verifyed_customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          findMany: {
            args: Prisma.verifyed_customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>[]
          }
          create: {
            args: Prisma.verifyed_customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          createMany: {
            args: Prisma.verifyed_customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verifyed_customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>[]
          }
          delete: {
            args: Prisma.verifyed_customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          update: {
            args: Prisma.verifyed_customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          deleteMany: {
            args: Prisma.verifyed_customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verifyed_customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verifyed_customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>[]
          }
          upsert: {
            args: Prisma.verifyed_customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verifyed_customersPayload>
          }
          aggregate: {
            args: Prisma.Verifyed_customersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerifyed_customers>
          }
          groupBy: {
            args: Prisma.verifyed_customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verifyed_customersGroupByOutputType>[]
          }
          count: {
            args: Prisma.verifyed_customersCountArgs<ExtArgs>
            result: $Utils.Optional<Verifyed_customersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    merchants?: merchantsOmit
    ongoing_verifications?: ongoing_verificationsOmit
    verifyed_customers?: verifyed_customersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model merchants
   */

  export type AggregateMerchants = {
    _count: MerchantsCountAggregateOutputType | null
    _min: MerchantsMinAggregateOutputType | null
    _max: MerchantsMaxAggregateOutputType | null
  }

  export type MerchantsMinAggregateOutputType = {
    shop: string | null
    public_proxy: string | null
    created_at: Date | null
  }

  export type MerchantsMaxAggregateOutputType = {
    shop: string | null
    public_proxy: string | null
    created_at: Date | null
  }

  export type MerchantsCountAggregateOutputType = {
    shop: number
    public_proxy: number
    created_at: number
    _all: number
  }


  export type MerchantsMinAggregateInputType = {
    shop?: true
    public_proxy?: true
    created_at?: true
  }

  export type MerchantsMaxAggregateInputType = {
    shop?: true
    public_proxy?: true
    created_at?: true
  }

  export type MerchantsCountAggregateInputType = {
    shop?: true
    public_proxy?: true
    created_at?: true
    _all?: true
  }

  export type MerchantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchants to aggregate.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned merchants
    **/
    _count?: true | MerchantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantsMaxAggregateInputType
  }

  export type GetMerchantsAggregateType<T extends MerchantsAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchants[P]>
      : GetScalarType<T[P], AggregateMerchants[P]>
  }




  export type merchantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: merchantsWhereInput
    orderBy?: merchantsOrderByWithAggregationInput | merchantsOrderByWithAggregationInput[]
    by: MerchantsScalarFieldEnum[] | MerchantsScalarFieldEnum
    having?: merchantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantsCountAggregateInputType | true
    _min?: MerchantsMinAggregateInputType
    _max?: MerchantsMaxAggregateInputType
  }

  export type MerchantsGroupByOutputType = {
    shop: string
    public_proxy: string | null
    created_at: Date
    _count: MerchantsCountAggregateOutputType | null
    _min: MerchantsMinAggregateOutputType | null
    _max: MerchantsMaxAggregateOutputType | null
  }

  type GetMerchantsGroupByPayload<T extends merchantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantsGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantsGroupByOutputType[P]>
        }
      >
    >


  export type merchantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shop?: boolean
    public_proxy?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shop?: boolean
    public_proxy?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shop?: boolean
    public_proxy?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["merchants"]>

  export type merchantsSelectScalar = {
    shop?: boolean
    public_proxy?: boolean
    created_at?: boolean
  }

  export type merchantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shop" | "public_proxy" | "created_at", ExtArgs["result"]["merchants"]>

  export type $merchantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "merchants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      shop: string
      public_proxy: string | null
      created_at: Date
    }, ExtArgs["result"]["merchants"]>
    composites: {}
  }

  type merchantsGetPayload<S extends boolean | null | undefined | merchantsDefaultArgs> = $Result.GetResult<Prisma.$merchantsPayload, S>

  type merchantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<merchantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantsCountAggregateInputType | true
    }

  export interface merchantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['merchants'], meta: { name: 'merchants' } }
    /**
     * Find zero or one Merchants that matches the filter.
     * @param {merchantsFindUniqueArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends merchantsFindUniqueArgs>(args: SelectSubset<T, merchantsFindUniqueArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {merchantsFindUniqueOrThrowArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends merchantsFindUniqueOrThrowArgs>(args: SelectSubset<T, merchantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindFirstArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends merchantsFindFirstArgs>(args?: SelectSubset<T, merchantsFindFirstArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindFirstOrThrowArgs} args - Arguments to find a Merchants
     * @example
     * // Get one Merchants
     * const merchants = await prisma.merchants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends merchantsFindFirstOrThrowArgs>(args?: SelectSubset<T, merchantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchants.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchants.findMany({ take: 10 })
     * 
     * // Only select the `shop`
     * const merchantsWithShopOnly = await prisma.merchants.findMany({ select: { shop: true } })
     * 
     */
    findMany<T extends merchantsFindManyArgs>(args?: SelectSubset<T, merchantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchants.
     * @param {merchantsCreateArgs} args - Arguments to create a Merchants.
     * @example
     * // Create one Merchants
     * const Merchants = await prisma.merchants.create({
     *   data: {
     *     // ... data to create a Merchants
     *   }
     * })
     * 
     */
    create<T extends merchantsCreateArgs>(args: SelectSubset<T, merchantsCreateArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {merchantsCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchants = await prisma.merchants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends merchantsCreateManyArgs>(args?: SelectSubset<T, merchantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {merchantsCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchants = await prisma.merchants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `shop`
     * const merchantsWithShopOnly = await prisma.merchants.createManyAndReturn({
     *   select: { shop: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends merchantsCreateManyAndReturnArgs>(args?: SelectSubset<T, merchantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchants.
     * @param {merchantsDeleteArgs} args - Arguments to delete one Merchants.
     * @example
     * // Delete one Merchants
     * const Merchants = await prisma.merchants.delete({
     *   where: {
     *     // ... filter to delete one Merchants
     *   }
     * })
     * 
     */
    delete<T extends merchantsDeleteArgs>(args: SelectSubset<T, merchantsDeleteArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchants.
     * @param {merchantsUpdateArgs} args - Arguments to update one Merchants.
     * @example
     * // Update one Merchants
     * const merchants = await prisma.merchants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends merchantsUpdateArgs>(args: SelectSubset<T, merchantsUpdateArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {merchantsDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends merchantsDeleteManyArgs>(args?: SelectSubset<T, merchantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchants = await prisma.merchants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends merchantsUpdateManyArgs>(args: SelectSubset<T, merchantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {merchantsUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchants = await prisma.merchants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `shop`
     * const merchantsWithShopOnly = await prisma.merchants.updateManyAndReturn({
     *   select: { shop: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends merchantsUpdateManyAndReturnArgs>(args: SelectSubset<T, merchantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchants.
     * @param {merchantsUpsertArgs} args - Arguments to update or create a Merchants.
     * @example
     * // Update or create a Merchants
     * const merchants = await prisma.merchants.upsert({
     *   create: {
     *     // ... data to create a Merchants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchants we want to update
     *   }
     * })
     */
    upsert<T extends merchantsUpsertArgs>(args: SelectSubset<T, merchantsUpsertArgs<ExtArgs>>): Prisma__merchantsClient<$Result.GetResult<Prisma.$merchantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchants.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends merchantsCountArgs>(
      args?: Subset<T, merchantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantsAggregateArgs>(args: Subset<T, MerchantsAggregateArgs>): Prisma.PrismaPromise<GetMerchantsAggregateType<T>>

    /**
     * Group by Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {merchantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends merchantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: merchantsGroupByArgs['orderBy'] }
        : { orderBy?: merchantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, merchantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the merchants model
   */
  readonly fields: merchantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for merchants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__merchantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the merchants model
   */
  interface merchantsFieldRefs {
    readonly shop: FieldRef<"merchants", 'String'>
    readonly public_proxy: FieldRef<"merchants", 'String'>
    readonly created_at: FieldRef<"merchants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * merchants findUnique
   */
  export type merchantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants findUniqueOrThrow
   */
  export type merchantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants findFirst
   */
  export type merchantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants findFirstOrThrow
   */
  export type merchantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of merchants.
     */
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants findMany
   */
  export type merchantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter, which merchants to fetch.
     */
    where?: merchantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of merchants to fetch.
     */
    orderBy?: merchantsOrderByWithRelationInput | merchantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing merchants.
     */
    cursor?: merchantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` merchants.
     */
    skip?: number
    distinct?: MerchantsScalarFieldEnum | MerchantsScalarFieldEnum[]
  }

  /**
   * merchants create
   */
  export type merchantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data needed to create a merchants.
     */
    data: XOR<merchantsCreateInput, merchantsUncheckedCreateInput>
  }

  /**
   * merchants createMany
   */
  export type merchantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many merchants.
     */
    data: merchantsCreateManyInput | merchantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merchants createManyAndReturn
   */
  export type merchantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data used to create many merchants.
     */
    data: merchantsCreateManyInput | merchantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * merchants update
   */
  export type merchantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data needed to update a merchants.
     */
    data: XOR<merchantsUpdateInput, merchantsUncheckedUpdateInput>
    /**
     * Choose, which merchants to update.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants updateMany
   */
  export type merchantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantsUpdateManyMutationInput, merchantsUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
  }

  /**
   * merchants updateManyAndReturn
   */
  export type merchantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The data used to update merchants.
     */
    data: XOR<merchantsUpdateManyMutationInput, merchantsUncheckedUpdateManyInput>
    /**
     * Filter which merchants to update
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to update.
     */
    limit?: number
  }

  /**
   * merchants upsert
   */
  export type merchantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * The filter to search for the merchants to update in case it exists.
     */
    where: merchantsWhereUniqueInput
    /**
     * In case the merchants found by the `where` argument doesn't exist, create a new merchants with this data.
     */
    create: XOR<merchantsCreateInput, merchantsUncheckedCreateInput>
    /**
     * In case the merchants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<merchantsUpdateInput, merchantsUncheckedUpdateInput>
  }

  /**
   * merchants delete
   */
  export type merchantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
    /**
     * Filter which merchants to delete.
     */
    where: merchantsWhereUniqueInput
  }

  /**
   * merchants deleteMany
   */
  export type merchantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which merchants to delete
     */
    where?: merchantsWhereInput
    /**
     * Limit how many merchants to delete.
     */
    limit?: number
  }

  /**
   * merchants without action
   */
  export type merchantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the merchants
     */
    select?: merchantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the merchants
     */
    omit?: merchantsOmit<ExtArgs> | null
  }


  /**
   * Model ongoing_verifications
   */

  export type AggregateOngoing_verifications = {
    _count: Ongoing_verificationsCountAggregateOutputType | null
    _min: Ongoing_verificationsMinAggregateOutputType | null
    _max: Ongoing_verificationsMaxAggregateOutputType | null
  }

  export type Ongoing_verificationsMinAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    created_at: Date | null
  }

  export type Ongoing_verificationsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    created_at: Date | null
  }

  export type Ongoing_verificationsCountAggregateOutputType = {
    id: number
    email: number
    address: number
    created_at: number
    _all: number
  }


  export type Ongoing_verificationsMinAggregateInputType = {
    id?: true
    email?: true
    address?: true
    created_at?: true
  }

  export type Ongoing_verificationsMaxAggregateInputType = {
    id?: true
    email?: true
    address?: true
    created_at?: true
  }

  export type Ongoing_verificationsCountAggregateInputType = {
    id?: true
    email?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type Ongoing_verificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongoing_verifications to aggregate.
     */
    where?: ongoing_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongoing_verifications to fetch.
     */
    orderBy?: ongoing_verificationsOrderByWithRelationInput | ongoing_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ongoing_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongoing_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongoing_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ongoing_verifications
    **/
    _count?: true | Ongoing_verificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ongoing_verificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ongoing_verificationsMaxAggregateInputType
  }

  export type GetOngoing_verificationsAggregateType<T extends Ongoing_verificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOngoing_verifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOngoing_verifications[P]>
      : GetScalarType<T[P], AggregateOngoing_verifications[P]>
  }




  export type ongoing_verificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ongoing_verificationsWhereInput
    orderBy?: ongoing_verificationsOrderByWithAggregationInput | ongoing_verificationsOrderByWithAggregationInput[]
    by: Ongoing_verificationsScalarFieldEnum[] | Ongoing_verificationsScalarFieldEnum
    having?: ongoing_verificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ongoing_verificationsCountAggregateInputType | true
    _min?: Ongoing_verificationsMinAggregateInputType
    _max?: Ongoing_verificationsMaxAggregateInputType
  }

  export type Ongoing_verificationsGroupByOutputType = {
    id: string
    email: string | null
    address: string | null
    created_at: Date
    _count: Ongoing_verificationsCountAggregateOutputType | null
    _min: Ongoing_verificationsMinAggregateOutputType | null
    _max: Ongoing_verificationsMaxAggregateOutputType | null
  }

  type GetOngoing_verificationsGroupByPayload<T extends ongoing_verificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ongoing_verificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ongoing_verificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ongoing_verificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Ongoing_verificationsGroupByOutputType[P]>
        }
      >
    >


  export type ongoing_verificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ongoing_verifications"]>

  export type ongoing_verificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ongoing_verifications"]>

  export type ongoing_verificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ongoing_verifications"]>

  export type ongoing_verificationsSelectScalar = {
    id?: boolean
    email?: boolean
    address?: boolean
    created_at?: boolean
  }

  export type ongoing_verificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "address" | "created_at", ExtArgs["result"]["ongoing_verifications"]>

  export type $ongoing_verificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ongoing_verifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      address: string | null
      created_at: Date
    }, ExtArgs["result"]["ongoing_verifications"]>
    composites: {}
  }

  type ongoing_verificationsGetPayload<S extends boolean | null | undefined | ongoing_verificationsDefaultArgs> = $Result.GetResult<Prisma.$ongoing_verificationsPayload, S>

  type ongoing_verificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ongoing_verificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ongoing_verificationsCountAggregateInputType | true
    }

  export interface ongoing_verificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ongoing_verifications'], meta: { name: 'ongoing_verifications' } }
    /**
     * Find zero or one Ongoing_verifications that matches the filter.
     * @param {ongoing_verificationsFindUniqueArgs} args - Arguments to find a Ongoing_verifications
     * @example
     * // Get one Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ongoing_verificationsFindUniqueArgs>(args: SelectSubset<T, ongoing_verificationsFindUniqueArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ongoing_verifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ongoing_verificationsFindUniqueOrThrowArgs} args - Arguments to find a Ongoing_verifications
     * @example
     * // Get one Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ongoing_verificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ongoing_verificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ongoing_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsFindFirstArgs} args - Arguments to find a Ongoing_verifications
     * @example
     * // Get one Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ongoing_verificationsFindFirstArgs>(args?: SelectSubset<T, ongoing_verificationsFindFirstArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ongoing_verifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsFindFirstOrThrowArgs} args - Arguments to find a Ongoing_verifications
     * @example
     * // Get one Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ongoing_verificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ongoing_verificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ongoing_verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findMany()
     * 
     * // Get first 10 Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongoing_verificationsWithIdOnly = await prisma.ongoing_verifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ongoing_verificationsFindManyArgs>(args?: SelectSubset<T, ongoing_verificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ongoing_verifications.
     * @param {ongoing_verificationsCreateArgs} args - Arguments to create a Ongoing_verifications.
     * @example
     * // Create one Ongoing_verifications
     * const Ongoing_verifications = await prisma.ongoing_verifications.create({
     *   data: {
     *     // ... data to create a Ongoing_verifications
     *   }
     * })
     * 
     */
    create<T extends ongoing_verificationsCreateArgs>(args: SelectSubset<T, ongoing_verificationsCreateArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ongoing_verifications.
     * @param {ongoing_verificationsCreateManyArgs} args - Arguments to create many Ongoing_verifications.
     * @example
     * // Create many Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ongoing_verificationsCreateManyArgs>(args?: SelectSubset<T, ongoing_verificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongoing_verifications and returns the data saved in the database.
     * @param {ongoing_verificationsCreateManyAndReturnArgs} args - Arguments to create many Ongoing_verifications.
     * @example
     * // Create many Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongoing_verifications and only return the `id`
     * const ongoing_verificationsWithIdOnly = await prisma.ongoing_verifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ongoing_verificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ongoing_verificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ongoing_verifications.
     * @param {ongoing_verificationsDeleteArgs} args - Arguments to delete one Ongoing_verifications.
     * @example
     * // Delete one Ongoing_verifications
     * const Ongoing_verifications = await prisma.ongoing_verifications.delete({
     *   where: {
     *     // ... filter to delete one Ongoing_verifications
     *   }
     * })
     * 
     */
    delete<T extends ongoing_verificationsDeleteArgs>(args: SelectSubset<T, ongoing_verificationsDeleteArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ongoing_verifications.
     * @param {ongoing_verificationsUpdateArgs} args - Arguments to update one Ongoing_verifications.
     * @example
     * // Update one Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ongoing_verificationsUpdateArgs>(args: SelectSubset<T, ongoing_verificationsUpdateArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ongoing_verifications.
     * @param {ongoing_verificationsDeleteManyArgs} args - Arguments to filter Ongoing_verifications to delete.
     * @example
     * // Delete a few Ongoing_verifications
     * const { count } = await prisma.ongoing_verifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ongoing_verificationsDeleteManyArgs>(args?: SelectSubset<T, ongoing_verificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongoing_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ongoing_verificationsUpdateManyArgs>(args: SelectSubset<T, ongoing_verificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongoing_verifications and returns the data updated in the database.
     * @param {ongoing_verificationsUpdateManyAndReturnArgs} args - Arguments to update many Ongoing_verifications.
     * @example
     * // Update many Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ongoing_verifications and only return the `id`
     * const ongoing_verificationsWithIdOnly = await prisma.ongoing_verifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ongoing_verificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ongoing_verificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ongoing_verifications.
     * @param {ongoing_verificationsUpsertArgs} args - Arguments to update or create a Ongoing_verifications.
     * @example
     * // Update or create a Ongoing_verifications
     * const ongoing_verifications = await prisma.ongoing_verifications.upsert({
     *   create: {
     *     // ... data to create a Ongoing_verifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ongoing_verifications we want to update
     *   }
     * })
     */
    upsert<T extends ongoing_verificationsUpsertArgs>(args: SelectSubset<T, ongoing_verificationsUpsertArgs<ExtArgs>>): Prisma__ongoing_verificationsClient<$Result.GetResult<Prisma.$ongoing_verificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ongoing_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsCountArgs} args - Arguments to filter Ongoing_verifications to count.
     * @example
     * // Count the number of Ongoing_verifications
     * const count = await prisma.ongoing_verifications.count({
     *   where: {
     *     // ... the filter for the Ongoing_verifications we want to count
     *   }
     * })
    **/
    count<T extends ongoing_verificationsCountArgs>(
      args?: Subset<T, ongoing_verificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ongoing_verificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ongoing_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ongoing_verificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ongoing_verificationsAggregateArgs>(args: Subset<T, Ongoing_verificationsAggregateArgs>): Prisma.PrismaPromise<GetOngoing_verificationsAggregateType<T>>

    /**
     * Group by Ongoing_verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongoing_verificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ongoing_verificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ongoing_verificationsGroupByArgs['orderBy'] }
        : { orderBy?: ongoing_verificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ongoing_verificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngoing_verificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ongoing_verifications model
   */
  readonly fields: ongoing_verificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ongoing_verifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ongoing_verificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ongoing_verifications model
   */
  interface ongoing_verificationsFieldRefs {
    readonly id: FieldRef<"ongoing_verifications", 'String'>
    readonly email: FieldRef<"ongoing_verifications", 'String'>
    readonly address: FieldRef<"ongoing_verifications", 'String'>
    readonly created_at: FieldRef<"ongoing_verifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ongoing_verifications findUnique
   */
  export type ongoing_verificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter, which ongoing_verifications to fetch.
     */
    where: ongoing_verificationsWhereUniqueInput
  }

  /**
   * ongoing_verifications findUniqueOrThrow
   */
  export type ongoing_verificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter, which ongoing_verifications to fetch.
     */
    where: ongoing_verificationsWhereUniqueInput
  }

  /**
   * ongoing_verifications findFirst
   */
  export type ongoing_verificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter, which ongoing_verifications to fetch.
     */
    where?: ongoing_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongoing_verifications to fetch.
     */
    orderBy?: ongoing_verificationsOrderByWithRelationInput | ongoing_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongoing_verifications.
     */
    cursor?: ongoing_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongoing_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongoing_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongoing_verifications.
     */
    distinct?: Ongoing_verificationsScalarFieldEnum | Ongoing_verificationsScalarFieldEnum[]
  }

  /**
   * ongoing_verifications findFirstOrThrow
   */
  export type ongoing_verificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter, which ongoing_verifications to fetch.
     */
    where?: ongoing_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongoing_verifications to fetch.
     */
    orderBy?: ongoing_verificationsOrderByWithRelationInput | ongoing_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongoing_verifications.
     */
    cursor?: ongoing_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongoing_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongoing_verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongoing_verifications.
     */
    distinct?: Ongoing_verificationsScalarFieldEnum | Ongoing_verificationsScalarFieldEnum[]
  }

  /**
   * ongoing_verifications findMany
   */
  export type ongoing_verificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter, which ongoing_verifications to fetch.
     */
    where?: ongoing_verificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongoing_verifications to fetch.
     */
    orderBy?: ongoing_verificationsOrderByWithRelationInput | ongoing_verificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ongoing_verifications.
     */
    cursor?: ongoing_verificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongoing_verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongoing_verifications.
     */
    skip?: number
    distinct?: Ongoing_verificationsScalarFieldEnum | Ongoing_verificationsScalarFieldEnum[]
  }

  /**
   * ongoing_verifications create
   */
  export type ongoing_verificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a ongoing_verifications.
     */
    data?: XOR<ongoing_verificationsCreateInput, ongoing_verificationsUncheckedCreateInput>
  }

  /**
   * ongoing_verifications createMany
   */
  export type ongoing_verificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ongoing_verifications.
     */
    data: ongoing_verificationsCreateManyInput | ongoing_verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ongoing_verifications createManyAndReturn
   */
  export type ongoing_verificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * The data used to create many ongoing_verifications.
     */
    data: ongoing_verificationsCreateManyInput | ongoing_verificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ongoing_verifications update
   */
  export type ongoing_verificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a ongoing_verifications.
     */
    data: XOR<ongoing_verificationsUpdateInput, ongoing_verificationsUncheckedUpdateInput>
    /**
     * Choose, which ongoing_verifications to update.
     */
    where: ongoing_verificationsWhereUniqueInput
  }

  /**
   * ongoing_verifications updateMany
   */
  export type ongoing_verificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ongoing_verifications.
     */
    data: XOR<ongoing_verificationsUpdateManyMutationInput, ongoing_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which ongoing_verifications to update
     */
    where?: ongoing_verificationsWhereInput
    /**
     * Limit how many ongoing_verifications to update.
     */
    limit?: number
  }

  /**
   * ongoing_verifications updateManyAndReturn
   */
  export type ongoing_verificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * The data used to update ongoing_verifications.
     */
    data: XOR<ongoing_verificationsUpdateManyMutationInput, ongoing_verificationsUncheckedUpdateManyInput>
    /**
     * Filter which ongoing_verifications to update
     */
    where?: ongoing_verificationsWhereInput
    /**
     * Limit how many ongoing_verifications to update.
     */
    limit?: number
  }

  /**
   * ongoing_verifications upsert
   */
  export type ongoing_verificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the ongoing_verifications to update in case it exists.
     */
    where: ongoing_verificationsWhereUniqueInput
    /**
     * In case the ongoing_verifications found by the `where` argument doesn't exist, create a new ongoing_verifications with this data.
     */
    create: XOR<ongoing_verificationsCreateInput, ongoing_verificationsUncheckedCreateInput>
    /**
     * In case the ongoing_verifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ongoing_verificationsUpdateInput, ongoing_verificationsUncheckedUpdateInput>
  }

  /**
   * ongoing_verifications delete
   */
  export type ongoing_verificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
    /**
     * Filter which ongoing_verifications to delete.
     */
    where: ongoing_verificationsWhereUniqueInput
  }

  /**
   * ongoing_verifications deleteMany
   */
  export type ongoing_verificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongoing_verifications to delete
     */
    where?: ongoing_verificationsWhereInput
    /**
     * Limit how many ongoing_verifications to delete.
     */
    limit?: number
  }

  /**
   * ongoing_verifications without action
   */
  export type ongoing_verificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongoing_verifications
     */
    select?: ongoing_verificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ongoing_verifications
     */
    omit?: ongoing_verificationsOmit<ExtArgs> | null
  }


  /**
   * Model verifyed_customers
   */

  export type AggregateVerifyed_customers = {
    _count: Verifyed_customersCountAggregateOutputType | null
    _avg: Verifyed_customersAvgAggregateOutputType | null
    _sum: Verifyed_customersSumAggregateOutputType | null
    _min: Verifyed_customersMinAggregateOutputType | null
    _max: Verifyed_customersMaxAggregateOutputType | null
  }

  export type Verifyed_customersAvgAggregateOutputType = {
    age: number | null
  }

  export type Verifyed_customersSumAggregateOutputType = {
    age: bigint | null
  }

  export type Verifyed_customersMinAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    age: bigint | null
    created_at: Date | null
  }

  export type Verifyed_customersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    address: string | null
    age: bigint | null
    created_at: Date | null
  }

  export type Verifyed_customersCountAggregateOutputType = {
    id: number
    email: number
    address: number
    age: number
    created_at: number
    _all: number
  }


  export type Verifyed_customersAvgAggregateInputType = {
    age?: true
  }

  export type Verifyed_customersSumAggregateInputType = {
    age?: true
  }

  export type Verifyed_customersMinAggregateInputType = {
    id?: true
    email?: true
    address?: true
    age?: true
    created_at?: true
  }

  export type Verifyed_customersMaxAggregateInputType = {
    id?: true
    email?: true
    address?: true
    age?: true
    created_at?: true
  }

  export type Verifyed_customersCountAggregateInputType = {
    id?: true
    email?: true
    address?: true
    age?: true
    created_at?: true
    _all?: true
  }

  export type Verifyed_customersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifyed_customers to aggregate.
     */
    where?: verifyed_customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifyed_customers to fetch.
     */
    orderBy?: verifyed_customersOrderByWithRelationInput | verifyed_customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verifyed_customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifyed_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifyed_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verifyed_customers
    **/
    _count?: true | Verifyed_customersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Verifyed_customersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Verifyed_customersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verifyed_customersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verifyed_customersMaxAggregateInputType
  }

  export type GetVerifyed_customersAggregateType<T extends Verifyed_customersAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifyed_customers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifyed_customers[P]>
      : GetScalarType<T[P], AggregateVerifyed_customers[P]>
  }




  export type verifyed_customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verifyed_customersWhereInput
    orderBy?: verifyed_customersOrderByWithAggregationInput | verifyed_customersOrderByWithAggregationInput[]
    by: Verifyed_customersScalarFieldEnum[] | Verifyed_customersScalarFieldEnum
    having?: verifyed_customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verifyed_customersCountAggregateInputType | true
    _avg?: Verifyed_customersAvgAggregateInputType
    _sum?: Verifyed_customersSumAggregateInputType
    _min?: Verifyed_customersMinAggregateInputType
    _max?: Verifyed_customersMaxAggregateInputType
  }

  export type Verifyed_customersGroupByOutputType = {
    id: string
    email: string | null
    address: string | null
    age: bigint | null
    created_at: Date
    _count: Verifyed_customersCountAggregateOutputType | null
    _avg: Verifyed_customersAvgAggregateOutputType | null
    _sum: Verifyed_customersSumAggregateOutputType | null
    _min: Verifyed_customersMinAggregateOutputType | null
    _max: Verifyed_customersMaxAggregateOutputType | null
  }

  type GetVerifyed_customersGroupByPayload<T extends verifyed_customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verifyed_customersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verifyed_customersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verifyed_customersGroupByOutputType[P]>
            : GetScalarType<T[P], Verifyed_customersGroupByOutputType[P]>
        }
      >
    >


  export type verifyed_customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    age?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["verifyed_customers"]>

  export type verifyed_customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    age?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["verifyed_customers"]>

  export type verifyed_customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    address?: boolean
    age?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["verifyed_customers"]>

  export type verifyed_customersSelectScalar = {
    id?: boolean
    email?: boolean
    address?: boolean
    age?: boolean
    created_at?: boolean
  }

  export type verifyed_customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "address" | "age" | "created_at", ExtArgs["result"]["verifyed_customers"]>

  export type $verifyed_customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verifyed_customers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      address: string | null
      age: bigint | null
      created_at: Date
    }, ExtArgs["result"]["verifyed_customers"]>
    composites: {}
  }

  type verifyed_customersGetPayload<S extends boolean | null | undefined | verifyed_customersDefaultArgs> = $Result.GetResult<Prisma.$verifyed_customersPayload, S>

  type verifyed_customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verifyed_customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verifyed_customersCountAggregateInputType | true
    }

  export interface verifyed_customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verifyed_customers'], meta: { name: 'verifyed_customers' } }
    /**
     * Find zero or one Verifyed_customers that matches the filter.
     * @param {verifyed_customersFindUniqueArgs} args - Arguments to find a Verifyed_customers
     * @example
     * // Get one Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verifyed_customersFindUniqueArgs>(args: SelectSubset<T, verifyed_customersFindUniqueArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verifyed_customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verifyed_customersFindUniqueOrThrowArgs} args - Arguments to find a Verifyed_customers
     * @example
     * // Get one Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verifyed_customersFindUniqueOrThrowArgs>(args: SelectSubset<T, verifyed_customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifyed_customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersFindFirstArgs} args - Arguments to find a Verifyed_customers
     * @example
     * // Get one Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verifyed_customersFindFirstArgs>(args?: SelectSubset<T, verifyed_customersFindFirstArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verifyed_customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersFindFirstOrThrowArgs} args - Arguments to find a Verifyed_customers
     * @example
     * // Get one Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verifyed_customersFindFirstOrThrowArgs>(args?: SelectSubset<T, verifyed_customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifyed_customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findMany()
     * 
     * // Get first 10 Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verifyed_customersWithIdOnly = await prisma.verifyed_customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verifyed_customersFindManyArgs>(args?: SelectSubset<T, verifyed_customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verifyed_customers.
     * @param {verifyed_customersCreateArgs} args - Arguments to create a Verifyed_customers.
     * @example
     * // Create one Verifyed_customers
     * const Verifyed_customers = await prisma.verifyed_customers.create({
     *   data: {
     *     // ... data to create a Verifyed_customers
     *   }
     * })
     * 
     */
    create<T extends verifyed_customersCreateArgs>(args: SelectSubset<T, verifyed_customersCreateArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifyed_customers.
     * @param {verifyed_customersCreateManyArgs} args - Arguments to create many Verifyed_customers.
     * @example
     * // Create many Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verifyed_customersCreateManyArgs>(args?: SelectSubset<T, verifyed_customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifyed_customers and returns the data saved in the database.
     * @param {verifyed_customersCreateManyAndReturnArgs} args - Arguments to create many Verifyed_customers.
     * @example
     * // Create many Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifyed_customers and only return the `id`
     * const verifyed_customersWithIdOnly = await prisma.verifyed_customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verifyed_customersCreateManyAndReturnArgs>(args?: SelectSubset<T, verifyed_customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verifyed_customers.
     * @param {verifyed_customersDeleteArgs} args - Arguments to delete one Verifyed_customers.
     * @example
     * // Delete one Verifyed_customers
     * const Verifyed_customers = await prisma.verifyed_customers.delete({
     *   where: {
     *     // ... filter to delete one Verifyed_customers
     *   }
     * })
     * 
     */
    delete<T extends verifyed_customersDeleteArgs>(args: SelectSubset<T, verifyed_customersDeleteArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verifyed_customers.
     * @param {verifyed_customersUpdateArgs} args - Arguments to update one Verifyed_customers.
     * @example
     * // Update one Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verifyed_customersUpdateArgs>(args: SelectSubset<T, verifyed_customersUpdateArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifyed_customers.
     * @param {verifyed_customersDeleteManyArgs} args - Arguments to filter Verifyed_customers to delete.
     * @example
     * // Delete a few Verifyed_customers
     * const { count } = await prisma.verifyed_customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verifyed_customersDeleteManyArgs>(args?: SelectSubset<T, verifyed_customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifyed_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verifyed_customersUpdateManyArgs>(args: SelectSubset<T, verifyed_customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifyed_customers and returns the data updated in the database.
     * @param {verifyed_customersUpdateManyAndReturnArgs} args - Arguments to update many Verifyed_customers.
     * @example
     * // Update many Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifyed_customers and only return the `id`
     * const verifyed_customersWithIdOnly = await prisma.verifyed_customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends verifyed_customersUpdateManyAndReturnArgs>(args: SelectSubset<T, verifyed_customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verifyed_customers.
     * @param {verifyed_customersUpsertArgs} args - Arguments to update or create a Verifyed_customers.
     * @example
     * // Update or create a Verifyed_customers
     * const verifyed_customers = await prisma.verifyed_customers.upsert({
     *   create: {
     *     // ... data to create a Verifyed_customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verifyed_customers we want to update
     *   }
     * })
     */
    upsert<T extends verifyed_customersUpsertArgs>(args: SelectSubset<T, verifyed_customersUpsertArgs<ExtArgs>>): Prisma__verifyed_customersClient<$Result.GetResult<Prisma.$verifyed_customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifyed_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersCountArgs} args - Arguments to filter Verifyed_customers to count.
     * @example
     * // Count the number of Verifyed_customers
     * const count = await prisma.verifyed_customers.count({
     *   where: {
     *     // ... the filter for the Verifyed_customers we want to count
     *   }
     * })
    **/
    count<T extends verifyed_customersCountArgs>(
      args?: Subset<T, verifyed_customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verifyed_customersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verifyed_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verifyed_customersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Verifyed_customersAggregateArgs>(args: Subset<T, Verifyed_customersAggregateArgs>): Prisma.PrismaPromise<GetVerifyed_customersAggregateType<T>>

    /**
     * Group by Verifyed_customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verifyed_customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends verifyed_customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verifyed_customersGroupByArgs['orderBy'] }
        : { orderBy?: verifyed_customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, verifyed_customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerifyed_customersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verifyed_customers model
   */
  readonly fields: verifyed_customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verifyed_customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verifyed_customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verifyed_customers model
   */
  interface verifyed_customersFieldRefs {
    readonly id: FieldRef<"verifyed_customers", 'String'>
    readonly email: FieldRef<"verifyed_customers", 'String'>
    readonly address: FieldRef<"verifyed_customers", 'String'>
    readonly age: FieldRef<"verifyed_customers", 'BigInt'>
    readonly created_at: FieldRef<"verifyed_customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * verifyed_customers findUnique
   */
  export type verifyed_customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter, which verifyed_customers to fetch.
     */
    where: verifyed_customersWhereUniqueInput
  }

  /**
   * verifyed_customers findUniqueOrThrow
   */
  export type verifyed_customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter, which verifyed_customers to fetch.
     */
    where: verifyed_customersWhereUniqueInput
  }

  /**
   * verifyed_customers findFirst
   */
  export type verifyed_customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter, which verifyed_customers to fetch.
     */
    where?: verifyed_customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifyed_customers to fetch.
     */
    orderBy?: verifyed_customersOrderByWithRelationInput | verifyed_customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifyed_customers.
     */
    cursor?: verifyed_customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifyed_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifyed_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifyed_customers.
     */
    distinct?: Verifyed_customersScalarFieldEnum | Verifyed_customersScalarFieldEnum[]
  }

  /**
   * verifyed_customers findFirstOrThrow
   */
  export type verifyed_customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter, which verifyed_customers to fetch.
     */
    where?: verifyed_customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifyed_customers to fetch.
     */
    orderBy?: verifyed_customersOrderByWithRelationInput | verifyed_customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifyed_customers.
     */
    cursor?: verifyed_customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifyed_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifyed_customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifyed_customers.
     */
    distinct?: Verifyed_customersScalarFieldEnum | Verifyed_customersScalarFieldEnum[]
  }

  /**
   * verifyed_customers findMany
   */
  export type verifyed_customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter, which verifyed_customers to fetch.
     */
    where?: verifyed_customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifyed_customers to fetch.
     */
    orderBy?: verifyed_customersOrderByWithRelationInput | verifyed_customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verifyed_customers.
     */
    cursor?: verifyed_customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifyed_customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifyed_customers.
     */
    skip?: number
    distinct?: Verifyed_customersScalarFieldEnum | Verifyed_customersScalarFieldEnum[]
  }

  /**
   * verifyed_customers create
   */
  export type verifyed_customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * The data needed to create a verifyed_customers.
     */
    data?: XOR<verifyed_customersCreateInput, verifyed_customersUncheckedCreateInput>
  }

  /**
   * verifyed_customers createMany
   */
  export type verifyed_customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verifyed_customers.
     */
    data: verifyed_customersCreateManyInput | verifyed_customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verifyed_customers createManyAndReturn
   */
  export type verifyed_customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * The data used to create many verifyed_customers.
     */
    data: verifyed_customersCreateManyInput | verifyed_customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verifyed_customers update
   */
  export type verifyed_customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * The data needed to update a verifyed_customers.
     */
    data: XOR<verifyed_customersUpdateInput, verifyed_customersUncheckedUpdateInput>
    /**
     * Choose, which verifyed_customers to update.
     */
    where: verifyed_customersWhereUniqueInput
  }

  /**
   * verifyed_customers updateMany
   */
  export type verifyed_customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verifyed_customers.
     */
    data: XOR<verifyed_customersUpdateManyMutationInput, verifyed_customersUncheckedUpdateManyInput>
    /**
     * Filter which verifyed_customers to update
     */
    where?: verifyed_customersWhereInput
    /**
     * Limit how many verifyed_customers to update.
     */
    limit?: number
  }

  /**
   * verifyed_customers updateManyAndReturn
   */
  export type verifyed_customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * The data used to update verifyed_customers.
     */
    data: XOR<verifyed_customersUpdateManyMutationInput, verifyed_customersUncheckedUpdateManyInput>
    /**
     * Filter which verifyed_customers to update
     */
    where?: verifyed_customersWhereInput
    /**
     * Limit how many verifyed_customers to update.
     */
    limit?: number
  }

  /**
   * verifyed_customers upsert
   */
  export type verifyed_customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * The filter to search for the verifyed_customers to update in case it exists.
     */
    where: verifyed_customersWhereUniqueInput
    /**
     * In case the verifyed_customers found by the `where` argument doesn't exist, create a new verifyed_customers with this data.
     */
    create: XOR<verifyed_customersCreateInput, verifyed_customersUncheckedCreateInput>
    /**
     * In case the verifyed_customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verifyed_customersUpdateInput, verifyed_customersUncheckedUpdateInput>
  }

  /**
   * verifyed_customers delete
   */
  export type verifyed_customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
    /**
     * Filter which verifyed_customers to delete.
     */
    where: verifyed_customersWhereUniqueInput
  }

  /**
   * verifyed_customers deleteMany
   */
  export type verifyed_customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verifyed_customers to delete
     */
    where?: verifyed_customersWhereInput
    /**
     * Limit how many verifyed_customers to delete.
     */
    limit?: number
  }

  /**
   * verifyed_customers without action
   */
  export type verifyed_customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verifyed_customers
     */
    select?: verifyed_customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verifyed_customers
     */
    omit?: verifyed_customersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MerchantsScalarFieldEnum: {
    shop: 'shop',
    public_proxy: 'public_proxy',
    created_at: 'created_at'
  };

  export type MerchantsScalarFieldEnum = (typeof MerchantsScalarFieldEnum)[keyof typeof MerchantsScalarFieldEnum]


  export const Ongoing_verificationsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    address: 'address',
    created_at: 'created_at'
  };

  export type Ongoing_verificationsScalarFieldEnum = (typeof Ongoing_verificationsScalarFieldEnum)[keyof typeof Ongoing_verificationsScalarFieldEnum]


  export const Verifyed_customersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    address: 'address',
    age: 'age',
    created_at: 'created_at'
  };

  export type Verifyed_customersScalarFieldEnum = (typeof Verifyed_customersScalarFieldEnum)[keyof typeof Verifyed_customersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type merchantsWhereInput = {
    AND?: merchantsWhereInput | merchantsWhereInput[]
    OR?: merchantsWhereInput[]
    NOT?: merchantsWhereInput | merchantsWhereInput[]
    shop?: StringFilter<"merchants"> | string
    public_proxy?: StringNullableFilter<"merchants"> | string | null
    created_at?: DateTimeFilter<"merchants"> | Date | string
  }

  export type merchantsOrderByWithRelationInput = {
    shop?: SortOrder
    public_proxy?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type merchantsWhereUniqueInput = Prisma.AtLeast<{
    shop?: string
    AND?: merchantsWhereInput | merchantsWhereInput[]
    OR?: merchantsWhereInput[]
    NOT?: merchantsWhereInput | merchantsWhereInput[]
    public_proxy?: StringNullableFilter<"merchants"> | string | null
    created_at?: DateTimeFilter<"merchants"> | Date | string
  }, "shop">

  export type merchantsOrderByWithAggregationInput = {
    shop?: SortOrder
    public_proxy?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: merchantsCountOrderByAggregateInput
    _max?: merchantsMaxOrderByAggregateInput
    _min?: merchantsMinOrderByAggregateInput
  }

  export type merchantsScalarWhereWithAggregatesInput = {
    AND?: merchantsScalarWhereWithAggregatesInput | merchantsScalarWhereWithAggregatesInput[]
    OR?: merchantsScalarWhereWithAggregatesInput[]
    NOT?: merchantsScalarWhereWithAggregatesInput | merchantsScalarWhereWithAggregatesInput[]
    shop?: StringWithAggregatesFilter<"merchants"> | string
    public_proxy?: StringNullableWithAggregatesFilter<"merchants"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"merchants"> | Date | string
  }

  export type ongoing_verificationsWhereInput = {
    AND?: ongoing_verificationsWhereInput | ongoing_verificationsWhereInput[]
    OR?: ongoing_verificationsWhereInput[]
    NOT?: ongoing_verificationsWhereInput | ongoing_verificationsWhereInput[]
    id?: UuidFilter<"ongoing_verifications"> | string
    email?: StringNullableFilter<"ongoing_verifications"> | string | null
    address?: StringNullableFilter<"ongoing_verifications"> | string | null
    created_at?: DateTimeFilter<"ongoing_verifications"> | Date | string
  }

  export type ongoing_verificationsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ongoing_verificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ongoing_verificationsWhereInput | ongoing_verificationsWhereInput[]
    OR?: ongoing_verificationsWhereInput[]
    NOT?: ongoing_verificationsWhereInput | ongoing_verificationsWhereInput[]
    email?: StringNullableFilter<"ongoing_verifications"> | string | null
    address?: StringNullableFilter<"ongoing_verifications"> | string | null
    created_at?: DateTimeFilter<"ongoing_verifications"> | Date | string
  }, "id">

  export type ongoing_verificationsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ongoing_verificationsCountOrderByAggregateInput
    _max?: ongoing_verificationsMaxOrderByAggregateInput
    _min?: ongoing_verificationsMinOrderByAggregateInput
  }

  export type ongoing_verificationsScalarWhereWithAggregatesInput = {
    AND?: ongoing_verificationsScalarWhereWithAggregatesInput | ongoing_verificationsScalarWhereWithAggregatesInput[]
    OR?: ongoing_verificationsScalarWhereWithAggregatesInput[]
    NOT?: ongoing_verificationsScalarWhereWithAggregatesInput | ongoing_verificationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ongoing_verifications"> | string
    email?: StringNullableWithAggregatesFilter<"ongoing_verifications"> | string | null
    address?: StringNullableWithAggregatesFilter<"ongoing_verifications"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ongoing_verifications"> | Date | string
  }

  export type verifyed_customersWhereInput = {
    AND?: verifyed_customersWhereInput | verifyed_customersWhereInput[]
    OR?: verifyed_customersWhereInput[]
    NOT?: verifyed_customersWhereInput | verifyed_customersWhereInput[]
    id?: UuidFilter<"verifyed_customers"> | string
    email?: StringNullableFilter<"verifyed_customers"> | string | null
    address?: StringNullableFilter<"verifyed_customers"> | string | null
    age?: BigIntNullableFilter<"verifyed_customers"> | bigint | number | null
    created_at?: DateTimeFilter<"verifyed_customers"> | Date | string
  }

  export type verifyed_customersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type verifyed_customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verifyed_customersWhereInput | verifyed_customersWhereInput[]
    OR?: verifyed_customersWhereInput[]
    NOT?: verifyed_customersWhereInput | verifyed_customersWhereInput[]
    email?: StringNullableFilter<"verifyed_customers"> | string | null
    address?: StringNullableFilter<"verifyed_customers"> | string | null
    age?: BigIntNullableFilter<"verifyed_customers"> | bigint | number | null
    created_at?: DateTimeFilter<"verifyed_customers"> | Date | string
  }, "id">

  export type verifyed_customersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: verifyed_customersCountOrderByAggregateInput
    _avg?: verifyed_customersAvgOrderByAggregateInput
    _max?: verifyed_customersMaxOrderByAggregateInput
    _min?: verifyed_customersMinOrderByAggregateInput
    _sum?: verifyed_customersSumOrderByAggregateInput
  }

  export type verifyed_customersScalarWhereWithAggregatesInput = {
    AND?: verifyed_customersScalarWhereWithAggregatesInput | verifyed_customersScalarWhereWithAggregatesInput[]
    OR?: verifyed_customersScalarWhereWithAggregatesInput[]
    NOT?: verifyed_customersScalarWhereWithAggregatesInput | verifyed_customersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"verifyed_customers"> | string
    email?: StringNullableWithAggregatesFilter<"verifyed_customers"> | string | null
    address?: StringNullableWithAggregatesFilter<"verifyed_customers"> | string | null
    age?: BigIntNullableWithAggregatesFilter<"verifyed_customers"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"verifyed_customers"> | Date | string
  }

  export type merchantsCreateInput = {
    shop: string
    public_proxy?: string | null
    created_at?: Date | string
  }

  export type merchantsUncheckedCreateInput = {
    shop: string
    public_proxy?: string | null
    created_at?: Date | string
  }

  export type merchantsUpdateInput = {
    shop?: StringFieldUpdateOperationsInput | string
    public_proxy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type merchantsUncheckedUpdateInput = {
    shop?: StringFieldUpdateOperationsInput | string
    public_proxy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type merchantsCreateManyInput = {
    shop: string
    public_proxy?: string | null
    created_at?: Date | string
  }

  export type merchantsUpdateManyMutationInput = {
    shop?: StringFieldUpdateOperationsInput | string
    public_proxy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type merchantsUncheckedUpdateManyInput = {
    shop?: StringFieldUpdateOperationsInput | string
    public_proxy?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ongoing_verificationsCreateInput = {
    id?: string
    email?: string | null
    address?: string | null
    created_at?: Date | string
  }

  export type ongoing_verificationsUncheckedCreateInput = {
    id?: string
    email?: string | null
    address?: string | null
    created_at?: Date | string
  }

  export type ongoing_verificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ongoing_verificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ongoing_verificationsCreateManyInput = {
    id?: string
    email?: string | null
    address?: string | null
    created_at?: Date | string
  }

  export type ongoing_verificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ongoing_verificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verifyed_customersCreateInput = {
    id?: string
    email?: string | null
    address?: string | null
    age?: bigint | number | null
    created_at?: Date | string
  }

  export type verifyed_customersUncheckedCreateInput = {
    id?: string
    email?: string | null
    address?: string | null
    age?: bigint | number | null
    created_at?: Date | string
  }

  export type verifyed_customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verifyed_customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verifyed_customersCreateManyInput = {
    id?: string
    email?: string | null
    address?: string | null
    age?: bigint | number | null
    created_at?: Date | string
  }

  export type verifyed_customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verifyed_customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type merchantsCountOrderByAggregateInput = {
    shop?: SortOrder
    public_proxy?: SortOrder
    created_at?: SortOrder
  }

  export type merchantsMaxOrderByAggregateInput = {
    shop?: SortOrder
    public_proxy?: SortOrder
    created_at?: SortOrder
  }

  export type merchantsMinOrderByAggregateInput = {
    shop?: SortOrder
    public_proxy?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type ongoing_verificationsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type ongoing_verificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type ongoing_verificationsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type verifyed_customersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    age?: SortOrder
    created_at?: SortOrder
  }

  export type verifyed_customersAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type verifyed_customersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    age?: SortOrder
    created_at?: SortOrder
  }

  export type verifyed_customersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    address?: SortOrder
    age?: SortOrder
    created_at?: SortOrder
  }

  export type verifyed_customersSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}