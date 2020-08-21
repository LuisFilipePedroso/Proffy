type Params = {
  ids: ReadonlyArray<string>;
  Repository: any;
}

async function Loader<T>({ ids, Repository }: Params): Promise<T[]> {
  const data = await new Repository().findByIds(ids);

  const dataMap: { [key: string]: T } = {};

  data?.forEach((d: T) => {
    dataMap[(d as any).id] = d;
  })

  return ids.map(id => dataMap[id]);
}

export default Loader;
