/**
 * The ui-react-dom module of the TinyBase project provides components to make
 * it easy to create web-based reactive apps with Store objects.
 *
 * The components in this module use the react-dom module and so are not
 * appropriate for environments like React Native (although those in the
 * lower-level ui-react module are).
 * @see Building UIs guides
 * @packageDocumentation
 * @module ui-react-dom
 * @since v4.1.0
 */
/// ui-react-dom
{
  /**
   * The Id of the Table in the Store to be rendered.
   */
  /// TableInHtmlTableProps.tableId
  /**
   * The Store to be accessed: omit for the default context Store, provide an Id
   * for a named context Store, or provide an explicit reference.
   */
  /// TableInHtmlTableProps.store
  /**
   * A custom component for rendering each Cell in the Table (to override the
   * default CellView component).
   */
  /// TableInHtmlTableProps.cellComponent
  /**
   * A function for generating extra props for each custom Cell component based
   * on its Id.
   */
  /// TableInHtmlTableProps.getCellComponentProps
  /**
   * A string className to use on the root of the resulting element.
   */
  /// TableInHtmlTableProps.className
  /**
   * Whether a header row should be rendered at the top of the table, defaulting
   * to `true`.
   */
  /// TableInHtmlTableProps.headerRow
  /**
   * Whether an Id column should be rendered on the left of the table,
   * defaulting to `true`.
   */
  /// TableInHtmlTableProps.idColumn
  /**
   * An optional list of Cell Ids to use for rendering a prescribed set of the
   * Row's Cells in a given order.
   */
  /// TableInHtmlTableProps.customCellIds
}
/**
 * TableInHtmlTableProps props are used for components that will render a
 * Table in an HTML table, such as the TableInHtmlTableProps component.
 * @category Props
 * @since v4.1.0
 */
/// TableInHtmlTableProps
{
  /**
   * The Id of the Table in the Store to be rendered.
   */
  /// SortedTableInHtmlTableProps.tableId
  /**
   * The Id of the Cell whose values are used for the sorting. If omitted, the
   * view will sort the Row Id itself.
   */
  /// SortedTableInHtmlTableProps.cellId
  /**
   * Whether the sorting should be in descending order.
   */
  /// SortedTableInHtmlTableProps.descending
  /**
   * The number of Row Ids to skip for pagination purposes.
   */
  /// SortedTableInHtmlTableProps.offset
  /**
   * The maximum number of Row Ids to return.
   */
  /// SortedTableInHtmlTableProps.limit
  /**
   * The Store to be accessed: omit for the default context Store, provide an Id
   * for a named context Store, or provide an explicit reference.
   */
  /// SortedTableInHtmlTableProps.store
  /**
   * A custom component for rendering each Cell in the Table (to override the
   * default CellView component).
   */
  /// SortedTableInHtmlTableProps.cellComponent
  /**
   * A function for generating extra props for each custom Cell component based
   * on its Id.
   */
  /// SortedTableInHtmlTableProps.getCellComponentProps
  /**
   * A string className to use on the root of the resulting element.
   */
  /// SortedTableInHtmlTableProps.className
  /**
   * Whether a header row should be rendered at the top of the table, defaulting
   * to `true`.
   */
  /// SortedTableInHtmlTableProps.headerRow
  /**
   * Whether an Id column should be rendered on the left of the table,
   * defaulting to `true`.
   */
  /// SortedTableInHtmlTableProps.idColumn
  /**
   * An optional list of Cell Ids to use for rendering a prescribed set of the
   * Row's Cells in a given order.
   */
  /// SortedTableInHtmlTableProps.customCellIds
}
/**
 * SortedTableInHtmlTableProps props are used for components that will render a
 * sorted Table in an HTML table, such as the SortedTableInHtmlTable component.
 * @category Props
 * @since v4.1.0
 */
/// SortedTableInHtmlTableProps
{
  /**
   * The Store to be accessed: omit for the default context Store, provide an Id
   * for a named context Store, or provide an explicit reference.
   */
  /// ValuesInHtmlTableProps.store
  /**
   * A custom component for rendering each Value in the Store (to override the
   * default ValueView component).
   */
  /// ValuesInHtmlTableProps.valueComponent
  /**
   * A function for generating extra props for each custom Value component based
   * on its Id.
   */
  /// ValuesInHtmlTableProps.getValueComponentProps
  /**
   * A string className to use on the root of the resulting element.
   */
  /// ValuesInHtmlTableProps.className
  /**
   * Whether a header row should be rendered at the top of the table, defaulting
   * to `true`.
   */
  /// ValuesInHtmlTableProps.headerRow
  /**
   * Whether an Id column should be rendered on the left of the table,
   * defaulting to `true`.
   */
  /// ValuesInHtmlTableProps.idColumn
}
/**
 * ValuesInHtmlTableProps props are used for components that will render Values
 * in an HTML table, such as the ValuesInHtmlTable component.
 * @category Props
 * @since v4.1.0
 */
/// ValuesInHtmlTableProps
/**
 * The TableInHtmlTable component renders the contents of a single Table in a
 * Store as an HTML <table> element, and registers a listener so that any
 * changes to that result will cause a re-render.
 *
 * The component's props identify which Table to render based on Table Id, and
 * Store (which is either the default context Store, a named context Store, or
 * by explicit reference).
 *
 * This component renders a Table by iterating over its Row objects. By default
 * these are in turn rendered with the RowInHtmlTr component, but you can
 * override this behavior by providing a `rowComponent` prop, a custom component
 * of your own that will render a Row based on RowProps. You can also pass
 * additional props to your custom component with the `getRowComponentProps`
 * callback prop.
 *
 * This component uses the useRowIds hook under the covers, which means that any
 * changes to the structure of the Table will cause a re-render.
 *
 * You can use the `headerRow` and `idColumn` props to control whether the Ids
 * appear in a <th> element at the top of the table, and the start of each row.
 * @param props The props for this component.
 * @returns A rendering of the Table in a <table> element.
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The TableInHtmlTable component within it then renders the Table in
 * a <table> element with a CSS class.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <TableInHtmlTable tableId="pets" className="table" />
 * );
 *
 * const store = createStore().setTable('pets', {
 *   fido: {species: 'dog'},
 *   felix: {species: 'cat'},
 * });
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table class="table">
 *   <thead>
 *     <tr>
 *       <th>Id</th>
 *       <th>species</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <th>fido</th>
 *       <td>dog</td>
 *     </tr>
 *     <tr>
 *       <th>felix</th>
 *       <td>cat</td>
 *     </tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The TableInHtmlTable component within it then renders the Table
 * with a custom Row component and a custom props callback. The header row at
 * the top of the table and the Id column at the start of each row is removed.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <TableInHtmlTable
 *     tableId="pets"
 *     cellComponent={FormattedCellView}
 *     getCellComponentProps={(rowId, cellId) => ({bold: rowId == 'fido'})}
 *     headerRow={false}
 *     idColumn={false}
 *   />
 * );
 * const FormattedCellView = ({tableId, rowId, cellId, bold}) => (
 *   <>
 *     {bold ? <b>{rowId}</b> : rowId}:
 *     <CellView
 *       tableId={tableId}
 *       rowId={rowId}
 *       cellId={cellId}
 *     />
 *   </>
 * );
 *
 * const store = createStore().setTable('pets', {
 *   fido: {species: 'dog'},
 *   felix: {species: 'cat'},
 * });
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table>
 *   <tbody>
 *     <tr>
 *       <td><b>fido</b>:dog</td>
 *     </tr>
 *     <tr>
 *       <td>felix:cat</td>
 *     </tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @category Store components
 * @since v4.1.0
 */
/// TableInHtmlTable
/**
 * The SortedTableInHtmlTable component renders the contents of a single sorted
 * Table in a Store, as an HTML <table> element, and registers a listener so
 * that any changes to that result will cause a re-render.
 *
 * The component's props identify which Table to render based on Table Id, and
 * Store (which is either the default context Store, a named context Store, or
 * by explicit reference). It also takes a Cell Id to sort by and a boolean to
 * indicate that the sorting should be in descending order. The `offset` and
 * `limit` props are used to paginate results, but default to `0` and
 * `undefined` to return all available Row Ids if not specified.
 *
 * This component renders a Table by iterating over its Row objects, in the
 * order dictated by the sort parameters. By default these are in turn rendered
 * with the RowInHtmlTr component, but you can override this behavior by
 * providing a `rowComponent` prop, a custom component of your own that will
 * render a Row based on RowProps. You can also pass additional props to your
 * custom component with the `getRowComponentProps` callback prop.
 *
 * This component uses the useSortedRowIds hook under the covers, which means
 * that any changes to the structure or sorting of the Table will cause a
 * re-render.
 *
 * You can use the `headerRow` and `idColumn` props to control whether the Ids
 * appear in a <th> element at the top of the table, and the start of each row.
 * @param props The props for this component.
 * @returns A rendering of the Table in a <table> element.
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The SortedTableInHtmlTable component within it then renders the
 * Table in a <table> element with a CSS class.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <SortedTableInHtmlTable
 *     tableId="pets"
 *     cellId="species"
 *     className="table"
 *   />
 * );
 *
 * const store = createStore().setTables({
 *   pets: {
 *     fido: {species: 'dog'},
 *     felix: {species: 'cat'},
 *   },
 * });
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table class="table">
 *   <thead>
 *     <tr>
 *       <th>Id</th>
 *       <th>species</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <th>felix</th>
 *       <td>cat</td>
 *     </tr>
 *     <tr>
 *       <th>fido</th>
 *       <td>dog</td>
 *     </tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The SortedTableInHtmlTable component within it then renders the
 * Table with a custom Row component and a custom props callback. The header row
 * at the top of the table and the Id column at the start of each row is
 * removed.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <SortedTableInHtmlTable
 *     tableId="pets"
 *     cellId="species"
 *     cellComponent={FormattedCellView}
 *     getCellComponentProps={(rowId, cellId) => ({bold: rowId == 'fido'})}
 *     headerRow={false}
 *     idColumn={false}
 *   />
 * );
 * const FormattedCellView = ({tableId, rowId, cellId, bold}) => (
 *   <>
 *     {bold ? <b>{rowId}</b> : rowId}:
 *     <CellView
 *       tableId={tableId}
 *       rowId={rowId}
 *       cellId={cellId}
 *     />
 *   </>
 * );
 *
 * const store = createStore().setTables({
 *   pets: {
 *     fido: {species: 'dog'},
 *     felix: {species: 'cat'},
 *   },
 * });
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table>
 *   <tbody>
 *     <tr>
 *       <td>felix:cat</td>
 *     </tr>
 *     <tr>
 *       <td><b>fido</b>:dog</td>
 *     </tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @category Store components
 * @since v4.1.0
 */
/// SortedTableInHtmlTable
/**
 * The ValuesInHtmlTable component renders the keyed value contents of a Store
 * as an HTML <table> element, and registers a listener so that any changes to
 * that result will cause a re-render.
 *
 * The component's props identify which Row to render based on Table Id, Row Id,
 * and Store (which is either the default context Store, a named context Store,
 * or an explicit reference).
 *
 * This component renders a Store by iterating over its Value objects. By
 * default these are in turn rendered with the ValueInHtmlTr component, but you
 * can override this behavior by providing a `valueComponent` prop, a custom
 * component of your own that will render a Value based on ValueProps. You can
 * also pass additional props to your custom component with the
 * `getValueComponentProps` callback prop.
 *
 * This component uses the useValueIds hook under the covers, which means that
 * any changes to the structure of the Values in the Store will cause a
 * re-render.
 *
 * You can use the `headerRow` and `idColumn` props to control whether labels
 * and Ids appear in a <th> element at the top of the table, and the start of
 * each row.
 * @param props The props for this component.
 * @returns A rendering of the Values in a <table> element.
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The ValuesInHtmlTable component within it then renders the Values
 * in a <table> element with a CSS class.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <ValuesInHtmlTable className="values" />
 * );
 *
 * const store = createStore().setValues({open: true, employees: 3});
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table class="values">
 *   <thead>
 *     <tr>
 *       <th>Id</th>
 *       <th>Value</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <th>open</th>
 *       <td>true</td>
 *     </tr>
 *     <tr>
 *       <th>employees</th>
 *       <td>3</td>
 *     </tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @example
 * This example creates a Provider context into which a default Store is
 * provided. The ValuesInHtmlTable component within it then renders the Row
 * with a custom Cell component and a custom props callback. The header row at
 * the top of the table and the Id column at the start of each row is removed.
 *
 * ```jsx
 * const App = ({store}) => (
 *   <Provider store={store}>
 *     <Pane />
 *   </Provider>
 * );
 * const Pane = () => (
 *   <ValuesInHtmlTable
 *     valueComponent={FormattedValueView}
 *     getValueComponentProps={(valueId) => ({bold: valueId == 'open'})}
 *     headerRow={false}
 *     idColumn={false}
 *   />
 * );
 * const FormattedValueView = ({valueId, bold}) => (
 *   <>
 *     {bold ? <b>{valueId}</b> : valueId}
 *     {': '}
 *     <ValueView valueId={valueId} />
 *   </>
 * );
 *
 * const store = createStore().setValues({open: true, employees: 3});
 * const app = document.createElement('div');
 * ReactDOMClient.createRoot(app).render(<App store={store} />); // !act
 * console.log(app.innerHTML);
 * // -> `
 * <table>
 *   <tbody>
 *     <tr><td><b>open</b>: true</td></tr>
 *     <tr><td>employees: 3</td></tr>
 *   </tbody>
 * </table>
 * `
 * ```
 * @category Store components
 * @since v4.1.0
 */
/// ValuesInHtmlTable
