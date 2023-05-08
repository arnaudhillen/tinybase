import {
  ChangedCellIds,
  ChangedCells,
  ChangedRowIds,
  ChangedTableIds,
  ChangedValueIds,
  ChangedValues,
  Store,
  Tables,
  Values,
} from './types/store.d';
import {Persister, PersisterListener} from './types/persisters.d';
import {Doc as YDoc, YEvent, Map as YMap} from 'yjs';
import {objHas, objMap} from './common/obj';
import {Id} from './types/common.d';
import {IdObj} from './common/obj';
import {createCustomPersister} from './persisters';

type Observer = (events: YEvent<any>[]) => void;

const tablesKey = 't';
const valuesKey = 'v';

const yMapMatch = (
  parentYMap: YMap<any>,
  id: Id,
  obj: IdObj<any>,
  set: (yMap: YMap<any>, id: Id, value: any) => 1 | void,
): 1 | void => {
  const yMap = parentYMap.get(id) ?? parentYMap.set(id, new YMap());
  let changed: 1 | undefined;
  objMap(obj, (value, id) => {
    if (set(yMap, id, value)) {
      changed = 1;
    }
  });
  yMap.forEach((_: any, id: Id) => {
    if (!objHas(obj, id)) {
      yMap.delete(id);
      changed = 1;
    }
  });
  if (!yMap.size) {
    parentYMap.delete(id);
  }
  return changed;
};

export const createYjsPersister = (
  store: Store,
  yDoc: YDoc,
  yMapName = 'tinybase',
): Persister => {
  const yMap: YMap<any> = yDoc.getMap(yMapName);

  const getPersisted = async (): Promise<[Tables, Values] | undefined> => {
    try {
      const content = yMap.toJSON();
      if (content[tablesKey]) {
        return [content[tablesKey], content[valuesKey]];
      }
    } catch {}
  };

  const setPersisted = async (
    getContent: () => [Tables, Values],
    _changedCells?: ChangedCells,
    _changedValues?: ChangedValues,
    _changedTableIds?: ChangedTableIds,
    _changedRowIds?: ChangedRowIds,
    _changedCellIds?: ChangedCellIds,
    _changedValueIds?: ChangedValueIds,
  ): Promise<void> => {
    const [tables, values] = getContent();
    yDoc.transact(() => {
      yMapMatch(yMap, tablesKey, tables, (tablesMap, tableId, table) =>
        yMapMatch(tablesMap, tableId, table, (tableMap, rowId, row) =>
          yMapMatch(tableMap, rowId, row, (rowMap, cellId, cell) => {
            if (rowMap.get(cellId) !== cell) {
              rowMap.set(cellId, cell);
              return 1;
            }
          }),
        ),
      );
      yMapMatch(yMap, valuesKey, values, (valuesMap, valueId, value) => {
        if (valuesMap.get(valueId) !== value) {
          valuesMap.set(valueId, value);
        }
      });
    });
  };

  const addPersisterListener = (listener: PersisterListener): Observer => {
    const observer: Observer = () => {
      listener();
    };
    yMap.observeDeep(observer);
    return observer;
  };

  const delPersisterListener = (observer: Observer): void => {
    yMap.unobserveDeep(observer);
  };

  return createCustomPersister(
    store,
    getPersisted,
    setPersisted,
    addPersisterListener,
    delPersisterListener,
  );
};
