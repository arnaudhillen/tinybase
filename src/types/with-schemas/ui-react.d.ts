/// ui-react

import {
  BackwardCheckpointsProps,
  CellProps,
  CheckpointProps,
  CheckpointsOrCheckpointsId,
  ComponentReturnType,
  CurrentCheckpointProps,
  ExtraProps,
  ForwardCheckpointsProps,
  IndexProps,
  IndexesOrIndexesId,
  LinkedRowsProps,
  LocalRowsProps,
  MetricProps,
  MetricsOrMetricsId,
  QueriesOrQueriesId,
  RelationshipsOrRelationshipsId,
  RemoteRowProps,
  ResultCellProps,
  ResultRowProps,
  ResultSortedTableProps,
  ResultTableProps,
  RowProps,
  SliceProps,
  SortedTableProps,
  StoreOrStoreId,
  TableProps,
  TablesProps,
  UndoOrRedoInformation,
  ValueProps,
  ValuesProps,
} from './internal/ui-react';
import {Callback, Id, IdOrNull, Ids, ParameterizedCallback} from './common.d';
import {
  Cell,
  CellIdsListener,
  CellListener,
  OptionalSchemas,
  Row,
  RowIdsListener,
  RowListener,
  SortedRowIdsListener,
  Store,
  Table,
  TableIdsListener,
  TableListener,
  TablesListener,
  ValueIdsListener,
  ValueListener,
  ValuesListener,
} from './store.d';
import {
  CellFromSchema,
  CellIdFromSchema,
  RowFromSchema,
  TableFromSchema,
  TableIdFromSchema,
  TablesFromSchema,
  ValueFromSchema,
  ValueIdFromSchema,
  ValuesFromSchema,
} from './internal/store';
import {
  CheckpointIds,
  CheckpointIdsListener,
  CheckpointListener,
  Checkpoints,
} from './checkpoints.d';
import {Indexes, SliceIdsListener, SliceRowIdsListener} from './indexes.d';
import {
  LinkedRowIdsListener,
  LocalRowIdsListener,
  Relationships,
  RemoteRowIdListener,
} from './relationships.d';
import {MetricListener, Metrics} from './metrics.d';
import {ProviderProps, ReactElement} from 'react';
import {
  Queries,
  ResultCellIdsListener,
  ResultCellListener,
  ResultRowIdsListener,
  ResultRowListener,
  ResultTableListener,
} from './queries.d';
import {Persister} from './persisters.d';

export type WithSchemas<Schemas extends OptionalSchemas> = {
  /// StoreOrStoreId
  StoreOrStoreId: StoreOrStoreId<Schemas>;

  /// MetricsOrMetricsId
  MetricsOrMetricsId: MetricsOrMetricsId<Schemas>;

  /// IndexesOrIndexesId
  IndexesOrIndexesId: IndexesOrIndexesId<Schemas>;

  /// RelationshipsOrRelationshipsId
  RelationshipsOrRelationshipsId: RelationshipsOrRelationshipsId<Schemas>;

  /// QueriesOrQueriesId
  QueriesOrQueriesId: QueriesOrQueriesId<Schemas>;

  /// CheckpointsOrCheckpointsId
  CheckpointsOrCheckpointsId: CheckpointsOrCheckpointsId<Schemas>;

  /// UndoOrRedoInformation
  UndoOrRedoInformation: UndoOrRedoInformation;

  /// useCreateStore
  useCreateStore: (
    create: () => Store<Schemas>,
    createDeps?: React.DependencyList,
  ) => Store<Schemas>;

  /// useStore
  useStore: (id?: Id) => Store<Schemas> | undefined;

  /// useTables
  useTables: <Tables = TablesFromSchema<Schemas[0]>>(
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Tables;

  /// useTableIds
  useTableIds: <Ids = TableIdFromSchema<Schemas[0]>[]>(
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Ids;

  /// useTable
  useTable: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    Table = TableFromSchema<Schemas[0]>,
  >(
    tableId: TableId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Table;

  /// useRowIds
  useRowIds: <TableId extends TableIdFromSchema<Schemas[0]>>(
    tableId: TableId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Ids;

  /// useSortedRowIds
  useSortedRowIds: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    CellId extends CellIdFromSchema<Schemas[0], TableId>,
  >(
    tableId: TableId,
    cellId?: CellId,
    descending?: boolean,
    offset?: number,
    limit?: number,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Ids;

  /// useRow
  useRow: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    Row = RowFromSchema<Schemas[0], TableId>,
  >(
    tableId: TableId,
    rowId: Id,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Row;

  /// useCellIds
  useCellIds: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    Ids extends CellIdFromSchema<Schemas[0], TableId>[],
  >(
    tableId: TableId,
    rowId: Id,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Ids;

  /// useCell
  useCell: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    CellId extends CellIdFromSchema<Schemas[0], TableId>,
    CellOrUndefined = CellFromSchema<Schemas[0], TableId, CellId> | undefined,
  >(
    tableId: TableId,
    rowId: Id,
    cellId: CellId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => CellOrUndefined;

  /// useValues
  useValues: <Values = ValuesFromSchema<Schemas[1]>>(
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Values;

  /// useValueIds
  useValueIds: <Ids = ValueIdFromSchema<Schemas[1]>[]>(
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => Ids;

  /// useValue
  useValue: <
    ValueId extends ValueIdFromSchema<Schemas[1]>,
    ValueOrUndefined = ValueFromSchema<Schemas[1], ValueId> | undefined,
  >(
    valueId: ValueId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => ValueOrUndefined;

  /// useSetTablesCallback
  useSetTablesCallback: <
    Parameter,
    Tables extends TablesFromSchema<Schemas[0], true> = TablesFromSchema<
      Schemas[0],
      true
    >,
  >(
    getTables: (parameter: Parameter, store: Store<Schemas>) => Tables,
    getTablesDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, tables: Tables) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetTableCallback
  useSetTableCallback: <
    Parameter,
    TableId extends TableIdFromSchema<Schemas[0]>,
    Table extends TableFromSchema<Schemas[0], TableId, true> = TableFromSchema<
      Schemas[0],
      TableId,
      true
    >,
  >(
    tableId: TableId,
    getTable: (parameter: Parameter, store: Store<Schemas>) => Table,
    getTableDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, table: Table) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetRowCallback
  useSetRowCallback: <
    Parameter,
    TableId extends TableIdFromSchema<Schemas[0]>,
    Row extends RowFromSchema<Schemas[0], TableId, true> = RowFromSchema<
      Schemas[0],
      TableId,
      true
    >,
  >(
    tableId: TableId,
    rowId: Id,
    getRow: (parameter: Parameter, store: Store<Schemas>) => Row,
    getRowDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, row: Row) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useAddRowCallback
  useAddRowCallback: <
    Parameter,
    TableId extends TableIdFromSchema<Schemas[0]>,
    Row extends RowFromSchema<Schemas[0], TableId, true> = RowFromSchema<
      Schemas[0],
      TableId,
      true
    >,
  >(
    tableId: TableId,
    getRow: (parameter: Parameter, store: Store<Schemas>) => Row,
    getRowDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (rowId: Id | undefined, store: Store<Schemas>, row: Row) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetPartialRowCallback
  useSetPartialRowCallback: <
    Parameter,
    TableId extends TableIdFromSchema<Schemas[0]>,
    Row extends RowFromSchema<Schemas[0], TableId, true> = RowFromSchema<
      Schemas[0],
      TableId,
      true
    >,
  >(
    tableId: TableId,
    rowId: Id,
    getPartialRow: (parameter: Parameter, store: Store<Schemas>) => Row,
    getPartialRowDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, partialRow: Row) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetCellCallback
  useSetCellCallback: <
    Parameter,
    TableId extends TableIdFromSchema<Schemas[0]>,
    CellId extends CellIdFromSchema<Schemas[0], TableId>,
    Cell extends CellFromSchema<Schemas[0], TableId, CellId> = CellFromSchema<
      Schemas[0],
      TableId,
      CellId
    >,
    MapCell extends (cell: Cell | undefined) => Cell = (
      cell: Cell | undefined,
    ) => Cell,
  >(
    tableId: TableId,
    rowId: Id,
    cellId: CellId,
    getCell: (parameter: Parameter, store: Store<Schemas>) => Cell | MapCell,
    getCellDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, cell: Cell | MapCell) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetValuesCallback
  useSetValuesCallback: <
    Parameter,
    Values extends ValuesFromSchema<Schemas[1], true> = ValuesFromSchema<
      Schemas[1],
      true
    >,
  >(
    getValues: (parameter: Parameter, store: Store<Schemas>) => Values,
    getValuesDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, values: Values) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetPartialValuesCallback
  useSetPartialValuesCallback: <
    Parameter,
    Values extends ValuesFromSchema<Schemas[1], true> = ValuesFromSchema<
      Schemas[1],
      true
    >,
  >(
    getPartialValues: (parameter: Parameter, store: Store<Schemas>) => Values,
    getPartialValuesDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, partialValues: Values) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useSetValueCallback
  useSetValueCallback: <
    Parameter,
    ValueId extends ValueIdFromSchema<Schemas[1]>,
    Value extends ValueFromSchema<Schemas[1], ValueId> = ValueFromSchema<
      Schemas[1],
      ValueId
    >,
    MapValue extends (value: Value | undefined) => Value = (
      value: Value | undefined,
    ) => Value,
  >(
    valueId: ValueId,
    getValue: (parameter: Parameter, store: Store<Schemas>) => Value | MapValue,
    getValueDeps?: React.DependencyList,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>, value: Value) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useDelTablesCallback
  useDelTablesCallback: (
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useDelTableCallback
  useDelTableCallback: <TableId extends TableIdFromSchema<Schemas[0]>>(
    tableId: TableId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useDelRowCallback
  useDelRowCallback: <TableId extends TableIdFromSchema<Schemas[0]>>(
    tableId: TableId,
    rowId: Id,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useDelCellCallback
  useDelCellCallback: <
    TableId extends TableIdFromSchema<Schemas[0]>,
    CellId extends CellIdFromSchema<Schemas[0], TableId>,
  >(
    tableId: TableId,
    rowId: Id,
    cellId: CellId,
    forceDel?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useDelValuesCallback
  useDelValuesCallback: (
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useDelValueCallback
  useDelValueCallback: <ValueId extends ValueIdFromSchema<Schemas[1]>>(
    valueId: ValueId,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
    then?: (store: Store<Schemas>) => void,
    thenDeps?: React.DependencyList,
  ) => Callback;

  /// useTablesListener
  useTablesListener: (
    listener: TablesListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useTableIdsListener
  useTableIdsListener: (
    listener: TableIdsListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useTableListener
  useTableListener: (
    tableId: IdOrNull,
    listener: TableListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useRowIdsListener
  useRowIdsListener: (
    tableId: IdOrNull,
    listener: RowIdsListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useSortedRowIdsListener
  useSortedRowIdsListener: (
    tableId: Id,
    cellId: Id | undefined,
    descending: boolean,
    offset: number,
    limit: number | undefined,
    listener: SortedRowIdsListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useRowListener
  useRowListener: (
    tableId: IdOrNull,
    rowId: IdOrNull,
    listener: RowListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useCellIdsListener
  useCellIdsListener: (
    tableId: IdOrNull,
    rowId: IdOrNull,
    listener: CellIdsListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useCellListener
  useCellListener: (
    tableId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: CellListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useValuesListener
  useValuesListener: (
    listener: ValuesListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useValueIdsListener
  useValueIdsListener: (
    listener: ValueIdsListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useValueListener
  useValueListener: (
    valueId: IdOrNull,
    listener: ValueListener,
    listenerDeps?: React.DependencyList,
    mutator?: boolean,
    storeOrStoreId?: StoreOrStoreId<Schemas>,
  ) => void;

  /// useCreateMetrics
  useCreateMetrics: (
    store: Store,
    create: (store: Store) => Metrics,
    createDeps?: React.DependencyList,
  ) => Metrics;

  /// useMetrics
  useMetrics: (id?: Id) => Metrics | undefined;

  /// useMetric
  useMetric: (
    metricId: Id,
    metricsOrMetricsId?: MetricsOrMetricsId<Schemas>,
  ) => number | undefined;

  /// useMetricListener
  useMetricListener: (
    metricId: IdOrNull,
    listener: MetricListener,
    listenerDeps?: React.DependencyList,
    metricsOrMetricsId?: MetricsOrMetricsId<Schemas>,
  ) => void;

  /// useCreateIndexes
  useCreateIndexes: (
    store: Store,
    create: (store: Store) => Indexes,
    createDeps?: React.DependencyList,
  ) => Indexes;

  /// useIndexes
  useIndexes: (id?: Id) => Indexes | undefined;

  /// useSliceIds
  useSliceIds: (
    indexId: Id,
    indexesOrIndexesId?: IndexesOrIndexesId<Schemas>,
  ) => Ids;

  /// useSliceRowIds
  useSliceRowIds: (
    indexId: Id,
    sliceId: Id,
    indexesOrIndexesId?: IndexesOrIndexesId<Schemas>,
  ) => Ids;

  /// useSliceIdsListener
  useSliceIdsListener: (
    indexId: IdOrNull,
    listener: SliceIdsListener,
    listenerDeps?: React.DependencyList,
    indexesOrIndexesId?: IndexesOrIndexesId<Schemas>,
  ) => void;

  /// useSliceRowIdsListener
  useSliceRowIdsListener: (
    indexId: IdOrNull,
    sliceId: IdOrNull,
    listener: SliceRowIdsListener,
    listenerDeps?: React.DependencyList,
    indexesOrIndexesId?: IndexesOrIndexesId<Schemas>,
  ) => void;

  /// useCreateRelationships
  useCreateRelationships: (
    store: Store,
    create: (store: Store) => Relationships,
    createDeps?: React.DependencyList,
  ) => Relationships;

  /// useRelationships
  useRelationships: (id?: Id) => Relationships | undefined;

  /// useRemoteRowId
  useRemoteRowId: (
    relationshipId: Id,
    localRowId: Id,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => Id | undefined;

  /// useLocalRowIds
  useLocalRowIds: (
    relationshipId: Id,
    remoteRowId: Id,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => Ids;

  /// useLinkedRowIds
  useLinkedRowIds: (
    relationshipId: Id,
    firstRowId: Id,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => Ids;

  /// useRemoteRowIdListener
  useRemoteRowIdListener: (
    relationshipId: IdOrNull,
    localRowId: IdOrNull,
    listener: RemoteRowIdListener,
    listenerDeps?: React.DependencyList,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => void;

  /// useLocalRowIdsListener
  useLocalRowIdsListener: (
    relationshipId: IdOrNull,
    remoteRowId: IdOrNull,
    listener: LocalRowIdsListener,
    listenerDeps?: React.DependencyList,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => void;

  /// useLinkedRowIdsListener
  useLinkedRowIdsListener: (
    relationshipId: Id,
    firstRowId: Id,
    listener: LinkedRowIdsListener,
    listenerDeps?: React.DependencyList,
    relationshipsOrRelationshipsId?: RelationshipsOrRelationshipsId<Schemas>,
  ) => void;

  /// useCreateQueries
  useCreateQueries: (
    store: Store,
    create: (store: Store) => Queries,
    createDeps?: React.DependencyList,
  ) => Queries;

  /// useQueries
  useQueries: (id?: Id) => Queries | undefined;

  /// useResultTable
  useResultTable: (
    queryId: Id,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Table;

  /// useResultRowIds
  useResultRowIds: (
    queryId: Id,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Ids;

  /// useResultSortedRowIds
  useResultSortedRowIds: (
    queryId: Id,
    cellId?: Id,
    descending?: boolean,
    offset?: number,
    limit?: number,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Ids;

  /// useResultRow
  useResultRow: (
    queryId: Id,
    rowId: Id,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Row;

  /// useResultCellIds
  useResultCellIds: (
    queryId: Id,
    rowId: Id,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Ids;

  /// useResultCell
  useResultCell: (
    queryId: Id,
    rowId: Id,
    cellId: Id,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => Cell | undefined;

  /// useResultTableListener
  useResultTableListener: (
    queryId: IdOrNull,
    listener: ResultTableListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useResultRowIdsListener
  useResultRowIdsListener: (
    queryId: IdOrNull,
    listener: ResultRowIdsListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useResultSortedRowIdsListener
  useResultSortedRowIdsListener: (
    queryId: Id,
    cellId: Id | undefined,
    descending: boolean,
    offset: number,
    limit: number | undefined,
    listener: ResultRowIdsListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useResultRowListener
  useResultRowListener: (
    queryId: IdOrNull,
    rowId: IdOrNull,
    listener: ResultRowListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useResultCellIdsListener
  useResultCellIdsListener: (
    queryId: IdOrNull,
    rowId: IdOrNull,
    listener: ResultCellIdsListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useResultCellListener
  useResultCellListener: (
    queryId: IdOrNull,
    rowId: IdOrNull,
    cellId: IdOrNull,
    listener: ResultCellListener,
    listenerDeps?: React.DependencyList,
    queriesOrQueriesId?: QueriesOrQueriesId<Schemas>,
  ) => void;

  /// useCreateCheckpoints
  useCreateCheckpoints: (
    store: Store,
    create: (store: Store) => Checkpoints,
    createDeps?: React.DependencyList,
  ) => Checkpoints;

  /// useCheckpoints
  useCheckpoints: (id?: Id) => Checkpoints | undefined;

  /// useCheckpointIds
  useCheckpointIds: (
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => CheckpointIds;

  /// useCheckpoint
  useCheckpoint: (
    checkpointId: Id,
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => string | undefined;

  /// useSetCheckpointCallback
  useSetCheckpointCallback: <Parameter>(
    getCheckpoint?: (parameter: Parameter) => string,
    getCheckpointDeps?: React.DependencyList,
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
    then?: (checkpointId: Id, checkpoints: Checkpoints, label?: string) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useGoBackwardCallback
  useGoBackwardCallback: (
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => Callback;

  /// useGoForwardCallback
  useGoForwardCallback: (
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => Callback;

  /// useGoToCallback
  useGoToCallback: <Parameter>(
    getCheckpointId: (parameter: Parameter) => Id,
    getCheckpointIdDeps?: React.DependencyList,
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
    then?: (checkpoints: Checkpoints, checkpointId: Id) => void,
    thenDeps?: React.DependencyList,
  ) => ParameterizedCallback<Parameter>;

  /// useUndoInformation
  useUndoInformation: (
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => UndoOrRedoInformation;

  /// useRedoInformation
  useRedoInformation: (
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => UndoOrRedoInformation;

  /// useCheckpointIdsListener
  useCheckpointIdsListener: (
    listener: CheckpointIdsListener,
    listenerDeps?: React.DependencyList,
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => void;

  /// useCheckpointListener
  useCheckpointListener: (
    checkpointId: IdOrNull,
    listener: CheckpointListener,
    listenerDeps?: React.DependencyList,
    checkpointsOrCheckpointsId?: CheckpointsOrCheckpointsId<Schemas>,
  ) => void;

  /// useCreatePersister
  useCreatePersister: (
    store: Store,
    create: (store: Store) => Persister,
    createDeps?: React.DependencyList,
    then?: (persister: Persister) => Promise<void>,
    thenDeps?: React.DependencyList,
  ) => Persister;

  /// ExtraProps
  ExtraProps: ExtraProps;

  /// TablesProps
  TablesProps: TablesProps<Schemas>;

  /// TableProps
  TableProps: TableProps<Schemas>;

  /// SortedTableProps
  SortedTableProps: SortedTableProps<Schemas>;

  /// RowProps
  RowProps: RowProps<Schemas>;

  /// CellProps
  CellProps: CellProps<Schemas>;

  /// ValuesProps
  ValuesProps: ValuesProps<Schemas>;

  /// ValueProps
  ValueProps: ValueProps<Schemas>;

  /// MetricProps
  MetricProps: MetricProps<Schemas>;

  /// IndexProps
  IndexProps: IndexProps<Schemas>;

  /// SliceProps
  SliceProps: SliceProps<Schemas>;

  /// RemoteRowProps
  RemoteRowProps: RemoteRowProps<Schemas>;

  /// LocalRowsProps
  LocalRowsProps: LocalRowsProps<Schemas>;

  /// LinkedRowsProps
  LinkedRowsProps: LinkedRowsProps<Schemas>;

  /// ResultTableProps
  ResultTableProps: ResultTableProps<Schemas>;

  /// ResultSortedTableProps
  ResultSortedTableProps: ResultSortedTableProps<Schemas>;

  /// ResultRowProps
  ResultRowProps: ResultRowProps<Schemas>;

  /// ResultCellProps
  ResultCellProps: ResultCellProps<Schemas>;

  /// CheckpointProps
  CheckpointProps: CheckpointProps<Schemas>;

  /// BackwardCheckpointsProps
  BackwardCheckpointsProps: BackwardCheckpointsProps<Schemas>;

  /// CurrentCheckpointProps
  CurrentCheckpointProps: CurrentCheckpointProps<Schemas>;

  /// ForwardCheckpointsProps
  ForwardCheckpointsProps: ForwardCheckpointsProps<Schemas>;

  /// ProviderProps
  ProviderProps: ProviderProps<Schemas>;

  /// ComponentReturnType
  ComponentReturnType: ReactElement<any, any> | null;

  /// Provider
  Provider: (
    props: ProviderProps<Schemas> & {children: React.ReactNode},
  ) => ComponentReturnType;

  /// CellView
  CellView: (props: CellProps<Schemas>) => ComponentReturnType;

  /// RowView
  RowView: (props: RowProps<Schemas>) => ComponentReturnType;

  /// SortedTableView
  SortedTableView: (props: SortedTableProps<Schemas>) => ComponentReturnType;

  /// TableView
  TableView: (props: TableProps<Schemas>) => ComponentReturnType;

  /// TablesView
  TablesView: (props: TablesProps<Schemas>) => ComponentReturnType;

  /// ValueView
  ValueView: (props: ValueProps<Schemas>) => ComponentReturnType;

  /// ValuesView
  ValuesView: (props: ValuesProps<Schemas>) => ComponentReturnType;

  /// MetricView
  MetricView: (props: MetricProps<Schemas>) => ComponentReturnType;

  /// SliceView
  SliceView: (props: SliceProps<Schemas>) => ComponentReturnType;

  /// IndexView
  IndexView: (props: IndexProps<Schemas>) => ComponentReturnType;

  /// RemoteRowView
  RemoteRowView: (props: RemoteRowProps<Schemas>) => ComponentReturnType;

  /// LocalRowsView
  LocalRowsView: (props: LocalRowsProps<Schemas>) => ComponentReturnType;

  /// LinkedRowsView
  LinkedRowsView: (props: LinkedRowsProps<Schemas>) => ComponentReturnType;

  /// ResultCellView
  ResultCellView: (props: ResultCellProps<Schemas>) => ComponentReturnType;

  /// ResultRowView
  ResultRowView: (props: ResultRowProps<Schemas>) => ComponentReturnType;

  /// ResultSortedTableView
  ResultSortedTableView: (
    props: ResultSortedTableProps<Schemas>,
  ) => ComponentReturnType;

  /// ResultTableView
  ResultTableView: (props: ResultTableProps<Schemas>) => ComponentReturnType;

  /// CheckpointView
  CheckpointView: (props: CheckpointProps<Schemas>) => ComponentReturnType;

  /// BackwardCheckpointsView
  BackwardCheckpointsView: (
    props: BackwardCheckpointsProps<Schemas>,
  ) => ComponentReturnType;

  /// CurrentCheckpointView
  CurrentCheckpointView: (
    props: CurrentCheckpointProps<Schemas>,
  ) => ComponentReturnType;

  /// ForwardCheckpointsView
  ForwardCheckpointsView: (
    props: ForwardCheckpointsProps<Schemas>,
  ) => ComponentReturnType;
};